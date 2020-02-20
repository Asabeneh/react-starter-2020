import React, { Component } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

class App extends Component {
  state = {
    count: 0,
    name: 'Asabeneh',
    users: ['David', 'Tomas', 'Matias']
  }

  changeName = () => {
    let name = this.state.name === 'Asabeneh' ? 'David' : 'Asabeneh'
    this.setState({
      name: name
    })
  }
  addOne = () => {
    this.setState({ count: this.state.count + 1 })
  }
  minusOne = () => {
    this.setState({ count: this.state.count - 1 })
  }
  render() {
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
        <h1>{this.state.count}</h1>
        <h1>{this.state.name}</h1>
        <h1>Numbers of users:{this.state.users.length}</h1>
        <button onClick={this.addOne}>+one</button>
        <button onClick={this.minusOne}>-one</button>
        <button onClick={this.changeName}>Change Name</button>
        <Header title={title} subtitle={subtitle} author={author} date={date} />
        <Main techs={techs} />
        <Footer copyRight={copyRight} />
      </div>
    )
  }
}

export default App
