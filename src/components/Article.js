import React from 'react'
import getAllAboutReact from '../data/allAboutReact'

export default function Article() {
  const { links } = getAllAboutReact()

  const renderLink = links.map((link, index) => {
    return (
      <article className='content-container' key={index}>
        <p className='bookmark'>
          <a href={link.url} className='bookmark-text'>
            {link.name}
          </a>
        </p>
      </article>
    )
  })

  return <React.Fragment>{renderLink}</React.Fragment>
}
