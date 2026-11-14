/** Join conditional CSS class names without adding empty values. */
export function classNames(...values: Array<string | false | null | undefined>): string {
  return values.filter(Boolean).join(" ");
}
