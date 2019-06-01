import React from 'react'
import Header from './Header'
import Article from './Article'

import getFunctionList from './FunctionStore'

export default function Topic() {
  const functionList = getFunctionList()

  const renderSectionComponent = functionList.map(
    (dataFetchFunction, index) => {
      return (
        <section key={index}>
          <Header getData={dataFetchFunction} />
          <Article getData={dataFetchFunction} />
        </section>
      )
    }
  )

  return <React.Fragment>{renderSectionComponent}</React.Fragment>
}
