import { Directive, ElementRef, OnInit, HostListener, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appChangeCase]'
})
export class ChangeCaseDirective implements OnInit {

  // @Input('appChangeCase') case: string;
  @Input() case: string;

  @HostListener('blur') onblur() {
    // this.elRef.nativeElement.value = this.elRef.nativeElement.value;
    const changedValue: string =
      this.case === 'upper'
        ? this.elRef.nativeElement.value.toUpperCase()
        : this.elRef.nativeElement.value.toLowerCase();

    this.renderer.setProperty(this.elRef.nativeElement, 'value', changedValue);
  }

  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    console.log(this.elRef.nativeElement.value);
  }
}
