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
    "Sreejith Kuniyil",
    "Chartered Accountant",
    "/images/mentors/0.png",
    "#B2DFDC"
  ),
  new Mentor(
    "Anjaly Elsa Reji",
    "Chartered Accountant",
    "/images/mentors/2.png",
    "#C0DFB2"
  ),
  new Mentor(
    "Harshin Valamary",
    "Chartered Accountant",
    "/images/mentors/1.png",
    "#DFD2B2"
  ),
  new Mentor(
    "Anjana Thachil",
    "Chartered Accountant",
    "/images/mentors/3.png",
    "#B2DFDC"
  ),
  new Mentor(
    "Arif Omar",
    "Chartered Accountant",
    "/images/mentors/6.png",
    "#C0DFB2"
  ),
  new Mentor(
    "Praveena Muralee C",
    "Chartered Accountant",
    "/images/mentors/7.png",
    "#DFD2B2"
  ),
  new Mentor(
    "Vishnu Kadengal",
    "CA Finalist",
    "/images/mentors/5.png",
    "#B2DFDC"
  ),
  new Mentor(
    "Adhil M",
    "Certified Management Accountant",
    "/images/mentors/4.png",
    "#C0DFB2"
  ),
  new Mentor("Sajitha A S", "M. Com", "/images/mentors/8.png", "#DFD2B2"),
  new Mentor("Divya CV", "M. Com", "/images/mentors/9.png", "#B2DFDC"),
  new Mentor(
    "Geethu Christy",
    "MBA(Human Resource)",
    "/images/mentors/10.png",
    "#C0DFB2"
  ),
];
