import React from 'react'
import { createGlobalStyle } from 'styled-components'
import Home from './components/Home'
import DashBoard from './components/Dashboard'
import EditProfile from './components/EditProfile'


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    background-color: black;
  }`

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Home />
      <DashBoard />
      <EditProfile />
    </>

  )

}

export default App