import React from 'react'
import { render } from '../__test__/testing-library'

import styled from 'styled-components'
import { User } from 'pcln-icons'

import { Button, createTheme } from '..'

import { borderRadii as borderRadius, shadows } from '../theme'
import { boxShadowSizeValues } from '../utils'

const theme = createTheme()

const StyledButton = styled(Button)`
  padding: 100px;
`

const consoleError = console.error
afterEach(() => {
  console.error = consoleError
})

describe('Button', () => {
  it('should render correctly with no props', () => {
    const { getByRole } = render(<Button>BUTTON</Button>)

    const button = getByRole('button')

    expect(button).toHaveStyleRule('background-color', theme.palette.primary.base)
    expect(button).toHaveStyleRule('color', theme.palette.text.lightest)

    expect(button).toHaveStyleRule('background-color', theme.palette.primary.dark, {
      modifier: ':hover',
    })
    expect(button).toHaveStyleRule('color', theme.palette.text.lightest, {
      modifier: ':hover',
    })
  })

  it('should render correctly when disabled', () => {
    const { getByRole } = render(<Button disabled>BUTTON</Button>)

    const button = getByRole('button')

    expect(button).toHaveStyleRule('background-color', theme.palette.primary.light)
    expect(button).toHaveStyleRule('color', theme.palette.text.base)
    expect(button).toHaveStyleRule('cursor', 'not-allowed', {
      modifier: ':disabled',
    })

    expect(button).toHaveStyleRule('background-color', theme.palette.primary.light, {
      modifier: ':hover',
    })
    expect(button).toHaveStyleRule('color', theme.palette.text.base)
  })

  it('should render correctly for "size" prop', () => {
    const { getByRole, rerender } = render(<Button>BUTTON</Button>)

    const button = getByRole('button')

    expect(button).toHaveStyleRule('font-size', '14px')
    expect(button).toHaveStyleRule('padding', '9.5px 18px')

    rerender(<Button size='small'>BUTTON</Button>)

    expect(button).toHaveStyleRule('font-size', '12px')
    expect(button).toHaveStyleRule('padding', '7px 12px')

    rerender(<Button size='medium'>BUTTON</Button>)

    expect(button).toHaveStyleRule('font-size', '14px')
    expect(button).toHaveStyleRule('padding', '9.5px 18px')

    rerender(<Button size='large'>BUTTON</Button>)

    expect(button).toHaveStyleRule('font-size', '16px')
    expect(button).toHaveStyleRule('padding', '12px 22px')

    rerender(<Button size='extraLarge'>BUTTON</Button>)

    expect(button).toHaveStyleRule('font-size', '16px')
    expect(button).toHaveStyleRule('padding', '16px 22px')
  })

  it('should render correctly for "IconLeft" and "IconRight"', () => {
    const { getByRole, rerender } = render(<Button IconLeft={User}>BUTTON</Button>)

    const button = getByRole('button')

    expect(button).toHaveStyleRule('font-size', '14px')
    expect(button).toHaveStyleRule('padding', '8px 20px 8px 16px')

    rerender(<Button size='small' IconRight={User} />)

    expect(button).toHaveStyleRule('font-size', '12px')
    expect(button).toHaveStyleRule('padding', '7px 12px')

    rerender(<Button size='medium'>BUTTON</Button>)

    expect(button).toHaveStyleRule('font-size', '14px')
    expect(button).toHaveStyleRule('padding', '9.5px 18px')

    rerender(<Button size='large'>BUTTON</Button>)

    expect(button).toHaveStyleRule('font-size', '16px')
    expect(button).toHaveStyleRule('padding', '12px 22px')

    rerender(<Button size='extraLarge'>BUTTON</Button>)

    expect(button).toHaveStyleRule('font-size', '16px')
    expect(button).toHaveStyleRule('padding', '16px 22px')
  })

  it('should render correctly for "width" prop', () => {
    const { getByRole, rerender } = render(<Button>BUTTON</Button>)

    const button = getByRole('button')

    expect(button).toHaveStyleRule('width', undefined)

    rerender(<Button width={1}>BUTTON</Button>)
    expect(button).toHaveStyleRule('width', '100%')

    rerender(<Button width={1 / 2}>BUTTON</Button>)
    expect(button).toHaveStyleRule('width', '50%')

    rerender(<Button width={100}>BUTTON</Button>)
    expect(button).toHaveStyleRule('width', '100px')

    rerender(<Button width='3em'>BUTTON</Button>)
    expect(button).toHaveStyleRule('width', '3em')
  })

  it('should render correctly for "title" prop', () => {
    const { getByTitle } = render(<Button title='button title'>BUTTON</Button>)

    expect(getByTitle('button title')).toHaveAttribute('aria-label', 'button title')
  })

  it('should forward the "aria-label" prop', () => {
    const label = 'i am an aria label'
    const { getByLabelText } = render(<Button aria-label={label}>BUTTON</Button>)

    expect(getByLabelText(label)).toHaveAttribute('aria-label', label)
  })

  it('should render correctly for "borderRadius" prop', () => {
    const { getByRole, rerender } = render(<Button size='medium'>BUTTON</Button>)

    const button = getByRole('button')

    expect(button).toHaveStyleRule('border-radius', borderRadius['action-md'])

    rerender(
      <Button size='small' borderRadius=''>
        BUTTON
      </Button>
    )
    expect(button).toHaveStyleRule('border-radius', borderRadius['action-sm'])

    rerender(
      <Button size='small' borderRadius={'none'}>
        BUTTON
      </Button>
    )
    expect(button).toHaveStyleRule('border-radius', borderRadius.none)

    rerender(
      <Button size='medium' borderRadius={'sm'}>
        BUTTON
      </Button>
    )
    expect(button).toHaveStyleRule('border-radius', borderRadius.sm)

    rerender(
      <Button size='large' borderRadius={'md'}>
        BUTTON
      </Button>
    )
    expect(button).toHaveStyleRule('border-radius', borderRadius.md)

    rerender(
      // @ts-ignore
      <Button size='large' borderRadius='NOT VALID'>
        BUTTON
      </Button>
    )
    expect(button).toHaveStyleRule('border-radius', borderRadius['action-lg'])

    rerender(
      <Button size='large' borderRadius={'xl'}>
        BUTTON
      </Button>
    )

    expect(button).toHaveStyleRule('border-radius', borderRadius.xl)

    rerender(
      // @ts-ignore
      <Button size='extraLarge' borderRadius={'notValid'}>
        BUTTON
      </Button>
    )

    expect(button).toHaveStyleRule('border-radius', borderRadius['action-xl'])
  })

  it('should render correctly for "boxShadowSize" prop', () => {
    const { getByRole, rerender } = render(<Button>BUTTON</Button>)

    const button = getByRole('button')

    expect(button).toHaveStyleRule('box-shadow', undefined)

    Array.from(boxShadowSizeValues).forEach((size: string) => {
      // @ts-ignore
      rerender(<Button boxShadowSize={size}>BUTTON</Button>)
      expect(button).toHaveStyleRule('box-shadow', shadows[size])
    })
  })

  it('should render correctly for extraLarge size', () => {
    const { getByRole } = render(
      <Button borderRadius='xl' size='extraLarge'>
        BUTTON
      </Button>
    )

    const button = getByRole('button')

    expect(button).toHaveStyleRule('border-radius', '16px')
    expect(button).toHaveStyleRule('font-size', '16px')
    expect(button).toHaveStyleRule('padding', '16px 22px')
  })

  describe('variations', () => {
    describe('fill variation', () => {
      it('should render correctly', () => {
        const { getByRole } = render(<Button variation='fill'>BUTTON</Button>)

        const button = getByRole('button')

        expect(button).toHaveStyleRule('color', theme.palette.text.lightest)
        expect(button).toHaveStyleRule('background-color', theme.palette.primary.base)

        expect(button).toHaveStyleRule('color', theme.palette.text.lightest, {
          modifier: ':hover',
        })
        expect(button).toHaveStyleRule('background-color', theme.palette.primary.dark, {
          modifier: ':hover',
        })
        expect(button).toHaveStyleRule('outline', `0px solid ${theme.palette.primary.dark}`, {
          modifier: ':focus',
        })
        expect(button).toHaveStyleRule('box-shadow', `0 0 0 2px ${theme.palette.primary.dark}`, {
          modifier: ':focus',
        })
      })

      it('should render correctly when disabled', () => {
        const { getByRole } = render(
          <Button variation='fill' disabled>
            BUTTON
          </Button>
        )

        const button = getByRole('button')

        expect(button).toHaveStyleRule('color', theme.palette.text.base)
        expect(button).toHaveStyleRule('background-color', theme.palette.primary.light)

        expect(button).toHaveStyleRule('background-color', theme.palette.primary.light, {
          modifier: ':hover',
        })
      })
    })

    describe('outline variation', () => {
      it('should render correctly', () => {
        const { getByRole } = render(<Button variation='outline'>BUTTON</Button>)

        const button = getByRole('button')

        expect(button).toHaveStyleRule('color', theme.palette.primary.base)
        expect(button).toHaveStyleRule('background-color', 'transparent')
        expect(button).toHaveStyleRule('background-color', 'transparent', {
          modifier: ':hover',
        })
        expect(button).toHaveStyleRule('color', theme.palette.primary.dark, {
          modifier: ':hover',
        })
        expect(button).toHaveStyleRule('box-shadow', `inset 0 0 0 2px ${theme.palette.primary.dark}`, {
          modifier: ':hover',
        })
      })

      it('should render correctly when disabled', () => {
        const { getByRole } = render(
          <Button variation='outline' disabled>
            BUTTON
          </Button>
        )

        const button = getByRole('button')

        expect(button).toHaveStyleRule('color', theme.palette.primary.light)
        expect(button).toHaveStyleRule('background-color', 'transparent')
      })
    })

    describe('link variation', () => {
      it('should render correctly', () => {
        const { getByRole } = render(<Button variation='link'>BUTTON</Button>)

        const button = getByRole('button')

        expect(button).toHaveStyleRule('color', theme.palette.primary.base)
        expect(button).toHaveStyleRule('vertical-align', 'inherit')
        expect(button).toHaveStyleRule('-webkit-font-smoothing', 'inherit')
        expect(button).toHaveStyleRule('font-weight', '500')
        expect(button).toHaveStyleRule('line-height', '1.4')
        expect(button).toHaveStyleRule('padding', '0px')
        expect(button).toHaveStyleRule('background-color', 'transparent')
        expect(button).toHaveStyleRule('color', theme.palette.primary.dark, {
          modifier: ':hover',
        })
        expect(button).toHaveStyleRule('text-decoration', 'underline', {
          modifier: ':hover',
        })
      })

      it('should render correctly when disabled', () => {
        const { getByRole } = render(
          <Button variation='link' disabled>
            BUTTON
          </Button>
        )

        const button = getByRole('button')

        expect(button).toHaveStyleRule('color', theme.palette.text.light, {
          modifier: ':disabled',
        })
        expect(button).toHaveStyleRule('background-color', theme.palette.background.base, {
          modifier: ':disabled',
        })
      })
    })

    describe('subtle variation', () => {
      it('should render correctly', () => {
        const { getByRole } = render(<Button variation='subtle'>BUTTON</Button>)

        const button = getByRole('button')

        expect(button).toHaveStyleRule('color', theme.palette.primary.base)
        expect(button).toHaveStyleRule('background-color', theme.palette.background.base)
        expect(button).toHaveStyleRule('vertical-align', 'middle')
        expect(button).toHaveStyleRule('-webkit-font-smoothing', 'antialiased')
        expect(button).toHaveStyleRule('font-weight', '700')
        expect(button).toHaveStyleRule('line-height', '1.5')
        expect(button).toHaveStyleRule('color', theme.palette.primary.dark, {
          modifier: ':hover',
        })
        expect(button).toHaveStyleRule('background-color', theme.palette.background.light, {
          modifier: ':hover',
        })
        expect(button).toHaveStyleRule('outline', `0px solid ${theme.palette.primary.dark}`, {
          modifier: ':focus',
        })
        expect(button).toHaveStyleRule('box-shadow', `0 0 0 2px ${theme.palette.primary.dark}`, {
          modifier: ':focus',
        })
      })

      it('should render correctly when disabled', () => {
        const { getByRole } = render(
          <Button variation='subtle' disabled>
            BUTTON
          </Button>
        )

        const button = getByRole('button')

        expect(button).toHaveStyleRule('color', theme.palette.text.light, {
          modifier: ':disabled',
        })
        expect(button).toHaveStyleRule('background-color', theme.palette.background.base, {
          modifier: ':disabled',
        })
      })
    })

    describe('white variation', () => {
      it('should render correctly', () => {
        const { getByRole } = render(<Button variation='white'>BUTTON</Button>)

        const button = getByRole('button')

        expect(button).toHaveStyleRule('background-color', theme.palette.background.lightest)
      })
    })

    describe('plain variation', () => {
      it('should render correctly', () => {
        const { getByRole } = render(<Button variation='plain'>BUTTON</Button>)

        const button = getByRole('button')

        expect(button).toHaveStyleRule('color', theme.palette.primary.base)
        expect(button).toHaveStyleRule('background-color', 'transparent')
        expect(button).toHaveStyleRule('vertical-align', 'middle')
        expect(button).toHaveStyleRule('-webkit-font-smoothing', 'antialiased')
        expect(button).toHaveStyleRule('font-weight', '700')
        expect(button).toHaveStyleRule('line-height', '1.5')
        expect(button).toHaveStyleRule('color', theme.palette.primary.dark, {
          modifier: ':hover',
        })
        expect(button).toHaveStyleRule('background-color', theme.palette.background.light, {
          modifier: ':hover',
        })
        expect(button).toHaveStyleRule('outline', `0px solid ${theme.palette.primary.dark}`, {
          modifier: ':focus',
        })
        expect(button).toHaveStyleRule('box-shadow', `0 0 0 2px ${theme.palette.primary.dark}`, {
          modifier: ':focus',
        })
      })

      it('should render correctly when disabled', () => {
        const { getByRole } = render(
          <Button variation='plain' disabled>
            BUTTON
          </Button>
        )

        const button = getByRole('button')

        expect(button).toHaveStyleRule('color', theme.palette.text.light, {
          modifier: ':disabled',
        })
        expect(button).toHaveStyleRule('background-color', theme.palette.background.base, {
          modifier: ':disabled',
        })
      })
    })

    describe('lightFill variation', () => {
      it('should render correctly', () => {
        const { getByRole } = render(
          <Button variation='lightFill' color='warning'>
            BUTTON
          </Button>
        )

        const button = getByRole('button')

        expect(button).toHaveStyleRule('color', theme.palette.warning.base)
        expect(button).toHaveStyleRule('background-color', theme.palette.warning.light)
        expect(button).toHaveStyleRule('vertical-align', 'middle')
        expect(button).toHaveStyleRule('-webkit-font-smoothing', 'antialiased')
        expect(button).toHaveStyleRule('font-weight', '700')
        expect(button).toHaveStyleRule('line-height', '1.5')
        expect(button).toHaveStyleRule('color', theme.palette.warning.dark, {
          modifier: ':hover',
        })
        expect(button).toHaveStyleRule('background-color', theme.palette.warning.light, {
          modifier: ':hover',
        })
        expect(button).toHaveStyleRule('outline', `0px solid ${theme.palette.warning.dark}`, {
          modifier: ':focus',
        })
        expect(button).toHaveStyleRule('box-shadow', `0 0 0 2px ${theme.palette.warning.dark}`, {
          modifier: ':focus',
        })
      })

      it('should render correctly when disabled', () => {
        const { getByRole } = render(
          <Button variation='lightFill' disabled>
            BUTTON
          </Button>
        )

        const button = getByRole('button')

        expect(button).toHaveStyleRule('color', theme.palette.text.light, {
          modifier: ':disabled',
        })
        expect(button).toHaveStyleRule('background-color', theme.palette.background.base, {
          modifier: ':disabled',
        })
      })
    })

    describe('input variation', () => {
      it('should render correctly', () => {
        const { getByRole } = render(<Button variation='input'>BUTTON</Button>)

        const button = getByRole('button')

        expect(button).toHaveStyleRule('color', theme.palette.text.base)
        expect(button).toHaveStyleRule('background-color', 'transparent')
        expect(button).toHaveStyleRule('border-color', theme.palette.border.base)
        expect(button).toHaveStyleRule('border-color', theme.palette.primary.base, {
          modifier: ':focus',
        })
        expect(button).toHaveStyleRule('box-shadow', `0 0 0 2px ${theme.palette.primary.base}`, {
          modifier: ':focus',
        })
      })
    })
  })

  // this test detects a current defect that will be fixed properly in DSv4
  it('should not lose base styles on "styled(Button)"', () => {
    const { getByRole } = render(<StyledButton>BUTTON</StyledButton>)

    const button = getByRole('button')

    expect(button).toHaveStyleRule('background-color', theme.palette.primary.base)
    expect(button).toHaveStyleRule('color', theme.palette.text.lightest)
    expect(button).toHaveStyleRule('padding', '100px')

    expect(button).toHaveStyleRule('background-color', theme.palette.primary.dark, {
      modifier: ':hover',
    })
    expect(button).toHaveStyleRule('color', theme.palette.text.lightest, {
      modifier: ':hover',
    })
  })
})
