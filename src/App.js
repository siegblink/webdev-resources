import { useState, Fragment } from 'react'
// import GridContainer from './grid/GridContainer'
// import Page from './components/Page'
import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

// import getFunctionList from './components/FunctionStore'

export default function App() {
  // const firstFunctionList = getFunctionList().slice(0, 6)
  // const secondFunctionList = getFunctionList().slice(6)

  // Declare 'Open drawer' local state.
  const [openDrawer, setOpenDrawer] = useState(false)

  // This is a function that sets the 'Open drawer' local state.
  const toggleDrawer = (event) => {
    const keyDownEvent = event?.type === 'keydown'
    const isTabKeyPressed = event?.key === 'Tab'
    const isShiftKeyPressed = event?.key === 'Shift'

    if (keyDownEvent && (isTabKeyPressed || isShiftKeyPressed)) {
      return
    }
    // Toggle the 'Open drawer' local state.
    setOpenDrawer((previousState) => !previousState)
  }

  return (
    <Fragment>
      <Navbar toggleDrawer={toggleDrawer} />
      <Sidebar openDrawer={openDrawer} toggleDrawer={toggleDrawer} />
      {/* <GridContainer>
        <Page
          firstFunctionList={firstFunctionList}
          secondFunctionList={secondFunctionList}
        />
      </GridContainer> */}
    </Fragment>
  )
}
