import React from 'react'
import Section from './Section'
import Header from './Header'
import Article from './Article'
import Topic from './Topic'

export default function HomePage() {
  return (
    <Section columnName={`col-1`}>
      <Topic>
        <Header />
        <Article />
      </Topic>
    </Section>
  )
}
