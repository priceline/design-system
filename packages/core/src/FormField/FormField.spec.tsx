import { render } from '../__test__/testing-library'
import { FormField, Input, Label, Select } from '..'
import { Email as EmailIcon } from 'pcln-icons'

afterEach(() => {
  // bust cache for propTypes
  FormField.displayName = 'FormField' + Math.random()
})

describe('FormField', () => {
  test('renders', () => {
    const json = rendererCreateWithTheme(
      <FormField>
        <Label>Email Address</Label>
        <Input id='email' name='email' />
      </FormField>
    ).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders with Icon', () => {
    const json = rendererCreateWithTheme(
      <FormField>
        <Label>Email Address</Label>
        <EmailIcon />
        <Input id='email' name='email' />
      </FormField>
    ).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders with Select ', () => {
    const json = rendererCreateWithTheme(
      <FormField>
        <Label>Pick Option</Label>
        <Select />
      </FormField>
    ).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders with Select and Icon', () => {
    const json = rendererCreateWithTheme(
      <FormField>
        <Label>Pick Email Address</Label>
        <EmailIcon />
        <Select />
      </FormField>
    ).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders with Label autoHide prop', () => {
    const json = rendererCreateWithTheme(
      <FormField>
        <Label autoHide>Email</Label>
        <EmailIcon />
        <Input id='email' name='email' />
      </FormField>
    ).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('adds htmlFor prop to Label', () => {
    const { getByTestId } = render(
      <FormField>
        <Label data-testid='label' htmlFor='hello' />
        <Input id='hello' name='hello' />
      </FormField>
    )
    expect(getByTestId('label')).toHaveAttribute('for', 'hello')
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
