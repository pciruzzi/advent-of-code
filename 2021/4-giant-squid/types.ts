export type BingoNumber = number;

type BoardPosition = {
  number: number;
  found: boolean;
};
export type Board = BoardPosition[][];
