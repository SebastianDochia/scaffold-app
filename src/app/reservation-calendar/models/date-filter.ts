export interface DateFilter {
  shouldBeSelectable(d: Date | null): boolean;
}
