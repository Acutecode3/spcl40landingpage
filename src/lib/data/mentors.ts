class Mentor {
  name: string;
  title: string;
  image: string;
  cardBg: string;
  constructor(name: string, title: string, image: string, cardBg: string) {
    this.name = name;
    this.title = title;
    this.image = image;
    this.cardBg = cardBg;
  }
}

export const mentors = [
  new Mentor(
    "Harshin Valamary",
    "Chartered Accountant",
    "/images/mentors/2.webp",
    "#B2DFDC"
  ),
  new Mentor(
    "Anjaly Elsa Reji",
    "Chartered Accountant",
    "/images/mentors/1.webp",
    "#C0DFB2"
  ),
  new Mentor(
    "Anjana Thachil",
    "Chartered Accountant",
    "/images/mentors/3.webp",
    "#DFD2B2"
  ),
  new Mentor(
    "Harshin Valamary",
    "Chartered Accountant",
    "/images/mentors/2.webp",
    "#B2DFDC"
  ),
  new Mentor(
    "Anjaly Elsa Reji",
    "Chartered Accountant",
    "/images/mentors/1.webp",
    "#C0DFB2"
  ),
  new Mentor(
    "Anjana Thachil",
    "Chartered Accountant",
    "/images/mentors/3.webp",
    "#DFD2B2"
  ),
];
