export type TErrorResponseApi<Data> = {
  message: string
  data?: Data
}

export type TSuccessResponseApi<Data> = {
  message: string
  data: Data
}
