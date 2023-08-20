import { NgModule } from '@angular/core';
import { ShareModule } from 'src/app/share/share.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MyCarouselComponent } from './components/my-carousel/my-carousel.component';
import { MemberCardComponent } from './components/member-card/member-card.component';


@NgModule({
  declarations: [HomeComponent, MyCarouselComponent, MemberCardComponent],
  imports: [
    ShareModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
