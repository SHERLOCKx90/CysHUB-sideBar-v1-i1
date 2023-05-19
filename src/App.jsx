import React from 'react'
import { createGlobalStyle } from 'styled-components'
import Home from './components/Home'

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
    </>

  )

}

export default App