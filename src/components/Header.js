import React from 'react'
import getAllAboutReact from '../data/allAboutReact'

export default function Header() {
  const { title } = getAllAboutReact()
  const wordList = title.split(' ')
  const firstWord = wordList.slice(0, 1)
  const theRest = wordList.slice(1).join(' ')

  return (
    <header className='content-container'>
      <h1 className='header'>
        {firstWord} <span className='read-list'>{theRest}</span>
      </h1>
    </header>
  )
}
