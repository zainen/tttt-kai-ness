import { EmailParams } from "../types";

export const validateEmailParams = (params: EmailParams): Partial<(keyof Omit<EmailParams, 'phone'>)>[] => {
  const missingParams: Partial<(keyof Omit<EmailParams, 'phone'>)>[] = []
  for (const [key, val] of Object.entries(params)) {
    if (key !== 'phone' && val === '') {
      missingParams.push(key as Partial<(keyof Omit<EmailParams, 'phone'>)>)
    }
  }
  return missingParams
}