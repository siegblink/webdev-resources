import React from 'react'

export default function Section({ columnName, children }) {
  return <div className={columnName}>{children}</div>
}
