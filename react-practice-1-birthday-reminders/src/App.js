import React, { useState } from 'react';
import data from './data.json';
import Layout from './Layout';

function App() {
  const [people, setPeople] = useState(data);

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <Layout people={people} />
        <button onClick={() => setPeople([])}>clear all</button>
      </section>
    </main>
  );
}

export default App;
