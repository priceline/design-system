import React, { createContext, useCallback, useContext, useState } from 'react'
import { createPortal } from 'react-dom'
import { Absolute } from '../Absolute'
import { Flex } from '../Flex'
import { Toast } from '../Toast'
import { ThemeProvider } from '../ThemeProvider'

type ToastVariant = 'error' | 'information' | 'success'

interface IToastContextProps {
  addToast: (text: string, variant: ToastVariant) => void
  removeToast: (id: number) => void
}

export const ToastContext = createContext<IToastContextProps>({ addToast: () => {}, removeToast: () => {} })

export const useToast = () => {
  return useContext(ToastContext)
}

interface IToastProvider {
  children: React.ReactNode
  domRootId: string
  lifespan: number
  maxToasts: number
}

let id = 0

function ToastProvider({ children, domRootId = 'root', lifespan, maxToasts = 3 }: IToastProvider) {
  const [toasts, setToasts] = useState([])

  const addToast = useCallback((text: string, variant: string) => {
    setToasts((prevToasts) => [...prevToasts, { id: id++, text, variant }])
  }, [])

  const removeToast = useCallback((id: number) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id))
  }, [])

  const toastsToRender = toasts.slice(0, maxToasts)

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      {createPortal(
        <ThemeProvider>
          <Absolute bottom={20} width='100%'>
            <Flex justifyContent='center' width='100%'>
              <Flex flexDirection='column-reverse' justifyContent='center' minWidth='300px'>
                {toastsToRender.map((toast) => (
                  <Toast
                    key={toast.id}
                    id={toast.id}
                    lifespan={lifespan}
                    text={toast.text}
                    variant={toast.variant}
                    onRemoveClick={removeToast}
                    mt={2}
                  />
                ))}
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
