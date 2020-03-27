import React from 'react'
import { Link } from 'gatsby'

import { withPrefix } from 'gatsby'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="has-background-black has-text-white-ter">
        <div className="has-text-centered">
          <img
            src={`${withPrefix('/')}img/ilh1.png`}
            alt="ILH"
            style={{ width: '14em', height: '14em' }}
          />
        </div>
        <div  className="has-text-centered">
        (c) 2020 Independent Living Housing, Inc.
        </div>
      </footer>
    )
  }
}

export default Footer
