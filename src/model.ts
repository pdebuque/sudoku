export interface SquareInt {
  row: number;
  column: number;
  medSquare: number;
  notes: number[];
  value: number | null;
}

export interface MedSquareInt {
  number: number;
  squares: SquareInt[]
}

// extends Array<SquareInt>{}

export interface BoardInt extends Array<MedSquareInt>{}

export const blankGame:BoardInt = [
{
number: 1,
squares: [
    {
      row: 1,
      column: 1,
      medSquare: 1,
      notes: [],
      value: null
    },
    {
      row: 1,
      column: 2,
      medSquare: 1,
      notes: [],
      value: null
    },
    {
      row: 1,
      column: 3,
      medSquare: 1,
      notes: [],
      value: null
    },
    {
      row: 2,
      column: 1,
      medSquare: 1,
      notes: [],
      value: null
    },
    {
      row: 2,
      column: 2,
      medSquare: 1,
      notes: [],
      value: null
    },
    {
      row: 2,
      column: 3,
      medSquare: 1,
      notes: [],
      value: null
    },
    {
      row: 3,
      column: 1,
      medSquare: 1,
      notes: [],
      value: null
    },
    {
      row: 3,
      column: 2,
      medSquare: 1,
      notes: [],
      value: null
    },
    {
      row: 3,
      column: 3,
      medSquare: 1,
      notes: [],
      value: null
    },
  ]
},
{
  number: 2,
  squares: [
    {
      row: 1,
      column: 4,
      medSquare: 2,
      notes: [],
      value: null
    },
    {
      row: 1,
      column: 5,
      medSquare: 2,
      notes: [],
      value: null
    },
    {
      row: 1,
      column: 6,
      medSquare: 2,
      notes: [],
      value: null
    },
    {
      row: 2,
      column: 4,
      medSquare: 2,
      notes: [],
      value: null
    },
    {
      row: 2,
      column: 5,
      medSquare: 2,
      notes: [],
      value: null
    },
    {
      row: 2,
      column: 6,
      medSquare: 2,
      notes: [],
      value: null
    },
    {
      row: 3,
      column: 4,
      medSquare: 2,
      notes: [],
      value: null
    },
    {
      row: 3,
      column: 5,
      medSquare: 2,
      notes: [],
      value: null
    },
    {
      row: 3,
      column: 6,
      medSquare: 2,
      notes: [],
      value: null
    },
  ]
},
{
  number: 3,
  squares:[
    {
      row: 1,
      column: 7,
      medSquare: 3,
      notes: [],
      value: null
    },
    {
      row: 1,
      column: 8,
      medSquare: 3,
      notes: [],
      value: null
    },
    {
      row: 1,
      column: 9,
      medSquare: 3,
      notes: [],
      value: null
    },
    {
      row: 2,
      column: 7,
      medSquare: 3,
      notes: [],
      value: null
    },
    {
      row: 2,
      column: 8,
      medSquare: 3,
      notes: [],
      value: null
    },
    {
      row: 2,
      column: 9,
      medSquare: 3,
      notes: [],
      value: null
    },
    {
      row: 3,
      column: 7,
      medSquare: 3,
      notes: [],
      value: null
    },
    {
      row: 3,
      column: 8,
      medSquare: 3,
      notes: [],
      value: null
    },
    {
      row: 3,
      column: 9,
      medSquare: 3,
      notes: [],
      value: null
    },
  ]
},
{
  number: 4,
  squares: [
    {
      row: 4,
      column: 1,
      medSquare: 4,
      notes: [],
      value: null
    },
    {
      row: 4,
      column: 2,
      medSquare: 4,
      notes: [],
      value: null
    },
    {
      row: 4,
      column: 3,
      medSquare: 4,
      notes: [],
      value: null
    },
    {
      row: 5,
      column: 1,
      medSquare: 4,
      notes: [],
      value: null
    },
    {
      row: 5,
      column: 2,
      medSquare: 4,
      notes: [],
      value: null
    },
    {
      row: 5,
      column: 3,
      medSquare: 4,
      notes: [],
      value: null
    },
    {
      row: 6,
      column: 1,
      medSquare: 4,
      notes: [],
      value: null
    },
    {
      row: 6,
      column: 2,
      medSquare: 4,
      notes: [],
      value: null
    },
    {
      row: 6,
      column: 3,
      medSquare: 4,
      notes: [],
      value: null
    },
  ]
},
{
  number: 5,
  squares: [
    {
      row: 4,
      column: 4,
      medSquare: 5,
      notes: [],
      value: null
    },
    {
      row: 4,
      column: 5,
      medSquare: 5,
      notes: [],
      value: null
    },
    {
      row: 4,
      column: 6,
      medSquare: 5,
      notes: [],
      value: null
    },
    {
      row: 5,
      column: 4,
      medSquare: 5,
      notes: [],
      value: null
    },
    {
      row: 5,
      column: 5,
      medSquare: 5,
      notes: [],
      value: null
    },
    {
      row: 5,
      column: 6,
      medSquare: 5,
      notes: [],
      value: null
    },
    {
      row: 6,
      column: 4,
      medSquare: 5,
      notes: [],
      value: null
    },
    {
      row: 6,
      column: 5,
      medSquare: 5,
      notes: [],
      value: null
    },
    {
      row: 6,
      column: 6,
      medSquare: 5,
      notes: [],
      value: null
    },
  ]
},
{
  number: 6,
  squares: [
    {
      row: 4,
      column: 7,
      medSquare: 6,
      notes: [],
      value: null
    },
    {
      row: 4,
      column: 8,
      medSquare: 6,
      notes: [],
      value: null
    },
    {
      row: 4,
      column: 9,
      medSquare: 6,
      notes: [],
      value: null
    },
    {
      row: 5,
      column: 7,
      medSquare: 6,
      notes: [],
      value: null
    },
    {
      row: 5,
      column: 8,
      medSquare: 6,
      notes: [],
      value: null
    },
    {
      row: 5,
      column: 9,
      medSquare: 6,
      notes: [],
      value: null
    },
    {
      row: 6,
      column: 7,
      medSquare: 6,
      notes: [],
      value: null
    },
    {
      row: 6,
      column: 8,
      medSquare: 6,
      notes: [],
      value: null
    },
    {
      row: 6,
      column: 9,
      medSquare: 6,
      notes: [],
      value: null
    },
  ]
},
{
  number: 7,
  squares: [
    {
      row: 7,
      column: 1,
      medSquare: 7,
      notes: [],
      value: null
    },
    {
      row: 7,
      column: 2,
      medSquare: 7,
      notes: [],
      value: null
    },
    {
      row: 7,
      column: 3,
      medSquare: 7,
      notes: [],
      value: null
    },
    {
      row: 8,
      column: 1,
      medSquare: 7,
      notes: [],
      value: null
    },
    {
      row: 8,
      column: 2,
      medSquare: 7,
      notes: [],
      value: null
    },
    {
      row: 8,
      column: 3,
      medSquare: 7,
      notes: [],
      value: null
    },
    {
      row: 9,
      column: 1,
      medSquare: 7,
      notes: [],
      value: null
    },
    {
      row: 9,
      column: 2,
      medSquare: 7,
      notes: [],
      value: null
    },
    {
      row: 9,
      column: 3,
      medSquare: 7,
      notes: [],
      value: null
    },
  ]
},
{
  number: 8,
  squares: [
    {
      row: 7,
      column: 4,
      medSquare: 8,
      notes: [],
      value: null
    },
    {
      row: 7,
      column: 5,
      medSquare: 8,
      notes: [],
      value: null
    },
    {
      row: 7,
      column: 6,
      medSquare: 8,
      notes: [],
      value: null
    },
    {
      row: 8,
      column: 4,
      medSquare: 8,
      notes: [],
      value: null
    },
    {
      row: 8,
      column: 5,
      medSquare: 8,
      notes: [],
      value: null
    },
    {
      row: 8,
      column: 6,
      medSquare: 8,
      notes: [],
      value: null
    },
    {
      row: 9,
      column: 4,
      medSquare: 8,
      notes: [],
      value: null
    },
    {
      row: 9,
      column: 5,
      medSquare: 8,
      notes: [],
      value: null
    },
    {
      row: 9,
      column: 6,
      medSquare: 8,
      notes: [],
      value: null
    },
  ]
},
{
  number: 9,
  squares: [
    {
      row: 7,
      column: 7,
      medSquare: 9,
      notes: [],
      value: null
    },
    {
      row: 7,
      column: 8,
      medSquare: 9,
      notes: [],
      value: null
    },
    {
      row: 7,
      column: 9,
      medSquare: 9,
      notes: [],
      value: null
    },
    {
      row: 8,
      column: 7,
      medSquare: 9,
      notes: [],
      value: null
    },
    {
      row: 8,
      column: 8,
      medSquare: 9,
      notes: [],
      value: null
    },
    {
      row: 8,
      column: 9,
      medSquare: 9,
      notes: [],
      value: null
    },
    {
      row: 9,
      column: 7,
      medSquare: 9,
      notes: [],
      value: null
    },
    {
      row: 9,
      column: 8,
      medSquare: 9,
      notes: [],
      value: null
    },
    {
      row: 9,
      column: 9,
      medSquare: 9,
      notes: [],
      value: null
    },
  ]
},
]

// export interface MedSquare 