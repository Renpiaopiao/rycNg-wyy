import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
} from "@angular/core";

@Component({
  selector: "app-my-carousel",
  templateUrl: "./my-carousel.component.html",
  styleUrls: ["./my-carousel.component.less"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyCarouselComponent implements OnInit {
  @Input() activeIndex = 0;
  @ViewChild("dot", { static: true }) dotRef: TemplateRef<any>;
  @Output() changeSlide = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onChangeSlide(type: string) {
    this.changeSlide.emit(type);
  }
}
