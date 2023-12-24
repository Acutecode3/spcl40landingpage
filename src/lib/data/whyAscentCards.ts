class CardDetail {
  constructor(
    public title: string,
    public description: string,
    public image: string
  ) {
    this.title = title;
    this.description = description;
    this.image = image;
  }
}

export const whyAscentCards = [
  new CardDetail(
    "Practical Commerce Education",
    "Focuses on real-world skills in Accounting, Taxation, and Business.",
    "/icons/why/education.png"
  ),
  new CardDetail(
    "Ideal for Aspiring Professionals",
    "Suitable for commerce graduates and ACCA/CMA students.",
    "/icons/why/experience.png"
  ),
  new CardDetail(
    "Expert-Led Training Sessions",
    "Taught by working Chartered Accountants and CAPITAIRE's qualified professionals.",
    "/icons/why/professionals.png"
  ),
  new CardDetail(
    "Real Office Experience",
    " Opportunity to learn accounts and tax in a professional office environment.",
    "/icons/why/training.png"
  ),
];
