export interface SquareInt {
  id: number;
  row: number;
  column: number;
  medSquare: number;
  notes: number[];
  value: number | string;
  static: boolean;
  correct: boolean;
  highlight: boolean;
  focus: boolean;
}

export type MedSquareInt = Array<SquareInt>

// extends Array<SquareInt>{}

export interface BoardInt {
  difficulty: string;
  board: Array<MedSquareInt>
}

export type Game = {
  difficulty: string;
  board: (number)[][];
}

// board is array of medSquare arrays

export const blankSquare: SquareInt = {
  id: 0,
  row: 0,
  column: 0,
  medSquare: 0,
  notes: [],
  value: 0,
  static: true,
  correct: true,
  highlight: false,
  focus: false,
}

export const blankGame: BoardInt = {
  difficulty: 'Easy',
  board: [
    [
      {
        id: 1,
        row: 1,
        column: 1,
        medSquare: 1,
        notes: [],
        value: 0,
        static: true,
        correct: true,

        highlight: false,
        focus: false,
      },
      {
        id: 2,
        row: 1,
        column: 2,
        medSquare: 1,
        notes: [],
        value: 0,
        static: true,
        correct: true,

        highlight: false,
        focus: false,
      },
      {
        id: 3,
        row: 1,
        column: 3,
        medSquare: 1,
        notes: [],
        value: 0,
        static: true,
        correct: true,

        highlight: false,
        focus: false,
      },
      {
        id: 4,
        row: 2,
        column: 1,
        medSquare: 1,
        notes: [],
        value: 0,
        static: true,
        correct: true,

        highlight: false,
        focus: false,
      },
      {
        id: 5,
        row: 2,
        column: 2,
        medSquare: 1,
        notes: [],
        value: 0,
        static: true,
        correct: true,

        highlight: false,
        focus: false,
      },
      {
        id: 6,
        row: 2,
        column: 3,
        medSquare: 1,
        notes: [],
        value: 0,
        static: true,
        correct: true,

        highlight: false,
        focus: false,
      },
      {
        id: 7,
        row: 3,
        column: 1,
        medSquare: 1,
        notes: [],
        value: 0,
        static: true,
        correct: true,

        highlight: false,
        focus: false,
      },
      {
        id: 8,
        row: 3,
        column: 2,
        medSquare: 1,
        notes: [],
        value: 0,
        static: true,
        correct: true,

        highlight: false,
        focus: false,
      },
      {
        id: 9,
        row: 3,
        column: 3,
        medSquare: 1,
        notes: [],
        value: 0,
        static: true,
        correct: true,

        highlight: false,
        focus: false,
      },
    ],
    [
      {
        id: 10,
        row: 1,
        column: 4,
        medSquare: 2,
        notes: [],
        value: 0,
        static: true,
        correct: true,

        highlight: false,
        focus: false,
      },
      {
        id: 11,
        row: 1,
        column: 5,
        medSquare: 2,
        notes: [],
        value: 0,
        static: true,
        correct: true,

        highlight: false,
        focus: false,
      },
      {
        id: 12,
        row: 1,
        column: 6,
        medSquare: 2,
        notes: [],
        value: 0,
        static: true,
        correct: true,

        highlight: false,
        focus: false,
      },
      {
        id: 13,
        row: 2,
        column: 4,
        medSquare: 2,
        notes: [],
        value: 0,
        static: true,
        correct: true,

        highlight: false,
        focus: false,
      },
      {
        id: 14,
        row: 2,
        column: 5,
        medSquare: 2,
        notes: [],
        value: 0,
        static: true,
        correct: true,

        highlight: false,
        focus: false,
      },
      {
        id: 15,
        row: 2,
        column: 6,
        medSquare: 2,
        notes: [],
        value: 0,
        static: true,
        correct: true,

        highlight: false,
        focus: false,
      },
      {
        id: 16,
        row: 3,
        column: 4,
        medSquare: 2,
        notes: [],
        value: 0,
        static: true,
        correct: true,

        highlight: false,
        focus: false,
      },
      {
        id: 17,
        row: 3,
        column: 5,
        medSquare: 2,
        notes: [],
        value: 0,
        static: true,
        correct: true,

        highlight: false,
        focus: false,
      },
      {
        id: 18,
        row: 3,
        column: 6,
        medSquare: 2,
        notes: [],
        value: 0,
        static: true,
        correct: true,

        highlight: false,
        focus: false,
      },
    ],
    [
      {
        id: 19,
        row: 1,
        column: 7,
        medSquare: 3,
        notes: [],
        value: 0,
        static: true,
        correct: true,

        highlight: false,
        focus: false,
      },
      {
        id: 20,
        row: 1,
        column: 8,
        medSquare: 3,
        notes: [],
        value: 0,
        static: true,
        correct: true,

        highlight: false,
        focus: false,
      },
      {
        id: 21,
        row: 1,
        column: 9,
        medSquare: 3,
        notes: [],
        value: 0,
        static: true,
        correct: true,

        highlight: false,
        focus: false,
      },
      {
        id: 22,
        row: 2,
        column: 7,
        medSquare: 3,
        notes: [],
        value: 0,
        static: true,
        correct: true,

        highlight: false,
        focus: false,
      },
      {
        id: 23,
        row: 2,
        column: 8,
        medSquare: 3,
        notes: [],
        value: 0,
        static: true,
        correct: true,

        highlight: false,
        focus: false,
      },
      {
        id: 24,
        row: 2,
        column: 9,
        medSquare: 3,
        notes: [],
        value: 0,
        static: true,
        correct: true,

        highlight: false,
        focus: false,
      },
      {
        id: 25,
        row: 3,
        column: 7,
        medSquare: 3,
        notes: [],
        value: 0,
        static: true,
        correct: true,

        highlight: false,
        focus: false,
      },
      {
        id: 26,
        row: 3,
        column: 8,
        medSquare: 3,
        notes: [],
        value: 0,
        static: true,
        correct: true,

        highlight: false,
        focus: false,
      },
      {
        id: 27,
        row: 3,
        column: 9,
        medSquare: 3,
        notes: [],
        value: 0,
        static: true,
        correct: true,

        highlight: false,
        focus: false,
      },
    ],
    [
      {
        id: 28,
        row: 4,
        column: 1,
        medSquare: 4,
        notes: [],
        value: 0,
        static: true,
        correct: true,

        highlight: false,
        focus: false,
      },
      {
        id: 29,
        row: 4,
        column: 2,
        medSquare: 4,
        notes: [],
        value: 0,
        static: true,
        correct: true,

        highlight: false,
        focus: false,
      },
      {
        id: 30,
        row: 4,
        column: 3,
        medSquare: 4,
        notes: [],
        value: 0,
        static: true,
        correct: true,

        highlight: false,
        focus: false,
      },
      {
        id: 31,
        row: 5,
        column: 1,
        medSquare: 4,
        notes: [],
        value: 0,
        static: true,
        correct: true,

        highlight: false,
        focus: false,
      },
      {
        id: 32,
        row: 5,
        column: 2,
        medSquare: 4,
        notes: [],
        value: 0,
        static: true,
        correct: true,

        highlight: false,
        focus: false,
      },
      {
        id: 33,
        row: 5,
        column: 3,
        medSquare: 4,
        notes: [],
        value: 0,
        static: true,
        correct: true,

        highlight: false,
        focus: false,
      },
      {
        id: 34,
        row: 6,
        column: 1,
        medSquare: 4,
        notes: [],
        value: 0,
        static: true,
        correct: true,

        highlight: false,
        focus: false,
      },
      {
        id: 35,
        row: 6,
        column: 2,
        medSquare: 4,
        notes: [],
        value: 0,
        static: true,
        correct: true,

        highlight: false,
        focus: false,
      },
      {
        id: 36,
        row: 6,
        column: 3,
        medSquare: 4,
        notes: [],
        value: 0,
        static: true,
        correct: true,

        highlight: false,
        focus: false,
      },
    ],
    [
      {
        id: 37,
        row: 4,
        column: 4,
        medSquare: 5,
        notes: [],
        value: 0,
        static: true,
        correct: true,

        highlight: false,
        focus: false,
      },
      {
        id: 38,
        row: 4,
        column: 5,
        medSquare: 5,
        notes: [],
        value: 0,
        static: true,
        correct: true,

        highlight: false,
        focus: false,
      },
      {
        id: 39,
        row: 4,
        column: 6,
        medSquare: 5,
        notes: [],
        value: 0,
        static: true,
        correct: true,

        highlight: false,
        focus: false,
      },
      {
        id: 40,
        row: 5,
        column: 4,
        medSquare: 5,
        notes: [],
        value: 0,
        static: true,
        correct: true,

        highlight: false,
        focus: false,
      },
      {
        id: 41,
        row: 5,
        column: 5,
        medSquare: 5,
        notes: [],
        value: 0,
        static: true,
        correct: true,

        highlight: false,
        focus: false,
      },
      {
        id: 42,
        row: 5,
        column: 6,
        medSquare: 5,
        notes: [],
        value: 0,
        static: true,
        correct: true,

        highlight: false,
        focus: false,
      },
      {
        id: 43,
        row: 6,
        column: 4,
        medSquare: 5,
        notes: [],
        value: 0,
        static: true,
        correct: true,

        highlight: false,
        focus: false,
      },
      {
        id: 44,
        row: 6,
        column: 5,
        medSquare: 5,
        notes: [],
        value: 0,
        static: true,
        correct: true,

        highlight: false,
        focus: false,
      },
      {
        id: 45,
        row: 6,
        column: 6,
        medSquare: 5,
        notes: [],
        value: 0,
        static: true,
        correct: true,

        highlight: false,
        focus: false,
      },
    ],
    [
      {
        id: 46,
        row: 4,
        column: 7,
        medSquare: 6,
        notes: [],
        value: 0,
        static: true,
        correct: true,

        highlight: false,
        focus: false,
      },
      {
        id: 47,
        row: 4,
        column: 8,
        medSquare: 6,
        notes: [],
        value: 0,
        static: true,
        correct: true,

        highlight: false,
        focus: false,
      },
      {
        id: 48,
        row: 4,
        column: 9,
        medSquare: 6,
        notes: [],
        value: 0,
        static: true,
        correct: true,

        highlight: false,
        focus: false,
      },
      {
        id: 49,
        row: 5,
        column: 7,
        medSquare: 6,
        notes: [],
        value: 0,
        static: true,
        correct: true,

        highlight: false,
        focus: false,
      },
      {
        id: 50,
        row: 5,
        column: 8,
        medSquare: 6,
        notes: [],
        value: 0,
        static: true,
        correct: true,

        highlight: false,
        focus: false,
      },
      {
        id: 51,
        row: 5,
        column: 9,
        medSquare: 6,
        notes: [],
        value: 0,
        static: true,
        correct: true,

        highlight: false,
        focus: false,
      },
      {
        id: 52,
        row: 6,
        column: 7,
        medSquare: 6,
        notes: [],
        value: 0,
        static: true,
        correct: true,

        highlight: false,
        focus: false,
      },
      {
        id: 53,
        row: 6,
        column: 8,
        medSquare: 6,
        notes: [],
        value: 0,
        static: true,
        correct: true,

        highlight: false,
        focus: false,
      },
      {
        id: 54,
        row: 6,
        column: 9,
        medSquare: 6,
        notes: [],
        value: 0,
        static: true,
        correct: true,

        highlight: false,
        focus: false,
      },
    ],
    [
      {
        id: 55,
        row: 7,
        column: 1,
        medSquare: 7,
        notes: [],
        value: 0,
        static: true,
        correct: true,

        highlight: false,
        focus: false,
      },
      {
        id: 56,
        row: 7,
        column: 2,
        medSquare: 7,
        notes: [],
        value: 0,
        static: true,
        correct: true,

        highlight: false,
        focus: false,
      },
      {
        id: 57,
        row: 7,
        column: 3,
        medSquare: 7,
        notes: [],
        value: 0,
        static: true,
        correct: true,

        highlight: false,
        focus: false,
      },
      {
        id: 58,
        row: 8,
        column: 1,
        medSquare: 7,
        notes: [],
        value: 0,
        static: true,
        correct: true,

        highlight: false,
        focus: false,
      },
      {
        id: 59,
        row: 8,
        column: 2,
        medSquare: 7,
        notes: [],
        value: 0,
        static: true,
        correct: true,

        highlight: false,
        focus: false,
      },
      {
        id: 60,
        row: 8,
        column: 3,
        medSquare: 7,
        notes: [],
        value: 0,
        static: true,
        correct: true,

        highlight: false,
        focus: false,
      },
      {
        id: 61,
        row: 9,
        column: 1,
        medSquare: 7,
        notes: [],
        value: 0,
        static: true,
        correct: true,

        highlight: false,
        focus: false,
      },
      {
        id: 62,
        row: 9,
        column: 2,
        medSquare: 7,
        notes: [],
        value: 0,
        static: true,
        correct: true,

        highlight: false,
        focus: false,
      },
      {
        id: 63,
        row: 9,
        column: 3,
        medSquare: 7,
        notes: [],
        value: 0,
        static: true,
        correct: true,

        highlight: false,
        focus: false,
      },
    ],
    [
      {
        id: 64,
        row: 7,
        column: 4,
        medSquare: 8,
        notes: [],
        value: 0,
        static: true,
        correct: true,

        highlight: false,
        focus: false,
      },
      {
        id: 65,
        row: 7,
        column: 5,
        medSquare: 8,
        notes: [],
        value: 0,
        static: true,
        correct: true,

        highlight: false,
        focus: false,
      },
      {
        id: 66,
        row: 7,
        column: 6,
        medSquare: 8,
        notes: [],
        value: 0,
        static: true,
        correct: true,

        highlight: false,
        focus: false,
      },
      {
        id: 67,
        row: 8,
        column: 4,
        medSquare: 8,
        notes: [],
        value: 0,
        static: true,
        correct: true,

        highlight: false,
        focus: false,
      },
      {
        id: 68,
        row: 8,
        column: 5,
        medSquare: 8,
        notes: [],
        value: 0,
        static: true,
        correct: true,

        highlight: false,
        focus: false,
      },
      {
        id: 69,
        row: 8,
        column: 6,
        medSquare: 8,
        notes: [],
        value: 0,
        static: true,
        correct: true,

        highlight: false,
        focus: false,
      },
      {
        id: 70,
        row: 9,
        column: 4,
        medSquare: 8,
        notes: [],
        value: 0,
        static: true,
        correct: true,

        highlight: false,
        focus: false,
      },
      {
        id: 71,
        row: 9,
        column: 5,
        medSquare: 8,
        notes: [],
        value: 0,
        correct: true,
        static: true,

        highlight: false,
        focus: false,
      },
      {
        id: 72,
        row: 9,
        column: 6,
        medSquare: 8,
        notes: [],
        value: 0,
        static: true,
        correct: true,

        highlight: false,
        focus: false,
      },
    ],
    [
      {
        id: 73,
        row: 7,
        column: 7,
        medSquare: 9,
        notes: [],
        value: 0,
        static: true,
        correct: true,

        highlight: false,
        focus: false,
      },
      {
        id: 74,
        row: 7,
        column: 8,
        medSquare: 9,
        notes: [],
        value: 0,
        static: true,
        correct: true,

        highlight: false,
        focus: false,
      },
      {
        id: 75,
        row: 7,
        column: 9,
        medSquare: 9,
        notes: [],
        value: 0,
        correct: true,
        static: true,

        highlight: false,
        focus: false,
      },
      {
        id: 76,
        row: 8,
        column: 7,
        medSquare: 9,
        notes: [],
        value: 0,
        static: true,
        correct: true,

        highlight: false,
        focus: false,
      },
      {
        id: 77,
        row: 8,
        column: 8,
        medSquare: 9,
        notes: [],
        value: 0,
        static: true,
        correct: true,

        highlight: false,
        focus: false,
      },
      {
        id: 78,
        row: 8,
        column: 9,
        medSquare: 9,
        notes: [],
        value: 0,
        static: true,
        correct: true,

        highlight: false,
        focus: false,
      },
      {
        id: 79,
        row: 9,
        column: 7,
        medSquare: 9,
        notes: [],
        value: 0,
        static: true,
        correct: true,

        highlight: false,
        focus: false,
      },
      {
        id: 80,
        row: 9,
        column: 8,
        medSquare: 9,
        notes: [],
        value: 0,
        static: true,
        correct: true,

        highlight: false,
        focus: false,
      },
      {
        id: 81,
        row: 9,
        column: 9,
        medSquare: 9,
        notes: [],
        value: 0,
        static: true,
        correct: true,

        highlight: false,
        focus: false,
      },
    ]
  ]
}

