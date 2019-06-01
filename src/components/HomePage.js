import React from 'react'
import Section from './Section'
import Topic from './Topic'

export default function HomePage() {
  const columnName = {
    first: 'col-1',
    second: 'col-2',
  }

  return (
    <Section columnName={columnName}>
      <Topic />
    </Section>
  )
}
