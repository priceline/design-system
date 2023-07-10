import React from 'react'
import { Section } from '..'
import { render, screen } from '../../__test__/testing-library'

describe('Section component', () => {
  it('should render with the correct heading and children', () => {
    const heading = 'Section Title'
    const childText = 'Lorem ipsum dolor sit amet'
    render(<Section heading={heading}>{childText}</Section>)
    const sectionHeading = document.getElementById('section-title')
    const sectionContent = screen.getByText(childText)
    expect(sectionHeading.parentElement).toContainElement(sectionContent)
    expect(sectionHeading).toHaveTextContent(heading)
  })
})
