import { Component, OnInit, Input, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { WySliderStyle } from './wy-slider-types';

@Component({
  selector: 'app-wy-slider-handle',
  template: `<div class="wy-slider-handle" [ngStyle]="style"></div>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WySliderHandleComponent implements OnInit, OnChanges {
  @Input() wyVertical = false; //是否垂直模式
  @Input() wyOffset: number; // 移动距离

  style: WySliderStyle = {};
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.wyOffset){
      // 水平方向改变left，垂直方向改变bottom
      this.style[this.wyVertical ? 'bottom' : 'left'] = this.wyOffset + '%';
    }
  }
}
