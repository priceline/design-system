import { ThumbsUp } from 'pcln-icons'
import { Card } from '../Card/Card'
import { Text } from '../Text/Text'
import { render } from '../__test__/testing-library'
import { Hug } from './Hug'

const text = (
  <Text.span>
    Have you seen this <Text.span bold>card</Text.span> I&ampls;m hugging?!
  </Text.span>
)

describe('Hug', () => {
  test('renders text, icon, and Child', () => {
    const { asFragment } = render(
      <Hug icon={<ThumbsUp />} text={text}>
        <Card p={3} bg='white' color='text'>
          I&apos;m a card within a hug!
        </Card>
      </Hug>
    )
    expect(asFragment()).toMatchSnapshot()
  })

  test('renders text when string is provided', () => {
    const { asFragment } = render(
      <Hug icon={<ThumbsUp />} text="I've been known to hug a card from time to time">
        <Card p={3} bg='white' color='text'>
          I&apos;m a card within a hug!
        </Card>
      </Hug>
    )
    expect(asFragment()).toMatchSnapshot()
  })

  test('renders text when array of nodes is provided', () => {
    const { asFragment } = render(
      <Hug icon={<ThumbsUp />} text={[text, text]}>
        <Card p={3} bg='white' color='text'>
          I&apos;m a card within a hug!
        </Card>
      </Hug>
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
