import { getMe } from '@/apis/auth.api'
import { queryOptions } from '@tanstack/react-query'

export const getMeQueryOptions = () => {
  return queryOptions({
    queryKey: ['me'],
    queryFn: getMe,
    staleTime: 60 * 60 * 1000 // 1 hour,
  })
}