// export interface MedSquare 

/* 
[
    [
        {
            "id": 1,
            "row": 1,
            "column": 1,
            "medSquare": 1,
            "notes": [],
            "value": 3,
            "static": false,
            "correct": true
        },
        {
            "id": 2,
            "row": 1,
            "column": 2,
            "medSquare": 1,
            "notes": [],
            "value": 2,
            "static": false,
            "correct": true
        },
        {
            "id": 3,
            "row": 1,
            "column": 3,
            "medSquare": 1,
            "notes": [],
            "value": 5,
            "static": false,
            "correct": true
        },
        {
            "id": 4,
            "row": 2,
            "column": 1,
            "medSquare": 1,
            "notes": [],
            "value": 4,
            "static": true,
            "correct": true
        },
        {
            "id": 5,
            "row": 2,
            "column": 2,
            "medSquare": 1,
            "notes": [],
            "value": 1,
            "static": false,
            "correct": true
        },
        {
            "id": 6,
            "row": 2,
            "column": 3,
            "medSquare": 1,
            "notes": [],
            "value": 6,
            "static": false,
            "correct": true
        },
        {
            "id": 7,
            "row": 3,
            "column": 1,
            "medSquare": 1,
            "notes": [],
            "value": 9,
            "static": true,
            "correct": true
        },
        {
            "id": 8,
            "row": 3,
            "column": 2,
            "medSquare": 1,
            "notes": [],
            "value": 8,
            "static": false,
            "correct": true
        },
        {
            "id": 9,
            "row": 3,
            "column": 3,
            "medSquare": 1,
            "notes": [],
            "value": 7,
            "static": false,
            "correct": true
        }
    ],
    [
        {
            "id": 10,
            "row": 1,
            "column": 4,
            "medSquare": 2,
            "notes": [],
            "value": 9,
            "static": false,
            "correct": true
        },
        {
            "id": 11,
            "row": 1,
            "column": 5,
            "medSquare": 2,
            "notes": [],
            "value": 7,
            "static": true,
            "correct": true
        },
        {
            "id": 12,
            "row": 1,
            "column": 6,
            "medSquare": 2,
            "notes": [],
            "value": 8,
            "static": false,
            "correct": true
        },
        {
            "id": 13,
            "row": 2,
            "column": 4,
            "medSquare": 2,
            "notes": [],
            "value": 3,
            "static": true,
            "correct": true
        },
        {
            "id": 14,
            "row": 2,
            "column": 5,
            "medSquare": 2,
            "notes": [],
            "value": 2,
            "static": true,
            "correct": true
        },
        {
            "id": 15,
            "row": 2,
            "column": 6,
            "medSquare": 2,
            "notes": [],
            "value": 5,
            "static": true,
            "correct": true
        },
        {
            "id": 16,
            "row": 3,
            "column": 4,
            "medSquare": 2,
            "notes": [],
            "value": 1,
            "static": false,
            "correct": true
        },
        {
            "id": 17,
            "row": 3,
            "column": 5,
            "medSquare": 2,
            "notes": [],
            "value": 4,
            "static": true,
            "correct": true
        },
        {
            "id": 18,
            "row": 3,
            "column": 6,
            "medSquare": 2,
            "notes": [],
            "value": 6,
            "static": false,
            "correct": true
        }
    ],
    [
        {
            "id": 19,
            "row": 1,
            "column": 7,
            "medSquare": 3,
            "notes": [],
            "value": 6,
            "static": false,
            "correct": true
        },
        {
            "id": 20,
            "row": 1,
            "column": 8,
            "medSquare": 3,
            "notes": [],
            "value": 4,
            "static": true,
            "correct": true
        },
        {
            "id": 21,
            "row": 1,
            "column": 9,
            "medSquare": 3,
            "notes": [],
            "value": 1,
            "static": false,
            "correct": true
        },
        {
            "id": 22,
            "row": 2,
            "column": 7,
            "medSquare": 3,
            "notes": [],
            "value": 7,
            "static": true,
            "correct": true
        },
        {
            "id": 23,
            "row": 2,
            "column": 8,
            "medSquare": 3,
            "notes": [],
            "value": 8,
            "static": false,
            "correct": true
        },
        {
            "id": 24,
            "row": 2,
            "column": 9,
            "medSquare": 3,
            "notes": [],
            "value": 9,
            "static": false,
            "correct": true
        },
        {
            "id": 25,
            "row": 3,
            "column": 7,
            "medSquare": 3,
            "notes": [],
            "value": 3,
            "static": true,
            "correct": true
        },
        {
            "id": 26,
            "row": 3,
            "column": 8,
            "medSquare": 3,
            "notes": [],
            "value": 5,
            "static": false,
            "correct": true
        },
        {
            "id": 27,
            "row": 3,
            "column": 9,
            "medSquare": 3,
            "notes": [],
            "value": 2,
            "static": true,
            "correct": true
        }
    ],
    [
        {
            "id": 28,
            "row": 4,
            "column": 1,
            "medSquare": 4,
            "notes": [],
            "value": 2,
            "static": false,
            "correct": true
        },
        {
            "id": 29,
            "row": 4,
            "column": 2,
            "medSquare": 4,
            "notes": [],
            "value": 3,
            "static": false,
            "correct": true
        },
        {
            "id": 30,
            "row": 4,
            "column": 3,
            "medSquare": 4,
            "notes": [],
            "value": 1,
            "static": true,
            "correct": true
        },
        {
            "id": 31,
            "row": 5,
            "column": 1,
            "medSquare": 4,
            "notes": [],
            "value": 6,
            "static": true,
            "correct": true
        },
        {
            "id": 32,
            "row": 5,
            "column": 2,
            "medSquare": 4,
            "notes": [],
            "value": 5,
            "static": false,
            "correct": true
        },
        {
            "id": 33,
            "row": 5,
            "column": 3,
            "medSquare": 4,
            "notes": [],
            "value": 8,
            "static": true,
            "correct": true
        },
        {
            "id": 34,
            "row": 6,
            "column": 1,
            "medSquare": 4,
            "notes": [],
            "value": 7,
            "static": false,
            "correct": true
        },
        {
            "id": 35,
            "row": 6,
            "column": 2,
            "medSquare": 4,
            "notes": [],
            "value": 9,
            "static": true,
            "correct": true
        },
        {
            "id": 36,
            "row": 6,
            "column": 3,
            "medSquare": 4,
            "notes": [],
            "value": 4,
            "static": false,
            "correct": true
        }
    ],
    [
        {
            "id": 37,
            "row": 4,
            "column": 4,
            "medSquare": 5,
            "notes": [],
            "value": 6,
            "correct": true,
            "static": true
        },
        {
            "id": 38,
            "row": 4,
            "column": 5,
            "medSquare": 5,
            "notes": [],
            "value": 8,
            "static": false,
            "correct": true
        },
        {
            "id": 39,
            "row": 4,
            "column": 6,
            "medSquare": 5,
            "notes": [],
            "value": 4,
            "static": false,
            "correct": true
        },
        {
            "id": 40,
            "row": 5,
            "column": 4,
            "medSquare": 5,
            "notes": [],
            "value": 7,
            "static": true,
            "correct": true
        },
        {
            "id": 41,
            "row": 5,
            "column": 5,
            "medSquare": 5,
            "notes": [],
            "value": 1,
            "static": false,
            "correct": true
        },
        {
            "id": 42,
            "row": 5,
            "column": 6,
            "medSquare": 5,
            "notes": [],
            "value": 9,
            "static": true,
            "correct": true
        },
        {
            "id": 43,
            "row": 6,
            "column": 4,
            "medSquare": 5,
            "notes": [],
            "value": 2,
            "correct": true,
            "static": false
        },
        {
            "id": 44,
            "row": 6,
            "column": 5,
            "medSquare": 5,
            "notes": [],
            "value": 5,
            "static": false,
            "correct": true
        },
        {
            "id": 45,
            "row": 6,
            "column": 6,
            "medSquare": 5,
            "notes": [],
            "value": 3,
            "static": false,
            "correct": true
        }
    ],
    [
        {
            "id": 46,
            "row": 4,
            "column": 7,
            "medSquare": 6,
            "notes": [],
            "value": 5,
            "static": true,
            "correct": true
        },
        {
            "id": 47,
            "row": 4,
            "column": 8,
            "medSquare": 6,
            "notes": [],
            "value": 9,
            "static": false,
            "correct": true
        },
        {
            "id": 48,
            "row": 4,
            "column": 9,
            "medSquare": 6,
            "notes": [],
            "value": 7,
            "static": false,
            "correct": true
        },
        {
            "id": 49,
            "row": 5,
            "column": 7,
            "medSquare": 6,
            "notes": [],
            "value": 4,
            "static": false,
            "correct": true
        },
        {
            "id": 50,
            "row": 5,
            "column": 8,
            "medSquare": 6,
            "notes": [],
            "value": 2,
            "static": false,
            "correct": true
        },
        {
            "id": 51,
            "row": 5,
            "column": 9,
            "medSquare": 6,
            "notes": [],
            "value": 3,
            "static": false,
            "correct": true
        },
        {
            "id": 52,
            "row": 6,
            "column": 7,
            "medSquare": 6,
            "notes": [],
            "value": 8,
            "static": true,
            "correct": true
        },
        {
            "id": 53,
            "row": 6,
            "column": 8,
            "medSquare": 6,
            "notes": [],
            "value": 1,
            "static": false,
            "correct": true
        },
        {
            "id": 54,
            "row": 6,
            "column": 9,
            "medSquare": 6,
            "notes": [],
            "value": 6,
            "static": false,
            "correct": true
        }
    ],
    [
        {
            "id": 55,
            "row": 7,
            "column": 1,
            "medSquare": 7,
            "notes": [],
            "value": 5,
            "static": false,
            "correct": true
        },
        {
            "id": 56,
            "row": 7,
            "column": 2,
            "medSquare": 7,
            "notes": [],
            "value": 7,
            "static": true,
            "correct": true
        },
        {
            "id": 57,
            "row": 7,
            "column": 3,
            "medSquare": 7,
            "notes": [],
            "value": 9,
            "static": true,
            "correct": true
        },
        {
            "id": 58,
            "row": 8,
            "column": 1,
            "medSquare": 7,
            "notes": [],
            "value": 1,
            "static": true,
            "correct": true
        },
        {
            "id": 59,
            "row": 8,
            "column": 2,
            "medSquare": 7,
            "notes": [],
            "value": 4,
            "static": false,
            "correct": true
        },
        {
            "id": 60,
            "row": 8,
            "column": 3,
            "medSquare": 7,
            "notes": [],
            "value": 2,
            "static": false,
            "correct": true
        },
        {
            "id": 61,
            "row": 9,
            "column": 1,
            "medSquare": 7,
            "notes": [],
            "value": 8,
            "static": false,
            "correct": true
        },
        {
            "id": 62,
            "row": 9,
            "column": 2,
            "medSquare": 7,
            "notes": [],
            "value": 6,
            "static": true,
            "correct": true
        },
        {
            "id": 63,
            "row": 9,
            "column": 3,
            "medSquare": 7,
            "notes": [],
            "value": 3,
            "static": false,
            "correct": true
        }
    ],
    [
        {
            "id": 64,
            "row": 7,
            "column": 4,
            "medSquare": 8,
            "notes": [],
            "value": 4,
            "static": true,
            "correct": true
        },
        {
            "id": 65,
            "row": 7,
            "column": 5,
            "medSquare": 8,
            "notes": [],
            "value": 3,
            "static": false,
            "correct": true
        },
        {
            "id": 66,
            "row": 7,
            "column": 6,
            "medSquare": 8,
            "notes": [],
            "value": 1,
            "static": true,
            "correct": true
        },
        {
            "id": 67,
            "row": 8,
            "column": 4,
            "medSquare": 8,
            "notes": [],
            "value": 8,
            "static": true,
            "correct": true
        },
        {
            "id": 68,
            "row": 8,
            "column": 5,
            "medSquare": 8,
            "notes": [],
            "value": 6,
            "static": true,
            "correct": true
        },
        {
            "id": 69,
            "row": 8,
            "column": 6,
            "medSquare": 8,
            "notes": [],
            "value": 7,
            "correct": true,
            "static": true
        },
        {
            "id": 70,
            "row": 9,
            "column": 4,
            "medSquare": 8,
            "notes": [],
            "value": 5,
            "correct": true,
            "static": false
        },
        {
            "id": 71,
            "row": 9,
            "column": 5,
            "medSquare": 8,
            "notes": [],
            "correct": true,
            "value": 9,
            "static": false
        },
        {
            "id": 72,
            "row": 9,
            "column": 6,
            "medSquare": 8,
            "notes": [],
            "value": 2,
            "correct": true,
            "static": false
        }
    ],
    [
        {
            "id": 73,
            "row": 7,
            "column": 7,
            "medSquare": 9,
            "notes": [],
            "correct": true,
            "value": 2,
            "static": true
        },
        {
            "id": 74,
            "row": 7,
            "column": 8,
            "medSquare": 9,
            "notes": [],
            "correct": true,
            "value": 6,
            "static": false
        },
        {
            "id": 75,
            "row": 7,
            "column": 9,
            "medSquare": 9,
            "correct": true,
            "notes": [],
            "value": 8,
            "static": false
        },
        {
            "id": 76,
            "row": 8,
            "column": 7,
            "medSquare": 9,
            "notes": [],
            "correct": true,
            "value": 9,
            "static": true
        },
        {
            "id": 77,
            "row": 8,
            "column": 8,
            "correct": true,
            "medSquare": 9,
            "notes": [],
            "value": 3,
            "static": false
        },
        {
            "id": 78,
            "row": 8,
            "column": 9,
            "medSquare": 9,
            "notes": [],
            "value": 5,
            "correct": true,
            "static": false
        },
        {
            "id": 79,
            "row": 9,
            "column": 7,
            "medSquare": 9,
            "notes": [],
            "value": 1,
            "correct": true,
            "static": false
        },
        {
            "id": 80,
            "row": 9,
            "correct": true,
            "column": 8,
            "medSquare": 9,
            "notes": [],
            "value": 7,
            "static": true
        },
        {
            "id": 81,
            "row": 9,
            "column": 9,
            "medSquare": 9,
            "notes": [],
            "value": 4,
            "correct": true,
            "static": false
        }
    ]
]
*/