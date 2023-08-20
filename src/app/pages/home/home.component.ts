import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NzCarouselComponent } from 'ng-zorro-antd';
import { map } from 'rxjs/internal/operators';
import { Banner, HotTag, Singer, SongSheet } from 'src/app/services/data-types/common.types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  
  banners: Banner[];
  hotTags: HotTag[];
  songSheetList: SongSheet[];
  singers: Singer[];
  CarouselActiveIndex = 0;
  @ViewChild(NzCarouselComponent, { static: true }) private nzCarousel: NzCarouselComponent;

  constructor(
    private route:ActivatedRoute
  ) { 
    this.route.data.pipe(map(res => res.homeDatas)).subscribe(([banners,hotTags,songSheetList,singers]) => {
      //路由守卫返回值再解构赋值
      this.banners = banners
      this.hotTags = hotTags
      this.songSheetList = songSheetList
      this.singers = singers
    })
  }

  ngOnInit() {
  
  }

  onBeforeChange({ to }){
    this.CarouselActiveIndex = to
  }

  onChangeSlide(type: string){
    this.nzCarousel[type]()
  }

}
