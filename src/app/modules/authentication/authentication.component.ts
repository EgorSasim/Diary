import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'dft-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthenticationComponent {}
