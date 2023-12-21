class Process {
  number: number;
  name: string;
  description: string;
  constructor(number: number, name: string, description: string) {
    this.number = number;
    this.name = name;
    this.description = description;
  }
}

export const applicationProcess: Process[] = [
  new Process(
    1,
    "Application",
    "Enter the required information and submit the online application."
  ),
  new Process(
    2,
    "Briefing",
    "Get briefed by the course counsellor, after which you will be directed to a screening round."
  ),
  new Process(
    3,
    "Screening",
    "Attend the screening round, which involves a technical test paper that assesses your basic subject knowledge."
  ),
  new Process(
    4,
    "Acceptance",
    "Achieve success in all test segments to gain entry into the program, where enrollment confirmed after the admission fee is paid."
  ),
];
