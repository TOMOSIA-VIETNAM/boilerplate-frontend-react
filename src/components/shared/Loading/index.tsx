import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'

const loadingVariants = cva('inline-flex items-center justify-center', {
  variants: {
    variant: {
      spinner: 'animate-spin',
      dots: 'space-x-1',
      pulse: 'animate-pulse',
      skeleton: 'animate-pulse bg-muted rounded',
      bar: 'w-full bg-muted rounded-full overflow-hidden',
      ring: 'animate-spin rounded-full border-2 border-muted border-t-primary'
    },
    size: {
      sm: 'size-4',
      default: 'size-6',
      lg: 'size-8',
      xl: 'size-12'
    }
  },
  defaultVariants: {
    variant: 'spinner',
    size: 'default'
  }
})

interface LoadingProps extends VariantProps<typeof loadingVariants> {
  className?: string
  text?: string
  fullScreen?: boolean
  overlay?: boolean
}

const Loading = React.forwardRef<HTMLDivElement, LoadingProps>(
  ({ className, variant = 'spinner', size = 'default', text, fullScreen = false, overlay = false, ...props }, ref) => {
    const renderLoadingContent = () => {
      switch (variant) {
        case 'spinner':
          return (
            <div
              className={cn('border-muted border-t-primary animate-spin rounded-full border-2', {
                'size-4': size === 'sm',
                'size-6': size === 'default',
                'size-8': size === 'lg',
                'size-12': size === 'xl'
              })}
            />
          )

        case 'dots':
          return (
            <div className="flex space-x-1">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className={cn('bg-primary animate-bounce rounded-full', {
                    'size-1': size === 'sm',
                    'size-1.5': size === 'default',
                    'size-2': size === 'lg',
                    'size-3': size === 'xl'
                  })}
                  style={{ animationDelay: `${i * 0.1}s` }}
                />
              ))}
            </div>
          )

        case 'pulse':
          return (
            <div
              className={cn('bg-primary animate-pulse rounded-full', {
                'size-4': size === 'sm',
                'size-6': size === 'default',
                'size-8': size === 'lg',
                'size-12': size === 'xl'
              })}
            />
          )

        case 'skeleton':
          return (
            <div
              className={cn('bg-muted animate-pulse rounded', {
                'size-4': size === 'sm',
                'size-6': size === 'default',
                'size-8': size === 'lg',
                'size-12': size === 'xl'
              })}
            />
          )

        case 'bar':
          return (
            <div className="bg-muted w-full overflow-hidden rounded-full">
              <div className="bg-primary h-full animate-pulse rounded-full" style={{ width: '60%' }} />
            </div>
          )

        case 'ring':
          return (
            <div
              className={cn('border-muted border-t-primary animate-spin rounded-full border-2', {
                'size-4': size === 'sm',
                'size-6': size === 'default',
                'size-8': size === 'lg',
                'size-12': size === 'xl'
              })}
            />
          )

        default:
          return null
      }
    }

    const content = (
      <div
        className={cn('flex h-screen w-screen flex-col items-center justify-center gap-2', className)}
        ref={ref}
        {...props}
      >
        {renderLoadingContent()}
        {text && <span className="text-muted-foreground animate-pulse text-sm">{text}</span>}
      </div>
    )

    if (fullScreen) {
      return (
        <div className="bg-background/80 fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
          {content}
        </div>
      )
    }

    if (overlay) {
      return (
        <div className="bg-background/80 absolute inset-0 z-10 flex items-center justify-center backdrop-blur-sm">
          {content}
        </div>
      )
    }

    return content
  }
)

Loading.displayName = 'Loading'

// Skeleton component for content loading
interface SkeletonProps {
  className?: string
  width?: string | number
  height?: string | number
  rounded?: boolean
}

const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, width, height, rounded = true, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('bg-muted animate-pulse', rounded && 'rounded', className)}
        style={{
          width: width,
          height: height
        }}
        {...props}
      />
    )
  }
)

Skeleton.displayName = 'Skeleton'

// Loading overlay component
interface LoadingOverlayProps {
  isLoading: boolean
  children: React.ReactNode
  text?: string
  variant?: VariantProps<typeof loadingVariants>['variant']
  size?: VariantProps<typeof loadingVariants>['size']
}

const LoadingOverlay = ({ isLoading, children, text, variant = 'spinner', size = 'default' }: LoadingOverlayProps) => {
  return (
    <div className="relative h-screen w-screen">
      {children}
      {isLoading && (
        <div className="bg-background/80 absolute inset-0 z-10 flex items-center justify-center backdrop-blur-sm">
          <Loading variant={variant} size={size} text={text} />
        </div>
      )}
    </div>
  )
}

export { Loading, LoadingOverlay, loadingVariants, Skeleton }
export type { LoadingOverlayProps, LoadingProps, SkeletonProps }
