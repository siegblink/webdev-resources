import React from 'react'
import GridContainer from './grid/GridContainer'
import Page from './components/Page'
import './App.css'

import getFunctionList from './components/FunctionStore'

export default function App() {
  const firstFunctionList = getFunctionList().slice(0, 6)
  const secondFunctionList = getFunctionList().slice(6)

  return (
    <GridContainer>
      <Page
        firstFunctionList={firstFunctionList}
        secondFunctionList={secondFunctionList}
      />
    </GridContainer>
  )
}
