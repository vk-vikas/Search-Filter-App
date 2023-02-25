import { useState } from 'react';
import './App.css';
import Table from './Table';
import { users } from './users';

function App() {
  const [query,setQuery] = useState(users);

  const keys = ["first_name","last_name","email"];

  const search = () => {
    return users.filter(i => 
      keys.some((key) => i[key].toLowerCase().includes(query)))
  }

  return (
    <div className="App">
      <input type='text' placeholder='search' onChange={e => setQuery(e.target.value)}/>
      {/* <ul>
        {users.filter(i => i.first_name.toLocaleLowerCase().includes(query)).map(i => (
          <li key={i.id}>
          {i.first_name}</li>
        ))}
      </ul> */}
      <Table arr={search()}/>
    </div>
  );
}

export default App;
