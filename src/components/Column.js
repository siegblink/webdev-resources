import { Fragment } from 'react';
import Header from './Header'
import Article from './Article'

export default function Column({ functionList }) {
  const renderSection = functionList.map((dataFetchFunction, index) => {
    return (
      <section key={index}>
        <Header getData={dataFetchFunction} />
        <Article getData={dataFetchFunction} />
      </section>
    )
  })

  return <Fragment>{renderSection}</Fragment>;
}
