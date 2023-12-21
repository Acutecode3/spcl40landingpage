class Link {
  href: string;
  text: string;
  constructor(href: string, text: string) {
    this.href = href;
    this.text = text;
  }
}

export type NavLinksType = Link[];

export const homeNavbar = [
  new Link("#highlights", "Highlights"),
  new Link("#about", "About"),
  new Link("#career-path", "Career Path"),
  new Link("#mentors", "Meet your Mentors"),
  new Link("#journey", "Programme Journey"),
  new Link("#fees-and-finance", "Fees and Financing"),
  new Link("#application-process", "Application Process"),
  new Link("#faq", "FAQ"),
];

export const formPageNavbar = [
  new Link("#form", "Highlights"),
  new Link("#mentors", "Meet your Mentors"),
  new Link("#application-process", "Application Process"),
  new Link("#faq", "FAQ"),
];

export const thanksPageNavbar = [new Link("/", "Go home")];
