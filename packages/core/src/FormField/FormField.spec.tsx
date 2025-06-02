import { Email as EmailIcon } from 'pcln-icons'
import { render, screen } from '../__test__/testing-library'
import { Input } from '../Input/Input'
import { Label } from '../Label/Label'
import { Select } from '../Select/Select'
import { FormField } from './FormField'

// afterEach(() => {
//   // bust cache for propTypes
//   FormField.displayName = 'FormField' + Math.random()
// })

describe('FormField', () => {
  test('renders', () => {
    const { asFragment } = render(
      <FormField>
        <Label>Email Address</Label>
        <Input id='email' name='email' />
      </FormField>
    )
    expect(asFragment()).toMatchSnapshot()
  })

  test('renders with Icon', () => {
    const { asFragment } = render(
      <FormField>
        <Label>Email Address</Label>
        <EmailIcon />
        <Input id='email' name='email' />
      </FormField>
    )
    expect(asFragment()).toMatchSnapshot()
  })

  test('renders with Select ', () => {
    const { asFragment } = render(
      <FormField>
        <Label>Pick Option</Label>
        <Select />
      </FormField>
    )
    expect(asFragment()).toMatchSnapshot()
  })

  test('renders with Select and Icon', () => {
    const { asFragment } = render(
      <FormField>
        <Label>Pick Email Address</Label>
        <EmailIcon />
        <Select />
      </FormField>
    )
    expect(asFragment()).toMatchSnapshot()
  })

  test('renders with Label - forces truncate', () => {
    render(
      <FormField>
        <Label>Pick Email Address</Label>
        <Input />
      </FormField>
    )

    expect(screen.getByText('Pick Email Address')).toHaveStyleRule('white-space', 'nowrap')
    expect(screen.getByText('Pick Email Address')).toHaveStyleRule('overflow', 'hidden')
    expect(screen.getByText('Pick Email Address')).toHaveStyleRule('text-overflow', 'ellipsis')
  })

  test('renders with Label autoHide prop', () => {
    const { asFragment } = render(
      <FormField>
        <Label autoHide>Email</Label>
        <EmailIcon />
        <Input id='email' name='email' />
      </FormField>
    )
    expect(asFragment()).toMatchSnapshot()
  })

  test('shows Label with autoHide prop and field value', () => {
    render(
      <FormField data-testid='form-field'>
        <Label autoHide>Email</Label>
        <EmailIcon />
        <Input id='email' name='email' value='hello@example.com' />
      </FormField>
    )
    const formField = screen.getByTestId('form-field')
    const label = formField.children[0] as HTMLElement
    expect(label).toHaveStyle('opacity: 1')
  })

  test('adds htmlFor prop to Label', () => {
    render(
      <FormField>
        <Label data-testid='label' />
        <Input id='hello' name='hello' />
      </FormField>
    )
    const label = screen.getByTestId('label')
    expect(label).toHaveAttribute('for', 'hello')
  })

  describe('disabled state', () => {
    it('renders input with icon - disabled', () => {
      const { asFragment } = render(
        <FormField disabled>
          <Label>Email Address</Label>
          <EmailIcon data-testid='email-icon' />
          <Input id='email' name='email' placeholder='Email' />
        </FormField>
      )

      expect(asFragment()).toMatchSnapshot()
    })

    it('renders select with icon - disabled', () => {
      const { asFragment } = render(
        <FormField disabled>
          <Label>Pick Email Address</Label>
          <EmailIcon />
          <Select defaultValue='Premium Economy'>
            <option>Premium Economy</option>
          </Select>
        </FormField>
      )

      expect(asFragment()).toMatchSnapshot()
    })
  })
})
