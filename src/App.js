
import './App.css';
import { users } from './users';

function App() {
  return (
    <div className="App">
      <input type='text' placeholder='search' />
      <ul>
        {users.map(i => (
          <li key={i.id}>{i.first_name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
