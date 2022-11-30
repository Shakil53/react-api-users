import logo from './logo.svg';
import './App.css';
import { useEffect, useState, useSyncExternalStore } from 'react';

function App() {
  return (
    <div className="App">
      <ExternalUsers></ExternalUsers>
      
    </div>
  );
}

function ExternalUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, []);
  return (
    <div>
      <h2>External Users</h2>
      <p>{users.length}</p>
      {
        users.map(user => <User name={user.name} email={user.email}></User>)
        
      }
    </div>
  )
}

function User(props) {
  return (
    <div style={{border: '2px solid red', backgroundColor: '#282c34', padding: '10px', borderRadius: "20px", color: "whitesmoke"}}>
      <h3>
        Name: {props.name}
      </h3>
      <p>Email: {props.name}</p>
    </div>
  )
}


export default App;
