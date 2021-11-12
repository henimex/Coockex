import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
    // Dropdown Open class adding but not working !
    console.log("This method will work with bootstrap 3")
  }

  constructor() {
  }

}
