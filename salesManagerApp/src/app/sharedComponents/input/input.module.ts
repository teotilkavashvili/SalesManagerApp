import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { InputComponent } from './input.component';
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
    declarations: [
        InputComponent
    ],
    imports: [
        CommonModule,
        TranslateModule,
    ],
    exports: [
        InputComponent
    ]
})

/**
 * Module for Input component
 */
export class InputModule { }