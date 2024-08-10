import { Request, Response, NextFunction } from "express";
import { FAILED, SUCCESS } from "../../constants";
import { IApiFail, IApiSuccess } from "../../interfaces";

export const ApiMethods = (
  _: Request,
  response: Response,
  next: NextFunction
) => {
  response.apiSuccess = ({
    message = SUCCESS,
    data,
    status = {
      code: 200,
      success: true,
    },
  }: IApiSuccess<any>) => {
    response.status(status.code).json({ message, status, data });
  };
  response.apiFail = ({
    message = FAILED,
    error = {},
    status = {
      code: 400,
      success: false,
    },
  }: IApiFail) => {
    response.status(status.code).json({
      message,
      error,
      status,
    });
  };
  next();
};
