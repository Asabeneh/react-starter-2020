import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

const App = () => {
  const title = 'Getting Started React'
  const subtitle = 'React is a JavaScript library'
  const authorFirstName = 'Asabeneh'
  const authorLastName = 'Yetayeh'
  const date = 'Feb 17, 2020'
  const techs = ['HTML', 'CSS', 'JavaScript']
  const copyright = new Date().getFullYear()
  return (
    <div>
      <Header
        title={title}
        subtitle={subtitle}
        authorFirstName={authorFirstName}
        authorLastName={authorLastName}
        date={date}
      />
      <Main techs={techs} />
      <Footer copyright={copyright} />
    </div>
  )
}

export default App
