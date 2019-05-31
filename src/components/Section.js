import React from 'react'

export default function Section({ columnName, children }) {
  const { first } = columnName

  return <div className={first}>{children}</div>
}
