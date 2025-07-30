import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate()

  const handleGoHome = () => {
    navigate('/')
  }

  const handleGoBack = () => {
    navigate(-1)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <Card className="w-full max-w-md text-center">
        <CardHeader className="space-y-4">
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-red-100">
            <svg
              className="h-12 w-12 text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          </div>
          <CardTitle className="text-3xl font-bold text-gray-900">404</CardTitle>
          <CardDescription className="text-lg text-gray-600">Oops! Page not found</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <p className="text-gray-500">The page you're looking for doesn't exist or has been moved.</p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button onClick={handleGoHome} className="flex-1">
              Go Home
            </Button>
            <Button onClick={handleGoBack} variant="outline" className="flex-1">
              Go Back
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default NotFound
