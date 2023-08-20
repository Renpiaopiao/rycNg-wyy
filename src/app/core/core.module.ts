import { NgModule, Optional, SkipSelf } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServicesModule } from '../services/services.module';
import { PagesModule } from '../pages/pages.module';
import { ShareModule } from '../share/share.module';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
registerLocaleData(zh);
import { NZ_I18N, zh_CN } from 'ng-zorro-antd';


@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ServicesModule,
    PagesModule,
    ShareModule,
    AppRoutingModule,
  ],
  exports:[
    ShareModule,
    AppRoutingModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],

})
export class CoreModule {
  //  @SkipSelf()跳过自身装饰器   @Optional()默认赋值为null装饰器
  constructor(@SkipSelf() @Optional() parentModule:CoreModule){
    if(parentModule){
      throw new Error("CoreModule只能被appModule引入");
    }
  }
}
