import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

const App = () => {
  const title = 'Getting Started React'
  const subtitle = 'JavaScript library'
  const author = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh'
  }
  const date = 'Date: Feb 20, 2020'
  const techs = ['HTML', 'CSS', 'JavaScript']
  const copyRight = new Date().getFullYear()
  return (
    <div>
      <Header title={title} subtitle={subtitle} author={author} date={date} />
      <Main techs={techs} />
      <Footer copyRight={copyRight} />
    </div>
  )
}

export default App
