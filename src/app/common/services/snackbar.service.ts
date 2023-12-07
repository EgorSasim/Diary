import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

const snackToStylesMap = new Map([
  ['info', '.snackbar-info'],
  ['error', '.snackbar-error'],
  ['warn', '.snackbar-warn'],
]);

@Injectable({ providedIn: 'root' })
export class SnackBarService {
  constructor(private matSnackBar: MatSnackBar) {}

  public showSnack(
    text: string,
    duration: number,
    type: string = 'info'
  ): void {
    this.matSnackBar.open(text, 'close', {
      panelClass: snackToStylesMap.get(type) || snackToStylesMap.get('info'),
      duration,
    });
  }
}
