import * as yup from 'yup'

export const webHookBody = yup.object({
   body: yup.object({
    challenge: yup.string().optional(),
    event: yup.object().optional(),
   }),
})
