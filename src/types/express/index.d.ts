import {
    IRequestQuery,
    IApiSuccess,
    IApiFail,
    IStatus,
  } from "../../interfaces";
  
  declare global {
    namespace Express {
      interface Request {
        requestQuery: IRequestQuery;
      }
      interface Response {
        apiSuccess: (params: IApiSuccess) => void;
        apiFail: (params: IApiFail) => void;
      }
    }
  }
  