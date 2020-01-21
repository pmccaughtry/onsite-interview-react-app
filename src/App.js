import React, { useState, useEffect } from 'react';

import Layout from './components/ui/layout';
import Header from './components/ui/layout/header'
import Navigation from './components/ui/layout/navigation'
import Repositories from './components/repositories';

const App = () => {
  const [repositories, setRepositories] = useState([]);
  const [filter, setFilter] = useState('');

  const navClickedHandler = (event) => {
    event.preventDefault();
    setFilter(event.target.id);
  };

  useEffect(() => {
    fetch('https://api.github.com/search/repositories?q=stars:%3E10000&sort=stars')
        .then(res => res.json())
        .then(json => {
            setRepositories(json.items);
        })
        .catch(err => console.error("An error occurred fetching repositories:", err));
  }, []);

    return (<div className="App">
      <Layout>
        <Header />
        <Navigation
          selected={filter}
          navLinkClicked={navClickedHandler} />  
      </Layout>
      <Repositories repos={repositories} filter={filter} />
    </div>
  );
};

export default App;
