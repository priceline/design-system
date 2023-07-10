import type { ColorSchemeName } from '../theme'

import * as Dialog from '@radix-ui/react-dialog'
import React from 'react'
import { Close } from 'pcln-icons'

import { Box } from '../Box'
import { Button } from '../Button'
import { Grid } from '../Grid'
import { Text } from '../Text'
import { ThemeProvider } from '../ThemeProvider'
import {
  DialogContent,
  DialogContentArea,
  DialogDescription,
  DialogOverlay,
  DialogTitle,
  SIZES,
} from './Dialog.styled'

export interface IDialogProps {
  children?: React.ReactNode | JSX.Element[]
  description: string
  headerColorScheme?: ColorSchemeName
  headerContent?: React.ReactNode
  headerIcon?: React.ReactNode
  hugColor?: string // TODO should be enum of palette
  modal?: boolean
  defaultOpen?: boolean
  size: 'sm' | 'md' | 'lg' | 'xl'
  triggerNode?: React.ReactNode | JSX.Element[]
}

const PclnDialog: React.FC = ({
  children,
  description,
  defaultOpen = false,
  headerColorScheme,
  headerContent,
  headerIcon,
  hugColor,
  modal = false,
  size = 'md',
  triggerNode,
}: IDialogProps) => {
  const showHeaderCloseButton = true

  const headerTextStyle = SIZES[size].header.textStyle

  return (
    <Dialog.Root defaultOpen={defaultOpen} modal={modal}>
      <Dialog.Trigger asChild>{triggerNode}</Dialog.Trigger>
      <Dialog.Portal>
        <ThemeProvider>
          <DialogOverlay />
          <DialogContent as={Box} borderRadius='2xl' hugColor={hugColor}>
            <Dialog.Title asChild>
              <DialogTitle
                size={size}
                headerColorScheme={headerColorScheme}
                borderRadius='2xl'
                rounded='top'
                px={[3, null, 24]}
                py={3}
              >
                <Grid templateColumns={['1fr auto']} gap={2} width={1}>
                  <Grid templateColumns={['auto 1fr']} alignItems='center' gap={2} width={1}>
                    <Grid>{headerIcon}</Grid>
                    <Grid>
                      <Text textStyle={headerTextStyle}>{headerContent}</Text>
                    </Grid>
                  </Grid>

                  <Grid>
                    {showHeaderCloseButton && (
                      <Dialog.Close asChild>
                        <Button size='extraLarge' color='primary' borderRadius='xl' IconLeft={Close} />
                      </Dialog.Close>
                    )}
                  </Grid>
                </Grid>
              </DialogTitle>
            </Dialog.Title>

            <DialogContentArea size={size} headerContent={headerContent}>
              <DialogDescription>{description}</DialogDescription>

              {children}

              <Dialog.Close asChild>
                <Button size='extraLarge' color='primary' borderRadius='xl' IconLeft={Close} />
              </Dialog.Close>
            </DialogContentArea>
          </DialogContent>
        </ThemeProvider>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

PclnDialog.displayName = 'Dialog'

export default PclnDialog
