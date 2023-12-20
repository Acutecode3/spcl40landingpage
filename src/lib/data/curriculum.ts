class Acc {
  heading: string;
  topics: string[];
  constructor(heading: string, topics: string[]) {
    this.heading = heading;
    this.topics = topics;
  }
}

type TableList = {
  term: number;
  tables: Acc[];
};

export const CurriculumDetails: TableList[] = [
  {
    term: 1,
    tables: [
      new Acc("Introduction to Accounting", [
        "Accounting",
        "Economics",
        "Finance",
        "Marketing",
      ]),
      new Acc("Introduction to Accounting", [
        "Accounting",
        "Economics",
        "Finance",
        "Marketing",
      ]),
      new Acc("Introduction to Accounting", [
        "Accounting",
        "Economics",
        "Finance",
        "Marketing",
      ]),
      new Acc("Introduction to Accounting", [
        "Accounting",
        "Economics",
        "Finance",
        "Marketing",
      ]),
      new Acc("Introduction to Accounting", [
        "Accounting",
        "Economics",
        "Finance",
        "Marketing",
      ]),
    ],
  },
];
