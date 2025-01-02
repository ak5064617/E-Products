import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cumstom-dropdown',
  templateUrl: './cumstom-dropdown.component.html',
  styleUrls: ['./cumstom-dropdown.component.css']
})
export class CumstomDropdownComponent {
  @Input() options: string[] = [];
  @Input() placeholder: string = 'Select';
  @Input() selected: string | null = null;
  @Output() selectedChange = new EventEmitter<string>();
  @Input() isOpen: boolean =false;
  @Output() toggle = new EventEmitter<void>();

  toggleDropdown(): void {
    this.isOpen = !this.isOpen;
  }

  selectOption(option: string): void {
    this.selected = option;
    this.selectedChange.emit(option);
    this.isOpen = false;
  }
  
  onToggle(){
    this.toggle.emit();
  }
}
