import { Response } from "express";

interface IApiCommon {
  message?: string;
  status?: IStatus;
}
export interface IStatus {
  code: number;
  success: boolean;
}
export interface IApiSuccess<T> extends IApiCommon {
  data?: T;
}
export interface IApiFail extends IApiCommon {
  error: any;
}
export interface IResponse extends Response {
  apiSuccess: <T>(fn: IApiSuccess<T>) => void;
  apiFail: (fn: IApiFail) => void;
}
