import { useState, useEffect } from 'react';
import './App.css';

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
        <>
          <input type='checkbox' onChange={console.log('ta ne?')} checked={item.isDone}></input>
          <li className='list__item'> {item.title} </li>
        </>
      );
    });

    // console.log(task);

    let text = '';

    const inputText = (inputValue) => {
      text = inputValue.target.value;
    };

    const addTask = () => {
      // setList(text);
      const newTask = {
        "id": Date.now() + "",
        "title": text,
        "isDone": false,
      };

      setList([
        newTask,
        ...list,
      ]);
    }

  return (
    <>
      <input onInput={(a) => {inputText(a)}} type="text" placeholder="What needs to be done?"></input>
      <button onClick={() => addTask()}>Send</button>

      <ul className='list'>
        {task}
      </ul>
    </>
  )
}

export default App
