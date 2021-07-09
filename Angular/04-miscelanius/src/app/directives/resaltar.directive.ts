import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltar]'
})
export class ResaltarDirective {

  constructor( private el: ElementRef) {
    console.log("Directiva Activa");
    
  }
  
  @Input("appResaltar") color: string;

  @HostListener('mouseenter') mouseEntro() {
    this.resaltar(this.color || 'yellow');
    // this.el.nativeElement.style.backgroundColor = 'red';
  }
  @HostListener('mouseleave') mouseSalio() {
    // this.el.nativeElement.style.backgroundColor = null;
    this.resaltar(null);
   }
  private resaltar(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
   }
  
}
