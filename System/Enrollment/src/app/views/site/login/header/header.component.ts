import { Component } from '@angular/core';
import { SharedDeclarationsModule } from '../../../../shared_declations/shared.declarations.module';

@Component({
  standalone: true,
  selector: 'app-header',
  imports: [SharedDeclarationsModule],
  templateUrl: './header.component.html',
  styles: ``
})
export class HeaderComponent {

}
