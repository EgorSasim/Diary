import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, filter, map, switchMap, tap } from 'rxjs';
import { ListApiService } from 'src/app/api/list/list-api.service';
import { ListPageService } from 'src/app/modules/lists/list-page/list-page.service';
import { List } from 'src/app/modules/lists/lists.typings';

@Component({
  selector: 'dft-list-page',
  templateUrl: './list-page.component.html',
  styleUrl: './list-page.component.scss',
  providers: [ListPageService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListPageComponent implements OnInit {
  public list$: BehaviorSubject<List> = new BehaviorSubject(null);
  private id: number;
  constructor(
    private listPageService: ListPageService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  public ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        map((p) => p['id']),
        tap((id) => (this.id = id)),
        switchMap((id) => this.listPageService.getList(id)),
        tap((list) => {
          if (!list) {
            this.router.navigate['/home'];
          }
        }),
        filter((list) => !!list),
        tap((list) => this.list$.next(list)),
        switchMap((list) => this.listPageService.getTasks(list))
      )
      .subscribe((id) => console.log('id: ', id));
  }
}
