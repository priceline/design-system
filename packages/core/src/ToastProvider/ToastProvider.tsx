import React, { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { Absolute } from '../Absolute'
import { Flex } from '../Flex'
import { Toast, IToastProps } from '../Toast'
import { ThemeProvider } from '../ThemeProvider'
import { Box } from '../Box'

interface IToastOptions extends IToastProps {
  removed?: boolean
}

interface IToastContextProps {
  addToast: (options: IToastOptions) => void
  removeToast: (id: number) => void
}

/* istanbul ignore next */
export const ToastContext = createContext<IToastContextProps>({ addToast: () => {}, removeToast: () => {} })

export const useToast = () => {
  return useContext(ToastContext)
}

interface IToastProvider {
  children: React.ReactNode
  domRootId?: string
  lifespan?: number
  maxToasts?: number
}

let id = 0

function ToastProvider({ children, domRootId = 'root', lifespan, maxToasts = 3 }: IToastProvider) {
  const [toasts, setToasts] = useState<IToastOptions[]>([])

  const addToast = useCallback((options: IToastOptions) => {
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
        <ThemeProvider>
          <Absolute bottom={20} width='100%'>
            <Flex justifyContent='center' width='100%'>
              <Flex flexDirection='column-reverse' justifyContent='center' minWidth='300px'>
                {toastsToRender.map((toast, idx) => {
                  return (
                    <Box key={idx} mt={3}>
                      <Toast lifespan={lifespan} onRemoveClick={removeToast} {...toast} />
                    </Box>
                  )
                })}
              </Flex>
            </Flex>
          </Absolute>
        </ThemeProvider>,
        document.getElementById(domRootId)
      )}
    </ToastContext.Provider>
  )
}

export default ToastProvider
