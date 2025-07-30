import { login } from '@/apis/auth.api'
import { Input } from '@/components/shared'
import { setAccessTokenToLocalStorage } from '@/utils/localStorage'
import { TAuthSchema, authSchema } from '@/utils/rules'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const { t } = useTranslation()
  const queryClient = useQueryClient()
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm<TAuthSchema>({
    resolver: yupResolver(authSchema),
    defaultValues: {
      username: 'emilys',
      password: 'emilyspass'
    }
  })

  const loginMutation = useMutation({
    mutationFn: (body: TAuthSchema) => login(body)
  })

  const onSubmit = handleSubmit((data) => {
    loginMutation.mutate(data, {
      onSuccess: (response) => {
        response.data.accessToken && setAccessTokenToLocalStorage(response.data.accessToken)
        queryClient.invalidateQueries({ queryKey: ['me'] })
        navigate('/')
      },
      onError: (error) => {
        const errorMessage = (error as AxiosError).message
        setError('password', {
          message: errorMessage,
          type: 'server'
        })
      }
    })
  })

  return (
    <div className="flex flex-col items-center justify-center pt-14">
      <div className="w-[428px]">
        <div className="mb-10">
          <div className="mb-6 text-center text-4xl">{t('login')}</div>
          <div className="px-4 text-justify text-lg">
            {`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s`}
          </div>
        </div>
        <form className="rounded-md p-10 shadow" onSubmit={onSubmit} noValidate>
          <Input
            type="text"
            name="username"
            register={register}
            className="mb-1"
            errorMessage={errors.username?.message}
            placeholder={t('username')}
          />
          <Input
            type="password"
            name="password"
            register={register}
            className="mb-1"
            errorMessage={errors.password?.message}
            placeholder={t('password')}
          />
          <div>
            <button className="bg-primary w-full rounded-sm px-2 py-3 text-center text-white">{t('login')}</button>
          </div>
        </form>
      </div>
    </div>
  )
}
