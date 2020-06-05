import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[msdSegmentSlide]',
})
export class SlideDirective {
  constructor(public viewContainer: ViewContainerRef) {}
}
