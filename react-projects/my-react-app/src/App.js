import React, { useState } from 'react';
import data from './data';
import List from './list';

function App() {
  const [people, setpeople] = useState(data)
  return ( 
    <main>
      <section className='container'>
        <h3>{people.length}bithdays today</h3>
        <List people={people} />
        <button onClick={() => setpeople([])}>clear all</button>
      </section>
    </main>
  )
}

export default App;
