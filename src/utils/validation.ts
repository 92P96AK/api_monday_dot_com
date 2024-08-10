import { NextFunction, Request, Response } from "express";
import { VALIDATION_FAILED } from "../constants";
import { AnySchema } from "yup";

export const Validate =
  (schema: AnySchema) =>
  async (req: Request, _: Response, next: NextFunction) => {
    try {
      await schema.validate({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      return next();
    } catch (error: any) {
      return next({
        message: error.message || VALIDATION_FAILED,
        error,
      });
    }
  };
