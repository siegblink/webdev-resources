import React from 'react'
import Section from './Section'
import Header from './Header'
import Article from './Article'
import Topic from './Topic'

export default function HomePage() {
  const columnName = {
    first: 'col-1',
    second: 'col-2',
  }

  return (
    <Section columnName={columnName}>
      <Topic>
        <Header />
        <Article />
      </Topic>
    </Section>
  )
}
