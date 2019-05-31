import React from 'react'

export default function Article() {
  return (
    <article className='content-container'>
      <p className='bookmark'>
        <a
          href='https://developer.mozilla.org/en-US/docs/Web/JavaScript'
          className='bookmark-text'
        >
          JavaScript - MDN Web Docs
        </a>
      </p>
    </article>
  )
}
