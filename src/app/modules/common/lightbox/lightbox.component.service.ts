import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class LightboxService {
  private isVisible$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  public showLightbox(): void {
    this.isVisible$.next(true);
  }

  public hideLightbox(): void {
    this.isVisible$.next(false);
  }

  public getVisibility$(): Observable<boolean> {
    return this.isVisible$.asObservable();
  }
}
