import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SharedDeclarationsModule } from '../../../shared_declations/shared.declarations.module';

@Component({
  standalone: true,
  selector: 'app-cofirm-modal',
  imports: [SharedDeclarationsModule],
  templateUrl: './cofirm-modal.component.html',
  styles: ``
})
export class CofirmModalComponent {
 @Input() showModal: boolean = false;
  @Input() title: string = 'Confirm Action';
  @Input() message: string = 'Are you sure you want to continue?';
  @Input() confirmText: string = 'Yes';
  @Input() cancelText: string = 'Cancel';

  @Output() onConfirm = new EventEmitter<void>();
  @Output() onCancel = new EventEmitter<void>();

  confirm(): void {
    this.onConfirm.emit();
  }

  cancel(): void {
    this.onCancel.emit();
  }
}
