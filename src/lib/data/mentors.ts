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
    "/images/mentors/1.png",
    "#B2DFDC"
  ),
  new Mentor(
    "Anjaly Elsa Reji",
    "Chartered Accountant",
    "/images/mentors/2.png",
    "#C0DFB2"
  ),
  new Mentor(
    "Anjana Thachil",
    "Chartered Accountant",
    "/images/mentors/3.png",
    "#DFD2B2"
  ),
  new Mentor(
    "Arif Omar",
    "Chartered Accountant",
    "/images/mentors/4.png",
    "#B2DFDC"
  ),
  new Mentor(
    "Praveena Muralee C",
    "Chartered Accountant",
    "/images/mentors/5.png",
    "#C0DFB2"
  ),
  new Mentor(
    "Vishnu Kadengal",
    "CA Finalist",
    "/images/mentors/6.png",
    "#DFD2B2"
  ),
  new Mentor(
    "Adhil M",
    "Certified Management Accountant",
    "/images/mentors/6.png",
    "#B2DFDC"
  ),
];
