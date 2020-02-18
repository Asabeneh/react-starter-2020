import React from 'react'

const Main = ({ techs }) => {
  const techsFormatted = techs.map(tech => <li key={tech}>{tech}</li>)
  return (
    <main>
      <div className='main-wrapper'>
        <p>
          Prerequisite to get started{' '}
          <strong>
            <em>react.js</em>
          </strong>
          :
        </p>
        <ul>{techsFormatted}</ul>
      </div>
    </main>
  )
}

export default Main
