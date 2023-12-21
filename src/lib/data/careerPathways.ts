class CardDetail {
  constructor(
    public number: string,
    public title: string,
    public description: string
  ) {
    this.number = number;
    this.title = title;
    this.description = description;
  }
}
export const careerPathwaysData = [
  new CardDetail(
    "01",
    "Higher Studies",
    "For those who get inspired to learn more and invest their time now for greater returns and growth in the future."
  ),
  new CardDetail(
    "02",
    "Internship",
    "For those who wish to add more experience to what they have already gained here and build a career on that foundation."
  ),
  new CardDetail(
    "03",
    "Immediate Placement",
    "For graduates eager for immediate career entry, this path utilizes Special 40 Ascent's training for swift employment."
  ),
];
