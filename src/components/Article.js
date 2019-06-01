import React from 'react'

export default function Article({ getData }) {
  const { links } = getData()

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
