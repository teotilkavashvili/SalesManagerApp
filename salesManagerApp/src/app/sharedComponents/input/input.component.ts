import { Component, OnInit, Input, Output, ViewChild, ElementRef, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @ViewChild('inputElement', { static: true }) inputElement: ElementRef;

  type: string = '';

  @Input() options: any = {
    placeholder: 'placeholder',
    name: '',
    type: 'text',
    value: ''
  };

  @Input() class: string = '';
  @Input() style: any = {};
  @Input() disabled: boolean = false;
  @Input() error: string = '';
  @Input() autoFocus: boolean = false;
  @Input() helper: string = '';
  @Input() autocomplete: string = '';
  @Input() showButton: boolean = false;
  @Output() onOutPutValue = new EventEmitter();
  @Output() onkeyUpOutPutValue = new EventEmitter();

  showState: boolean = false;

  constructor() { }

  ngOnInit() {
    if (this.autoFocus) {
      this.inputElement.nativeElement.focus();
    }
  }

  onChange(inputValue) {
    const options = {
      value: this.type === 'file' ? inputValue.target.files : inputValue.target.value,
      name: this.inputElement.nativeElement.name
    }
    this.onOutPutValue.emit(options);
  }

  keyUpValue(inputValue){
    if(inputValue.target.value){
      const options = {
        value: inputValue.target.value,
        id: this.inputElement.nativeElement.name
      }
    this.onkeyUpOutPutValue.emit(options);
    }else{
        this.error= 'Please fill field';
    }

  }

  unmask(){
    this.options.type = this.showState ? 'password' : 'text';
    this.showState = !this.showState;
  }


}
