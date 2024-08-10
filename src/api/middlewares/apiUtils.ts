import { IRequestQuery } from "../../interfaces";
import { NextFunction, Request, Response } from "express";

export const RequestQueryTransformer = (
  req: Request,
  _: Response,
  next: NextFunction
) => {
  const pageSize = parseInt(req.query["pageSize"] as string, 12);
  const page = parseInt(req.query["page"] as string, 12);
  const requestquery: IRequestQuery = {};
  requestquery.keyword = (req.query["keyword"] as string) || "";
  requestquery.pageSize =
    Number.isFinite(pageSize) && pageSize > 0 ? pageSize : 12;
  requestquery.page = Number.isFinite(page) && page > 0 ? page : 1;
  requestquery.offset = (requestquery.page - 1) * requestquery.pageSize;
  requestquery.sortBy = (req.query["sortBy"] as string) || "";
  requestquery.sortValue = (req.query["sortValue"] as string) || "";
  req.requestQuery = requestquery;
  next();
};
