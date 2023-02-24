import { useState } from 'react';
import './App.css';
import { users } from './users';

function App() {
  const [query,setQuery] = useState(users);

  return (
    <div className="App">
      <input type='text' placeholder='search' onChange={e => setQuery(e.target.value)}/>
      <ul>
        {users.filter(i => i.first_name.toLocaleLowerCase().includes(query)).map(i => (
          <li key={i.id}>
          {i.first_name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
