export interface Styles {
  [key: string]: string;
}

export function parseStyles(styles: Styles): string {
  return Object.values(styles).join(" ");
}
