import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
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
  @Output() public listCreate: EventEmitter<void> = new EventEmitter();
  public isLightboxVisible$ = this.ligthboxService.getVisibility$();
  public renameSpace$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public createList$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public selectedSpace$: ReplaySubject<Space> = new ReplaySubject(1);

  constructor(
    private spacesAccordionService: SpacesAccordionService,
    private ligthboxService: LightboxService
  ) {}

  public addItem(event: Event): void {
    this.stopPropagation(event);
  }

  public showRenameSpaceModal(space: Space): void {
    this.renameSpace$.next(true);
    this.selectedSpace$.next(space);
    this.ligthboxService.showLightbox();
  }

  public showCreateListModal(space: Space): void {
    console.log('showCreateListModal');
    this.createList$.next(true);
    this.selectedSpace$.next(space);
    this.ligthboxService.showLightbox();
  }

  public hideModal(): void {
    this.ligthboxService.hideLightbox();
    this.createList$.next(false);
    this.renameSpace$.next(false);
  }

  public removeSpace(space: Space): void {
    this.spacesAccordionService
      .removeSpace(space)
      .subscribe(() => this.spaceRemove.emit());
  }

  public emitSpaceRename(): void {
    this.spaceRename.emit();
  }

  public emitListCreate(): void {
    this.listCreate.emit();
  }

  public stopPropagation(event: Event): void {
    event.stopPropagation();
  }
}
