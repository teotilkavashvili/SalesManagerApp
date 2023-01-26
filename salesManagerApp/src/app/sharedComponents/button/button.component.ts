import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

/**
 * Dynamic Button Component
 */
@Component({
  selector: 'aff-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit,OnChanges {

  /**
   * Get Button Value Text from parent
   */
  @Input() text: string = '';

  @Input() disabled: boolean = false;
  /**
   * Get Button Type from parent
   */
  @Input() type: string = 'button';

  /**
   * Get Button Name for form from parent
   */
  @Input() name:string= ''; // for output

  /**
   * Get Button options from parent
   */
  @Input() options: any = {};

  @Input() btnStyle:'primary' | 'thirdy' | 'warning' = 'primary';

  @Input() state: 'normal' | 'active' = 'normal';

  @Input() disableStyle: 'normal' | 'active' | 'disable'  = 'normal';
  
  @Input() loader: boolean = false;

  @Input() tooltip='';

  /**
   * Handle Click Event for sending to parent
   */
  @Output() onClicked = new EventEmitter();
  classList: string[] = [];



  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    this.classList=[];
    this.classList.push(this.btnStyle);
    this.classList.push(this.state);   
  }

  /**
   * @ignore
   */
  ngOnInit() {   
  }

  get renderClass(){
      return this.classList.join(' ');
  }
    
  get disableClass(){
    if(this.disabled && this.name==="campBtn"){
      this.disableStyle='disable';
    }else if(this.disabled && this.name!=="campBtn"){
      this.disableStyle='active'
    }
    return this.disableStyle
  }

  onClick() {
    const option = {
        value: true,
        name: this.name,
    };
    this.onClicked.emit(option);
  }

}
