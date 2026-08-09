// Tailwind doesn't export its cn, so a tiny class joiner is all we need.
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(' ');
}
