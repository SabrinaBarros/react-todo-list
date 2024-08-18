import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [list, setList] = useState([]);

  useEffect(() => {
    const resAPI = () => {

      fetch("https://my-json-server.typicode.com/EnkiGroup/DesafioReactFrontendJunior2024/todos")
      .then(res => {

        return res.json();

      })
      .then(data => {

        setList(data);

      });

    };

    resAPI();

  }, []);

    const task = list.map((item, i) => {
      return (

        <li className='list__item' key={item.id}> {item.title} </li>

      );
    });

    console.log(task);

  return (
    <>
      <input type="text" placeholder="What needs to be done?"></input>
      <button>Send</button>

      <ul className='list'>
        {task}
      </ul>
    </>
  )
}

export default App
