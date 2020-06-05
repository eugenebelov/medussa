import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SegmentsSlideComponent } from './segments-slide/segments-slide.component';
import { IonicModule } from '@ionic/angular';
import { SlideItemComponent } from './slide-item/slide-item.component';

@NgModule({
  declarations: [SegmentsSlideComponent, SlideItemComponent],
  imports: [CommonModule, IonicModule],
  exports: [SegmentsSlideComponent, SlideItemComponent],
})
export class CommonUiModule {}
