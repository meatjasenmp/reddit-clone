export interface Styles {
  [key: string]: string;
}

export function parseStyles(styles: Styles) {
  return Object.values(styles).join(" ");
}
