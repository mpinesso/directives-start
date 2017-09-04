import {
  Directive,
  OnInit,
  ElementRef,
  Renderer2,
  HostListener,
  HostBinding,
  Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  @Input() defaultColor: string = 'transparent';
  @Input('appBetterHighlight') highlightColor: string = 'yellow';
  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngOnInit(){
    // this.renderer.setStyle(this.element.nativeElement, 'background-color', 'yellow');
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.element.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.element.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;
  }
}
