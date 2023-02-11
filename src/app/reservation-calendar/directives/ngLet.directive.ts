import {
  Directive,
  Input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

interface NgLetContext<T> {
  ngLet: T;
  $implicit: T;
}

@Directive({
  selector: '[ngLet]'
})
export class NgLetDirective<T> {
  @Input()
  set ngLet(value: T) {
    this.context.$implicit = this.context.ngLet = value;
    if (!this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef, this.context);
      this.hasView = true;
    }
  }

  private context: NgLetContext<T | null> = { ngLet: null, $implicit: null };
  private hasView: boolean = false;

  constructor(private viewContainer: ViewContainerRef, private templateRef: TemplateRef<NgLetContext<T>>) { }

  /** @internal */
  public static ngLetUseIfTypeGuard: void;

  static ngTemplateGuard_ngLet: 'binding';

  static ngTemplateContextGuard<T>(dir: NgLetDirective<T>, ctx: any): ctx is NgLetContext<Exclude<T, false | 0 | '' | null | undefined>> {
    return true;
  }
}
