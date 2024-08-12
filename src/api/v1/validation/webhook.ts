import * as yup from "yup";

export const webHookBody = yup.object({
  body: yup.object({
    challenge: yup.string().optional(),
    event: yup
      .object()
      .shape({
        value: yup
          .object()
          .shape({
            value: yup.number().required(),
          })
          .required(),
        columnId: yup.string().required(),
        boardId: yup.number().required(),
        pulseId: yup.number().required(),
      })
      .optional()
      .default(undefined),
  }),
});
