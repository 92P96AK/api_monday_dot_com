import { GRAPHQL_QUERIES } from "@constants";

export interface IQueryConstructorPayload {
  queryType: keyof typeof GRAPHQL_QUERIES;
  payload: {
    ITEM_ID?: number;
    BOARD_ID?: number;
    COL_ID?: string;
    COL_VALUE?: number;
    [key: string]: string | number | undefined; // Index signature
  };
}
