import { Fragment } from 'react';
import Section from './Section'
import Column from './Column'

export default function Page({ firstFunctionList, secondFunctionList }) {
  const functionList = [firstFunctionList, secondFunctionList]

  const renderColumn = functionList.map((functionListItem, index) => {
    return (
      <Section columnNumber={`col-${index + 1}`} key={index}>
        <Column functionList={functionListItem} />
      </Section>
    )
  })

  return <Fragment>{renderColumn}</Fragment>;
}
