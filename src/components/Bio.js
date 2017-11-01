import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <p>
          Written by <strong>Wai Yan</strong> who lives in Puchong and works in Petaling Jaya, building stuff using Ruby on Rails and React.{' '}
        </p>
      </div>
    )
  }
}

export default Bio
