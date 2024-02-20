import React, { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import styled, { withTheme } from 'styled-components'
import { Absolute } from '../Absolute/Absolute'
import { Animate, type MotionVariant } from '../Animate/Animate'
import { Flex } from '../Flex/Flex'
import { ThemeProvider } from '../ThemeProvider/ThemeProvider'
import { Toast, type ToastProps } from '../Toast/Toast'

/**
 * @public
 */
export type ToastOptions = ToastProps & {
  enterAnimation?: MotionVariant
  exitAnimation?: MotionVariant
  removed?: boolean
}

/**
 * @public
 */
export type ToastContextProps = {
  addToast: (options: ToastOptions) => void
  removeToast: (id: number) => void
}

const ClickthroughAbsolute = styled(Absolute)`
  pointer-events: none;
`

/* istanbul ignore next */
export const ToastContext = createContext<ToastContextProps>({ addToast: () => {}, removeToast: () => {} })

/**
 * @public
 */
export const useToast = () => {
  return useContext(ToastContext)
}

/**
 * @public
 */
export type ToastProviderProps = {
  children: React.ReactNode
  domRootId?: string
  enterAnimation?: MotionVariant
  exitAnimation?: MotionVariant
  lifespan?: number
  maxToasts?: number
  theme: unknown
  top?: number
  bottom?: number
}

let id = 0

function _ToastProvider({
  children,
  domRootId = 'root',
  enterAnimation = 'slideInLeft',
  exitAnimation = 'slideOutLeft',
  lifespan,
  maxToasts = 3,
  theme,
  bottom = 20,
  top,
}: ToastProviderProps) {
  const [toasts, setToasts] = useState<ToastOptions[]>([])

  const addToast = useCallback((options: ToastOptions) => {
    setToasts((prevToasts) => [...prevToasts, { ...options, id: id++ }])
  }, [])

  const removeToast = useCallback((id: number) => {
    setToasts((prevToasts) =>
      prevToasts.map((toast) => (toast.id === id ? { ...toast, removed: true } : toast))
    )
  }, [])

  useEffect(() => {
    toasts.forEach((toast) => {
      if (toast.removed) {
        setTimeout(() => {
          setToasts((prevToasts) => prevToasts.filter((t) => t.id !== toast.id))
        }, 200)
      }
    })
  }, [toasts, setToasts])

  const toastsToRender = toasts.slice(0, maxToasts)

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      {createPortal(
        <ThemeProvider theme={theme}>
          <ClickthroughAbsolute top={top ? top : undefined} bottom={top ? undefined : bottom} width='100%'>
            <Flex justifyContent='center' width='100%'>
              <Flex flexDirection='column-reverse' justifyContent='center' minWidth='300px'>
                {toastsToRender.map((toast) => {
                  const enterAnim = toast.enterAnimation || enterAnimation
                  const exitAnim = toast.exitAnimation || exitAnimation

                  return (
                    <Animate key={toast.id} variant={toast.removed ? exitAnim : enterAnim}>
                      <Toast lifespan={lifespan} onRemoveClick={removeToast} {...toast} mt={3} />
                    </Animate>
                  )
                })}
              </Flex>
            </Flex>
          </ClickthroughAbsolute>
        </ThemeProvider>,
        document.getElementById(domRootId)
      )}
    </ToastContext.Provider>
  )
}
/**
 * @public
 */
export const ToastProvider = withTheme(_ToastProvider)
