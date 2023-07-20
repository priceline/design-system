import { ChatMessageVariation } from './ChatMessageContainer'

const initialMessage = {
  dateTime: 'Wed Jul 11 2023 11:33:52 GMT-0500',
  message: "Hi! I'm Penny, your virtual travel assistant!",
  variation: 'initial' as ChatMessageVariation,
}

const messages = [
  {
    dateTime: 'Wed Jul 11 2023 11:33:52 GMT-0500',
    message:
      'I see that you are interested in booking the Hilton Hawaiian Village for 3 nights from Mon, Apr 10, 2023, to Thu, Apr 13, 2023. The total cost for this stay is $796.68, with a total tax and fee of $111.57. There is an additional fee of $130.83 for facilities when you check-in. This hotel features free WiFi and is located in the Waikiki Beach Marina area. The room has 1 king bed and is rated 4 stars.',
    variation: 'incoming' as ChatMessageVariation,
  },
  {
    dateTime: 'Wed Jul 11 2023 11:34:12 GMT-0500',
    message: 'Is this hotel in a good location?',
    variation: 'outgoing' as ChatMessageVariation,
  },
  {
    dateTime: 'Wed Jul 11 2023 11:34:30 GMT-0500',
    message:
      "Yes, the Hilton Hawaiian Village is located in a fantastic area, specifically in the Waikiki Beach Marina - Ala Moana neighborhood. This location is renowned for its beautiful beaches, vibrant nightlife, and a wide variety of shopping and dining options. It's a great spot if you're looking to experience the best of Honolulu. If you have any other questions or if you're ready to book, feel free to ask!",
    variation: 'incoming' as ChatMessageVariation,
  },
]

export const shortConversation = [initialMessage, ...messages]

export const longConversation = [initialMessage, ...messages, ...messages, ...messages]
