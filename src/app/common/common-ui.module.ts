import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SegmentsSlideComponent } from './segments-slide/segments-slide.component';
import { IonicModule } from '@ionic/angular';
import { SlideDirective } from './segments-slide/slide.directive';
import { SlideItemComponent } from './slide-item/slide-item.component';

@NgModule({
  declarations: [SegmentsSlideComponent, SlideItemComponent, SlideDirective],
  imports: [CommonModule, IonicModule],
  exports: [SegmentsSlideComponent, SlideItemComponent, SlideDirective],
})
export class CommonUiModule {}
