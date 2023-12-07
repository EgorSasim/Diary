import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { LightboxService } from './lightbox.component.service';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { filter, merge, takeUntil } from 'rxjs';
import { TemplatePortal } from '@angular/cdk/portal';
import { isKeyPressed } from 'src/app/common/functions/keyboard';
import { KeyboardKey } from 'src/app/common/enums/keyboard.keys';
import { DestroyService } from 'src/app/common/services/destroy.service';

@Component({
  selector: 'dft-lightbox',
  templateUrl: './lightbox.component.html',
  styleUrls: ['./lightbox.component.scss'],
  providers: [DestroyService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LightboxComponent implements OnInit, OnDestroy {
  @ViewChild('templateRef', { static: true })
  private templateRef: TemplateRef<{}>;
  private overlayRef: OverlayRef | null;

  constructor(
    private ligthboxService: LightboxService,
    private overlay: Overlay,
    private viewContainerRef: ViewContainerRef,
    private destroyService: DestroyService
  ) {}

  public ngOnInit(): void {
    this.ligthboxService
      .getVisibility$()
      .pipe(takeUntil(this.destroyService.destroy$))
      .subscribe((isVisible) =>
        isVisible ? this.showLightbox() : this.destroyOverlay()
      );
  }

  public ngOnDestroy(): void {
    this.ligthboxService.hideLightbox();
    this.destroyOverlay();
  }

  private showLightbox(): void {
    this.overlayRef = this.overlay.create({
      height: '100vh',
      width: '100vw',
      minWidth: '100vw',
      panelClass: 'dft-lightbox',
    });
    const template = new TemplatePortal(
      this.templateRef,
      this.viewContainerRef
    );
    this.overlayRef.attach(template);
    this.overlayRef
      .keydownEvents()
      .pipe(
        filter((event) => isKeyPressed(event, KeyboardKey.Esc)),
        takeUntil(
          merge(this.overlayRef.detachments(), this.destroyService.destroy$)
        )
      )
      .subscribe(() => this.ligthboxService.hideLightbox());
  }

  private destroyOverlay(): void {
    if (this.overlayRef) {
      this.overlayRef.detach();
      this.overlayRef = null;
    }
  }
}
