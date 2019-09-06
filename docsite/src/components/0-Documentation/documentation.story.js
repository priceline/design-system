import React from 'react'
import { storiesOf } from '@storybook/react'

import GatsbyAstronaut from '../../assets/gatsby-astronaut.png'

const story = storiesOf('Documentation|Readme', module)

story.add('Introduction', () => (
  <>
    <div style={{ textAlign: 'center' }}>
      <img src={GatsbyAstronaut} alt="Gatsby Astronaut" style={{ width: '300px', marginBottom: '1rem' }} />
      <h1>awesome-gatsby-starter</h1>
      <p>
        <strong>Thanks for using awesome-gatsby-starter!</strong>
        <br />
        Remember to <a href="https://github.com/South-Paw/awesome-gatsby-starter">drop a ⭐ on the project</a> if you
        find it useful.
      </p>
    </div>
  </>
))
