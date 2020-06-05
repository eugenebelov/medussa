import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SegmentsSlideComponent } from './segments-slide/segments-slide.component';
import { IonicModule } from '@ionic/angular';
import { SlideDirective } from './segments-slide/slide.directive';

@NgModule({
  declarations: [SegmentsSlideComponent, SlideDirective],
  imports: [CommonModule, IonicModule],
  exports: [SegmentsSlideComponent, SlideDirective],
})
export class CommonUiModule {}
