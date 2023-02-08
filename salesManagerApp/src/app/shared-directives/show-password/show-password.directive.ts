import { Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[affShowPassword]'
})

export class PasswordDirective {
  private _shown = false;

  constructor(private el: ElementRef) {
      this.setup();
  }

  toggle(): void {
    this._shown = !this._shown;
    const element = this.el.nativeElement.previousSibling;
    if (this._shown) {
      element.tagName === 'INPUT' ? element.setAttribute('type', 'text')
                                  : element.querySelector('.input').setAttribute('type', 'text');
      this.el.nativeElement.src = '/assets/images/hidden-eye.svg';
    } else {
      element.tagName === 'INPUT' ? element.setAttribute('type', 'password')
                                  : element.querySelector('.input').setAttribute('type', 'password');
      this.el.nativeElement.src = '/assets/images/eye.svg';
    }
  }

  setup(): void {
    this.el.nativeElement.addEventListener('click', () => {
        this.toggle();
      });
    }
}