import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { WyUiModule } from './wy-ui/wy-ui.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    FormsModule,
    WyUiModule
  ],
  exports:[
    CommonModule,
    NgZorroAntdModule,
    FormsModule,
    WyUiModule,
  ]
})
export class ShareModule { }
