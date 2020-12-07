import React, { Component } from 'react'

class Footer extends Component {
  render () {
    return (
      <div className='footer'>
        <footer>
          <div className='socials'>
            <h2>Stay connected</h2>
            <ul>
              <li>
                <a href='https://twitter.com/cfsanderson' target='_blank'>
                  <i className='fa fa-twitter' aria-hidden='true' />
                </a>
              </li>
              <li>
                <a
                  href='https://www.instagram.com/cfsanderson/'
                  target='_blank'
                >
                  <i className='fa fa-instagram' aria-hidden='true' />
                </a>
              </li>
              <li>
                <a
                  href='https://www.linkedin.com/in/calebsanderson'
                  target='_blank'
                >
                  <i className='fa fa-linkedin' aria-hidden='true' />
                </a>
              </li>
              <li>
                <a href='https://github.com/cfsanderson' target='_blank'>
                  <i className='fa fa-github' aria-hidden='true' />
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    )
  }
}

export default Footer
