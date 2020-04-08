import React from 'react'
import { Link } from 'gatsby'

import { withPrefix } from 'gatsby'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

const style={
  position: "fixed",
  width: "100%",
  bottom: "0",
  height: "200px"
}

const Footer = class extends React.Component {
  render() {
    return (
      <footer style={style} className="has-background-black has-text-white-ter">
        <div className="has-text-centered">
          <img
            src={`${withPrefix('/')}img/ilh1.png`}
            alt="ILH"
            style={{ width: '10em', height: '10em' }}
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
