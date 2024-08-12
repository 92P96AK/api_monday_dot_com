import { GRAPHQL_QUERIES } from "@constants";
import { IQueryConstructorPayload } from "@interfaces";

export const GraphQlQueryConstructor = (
  data: IQueryConstructorPayload,
): string => {
  const { payload, queryType } = data;
  let rawQuery = GRAPHQL_QUERIES[queryType];
  if (!rawQuery) {
    throw new Error("Query Not Found");
  }
  for (const key in payload) {
    if (payload.hasOwnProperty(key)) {
      rawQuery = rawQuery.replace(`{{${key}}}`, payload[key] as any);
    }
  }
  return rawQuery;
};
