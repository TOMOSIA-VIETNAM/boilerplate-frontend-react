import { t } from 'i18next'
import * as yup from 'yup'

export const authSchema = yup.object({
  username: yup.string().required(t('username_required')),
  password: yup
    .string()
    .required(t('password_required'))
    .min(6, t('password_min_length'))
    .max(160, t('password_max_length'))
})

export type TAuthSchema = yup.InferType<typeof authSchema>
