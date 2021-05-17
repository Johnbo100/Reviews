import React from 'react';
import Review from './Review';
import{FaGithubSquare}from 'react-icons/fa'

function App() {
  return <main>
    <section>
      <div className='title'>
      <h2>Johns reviews</h2>
      <div className='underline'></div>
      </div>
      <Review />
    </section>
  </main>
}

export default App;
