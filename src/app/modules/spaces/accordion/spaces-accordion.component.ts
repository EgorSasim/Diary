import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { LightboxService } from 'src/app/modules/common/lightbox/lightbox.component.service';
import { SpacesAccordionService } from 'src/app/modules/spaces/accordion/spaces-accordion.service';
import { Space } from 'src/app/modules/spaces/typings';
@Component({
  selector: 'dft-spaces-accordion',
  templateUrl: './spaces-accordion.component.html',
  styleUrls: ['./spaces-accordion.component.scss'],
  providers: [SpacesAccordionService, LightboxService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpacesAccrodionComponent {
  @Input() public spaces: Space[];
  @Output() public spaceRemove: EventEmitter<void> = new EventEmitter();
  @Output() public spaceRename: EventEmitter<void> = new EventEmitter();
  public isLightboxVisible$ = this.ligthboxService.getVisibility$();
  public renamedSpace$: ReplaySubject<Space> = new ReplaySubject(1);

  constructor(
    private spacesAccordionService: SpacesAccordionService,
    private ligthboxService: LightboxService
  ) {}

  public addItem(event: Event): void {
    this.stopPropagation(event);
  }

  public showRenameSpaceModal(space: Space): void {
    this.renamedSpace$.next(space);
    this.ligthboxService.showLightbox();
  }

  public hideRenameSpaceModal(): void {
    this.ligthboxService.hideLightbox();
  }

  public removeSpace(space: Space): void {
    this.spacesAccordionService
      .removeSpace(space)
      .subscribe(() => this.spaceRemove.emit());
  }

  public emitSpaceRename(): void {
    this.spaceRename.emit();
  }

  public stopPropagation(event: Event): void {
    event.stopPropagation();
  }
}
