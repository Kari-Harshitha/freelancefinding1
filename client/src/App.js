import React from 'react';
import Header from '. /components/Header';
import ProjectList from '. /components/ProjectList';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <ProjectList />
      </div>
    </div>
  );
}

export default App;
