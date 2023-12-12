import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { RefreshDataService } from 'src/app/common/services/refreshData.service';
import { LightboxService } from 'src/app/modules/common/lightbox/lightbox.component.service';
import { EmptyPageService } from 'src/app/modules/empty-page/empty-page.service';
import { Space } from 'src/app/modules/spaces/typings';

@Component({
  selector: 'dft-empty-page',
  templateUrl: './empty-page.component.html',
  styleUrl: './empty-page.component.scss',
  providers: [LightboxService, EmptyPageService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmptyPageComponent {
  public userName$: BehaviorSubject<{ name: string }> = new BehaviorSubject(
    null
  );

  constructor(
    private lightboxService: LightboxService,
    private refreshDataService: RefreshDataService,
    private emptyPageService: EmptyPageService,
    private router: Router
  ) {
    this.getName();
  }

  public isLightboxVisible$: Observable<boolean> =
    this.lightboxService.getVisibility$();

  public showCreateSpaceModal(): void {
    this.lightboxService.showLightbox();
  }

  public closeModal(): void {
    this.lightboxService.hideLightbox();
  }

  public refreshData(space: Space): void {
    this.refreshDataService.refreshData();
    this.router.navigate(['home', 'space', space.id]);
  }

  private getName(): void {
    this.emptyPageService.getUserName().subscribe((res) => {
      this.userName$.next({ name: res.userName });
    });
  }
}
