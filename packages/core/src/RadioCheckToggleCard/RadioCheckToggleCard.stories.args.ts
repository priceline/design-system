import {
  RadioCheckToggleCard,
  RadioCheckToggleCardHPositions,
  RadioCheckToggleCardVPositions,
} from './RadioCheckToggleCard'

export const argTypes = {
  hPosition: {
    control: { type: 'radio' },
    options: RadioCheckToggleCardHPositions,
    defaultValue: RadioCheckToggleCard.defaultProps.hPosition,
    description: 'Controlling the button icon horizontal position',
  },
  vPosition: {
    control: { type: 'radio' },
    options: RadioCheckToggleCardVPositions,
    defaultValue: RadioCheckToggleCard.defaultProps.vPosition,
    description: 'Controlling the button icon vertical position',
  },
  isTakingFullHeightOfCard: {
    control: 'boolean',
    defaultValue: false,
    description: 'Controlling the button icon whether take full height of the card',
  },
  title: {
    control: 'text',
    defaultValue: 'Title',
    description: 'Card label',
  },
  isTitleBold: {
    control: 'boolean',
    defaultValue: false,
    description: 'Controlling the card label bold status',
  },
  isSelected: {
    control: 'boolean',
    defaultValue: false,
    description: 'Controlling the card selection status',
  },
}
