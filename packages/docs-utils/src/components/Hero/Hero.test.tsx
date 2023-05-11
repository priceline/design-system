import React from 'react'
import { Hero } from '..'
import { render, screen } from '../../__test__/testing-library'

describe('Hero', () => {
  const heroName = 'Test Hero'
  const heroDescription = 'This is a test hero.'
  const heroImage = 'https://example.com/test-hero.jpg'

  it('renders hero name and description', () => {
    render(
      <Hero name={heroName} img={heroImage}>
        {heroDescription}
      </Hero>
    )
    const heroNameElement = screen.getByText(heroName)
    const heroDescriptionElement = screen.getByText(heroDescription)
    expect(heroNameElement).toBeInTheDocument()
    expect(heroDescriptionElement).toBeInTheDocument()
  })

  it('renders hero image', () => {
    render(
      <Hero name={heroName} img={heroImage}>
        {heroDescription}
      </Hero>
    )
    const heroImageElement = screen.getByRole('img')
    expect(heroImageElement).toBeInTheDocument()
    expect(heroImageElement.getAttribute('src')).toBe(heroImage)
  })
})
