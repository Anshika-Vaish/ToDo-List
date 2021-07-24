import React, { useState, useEffect } from 'react';

import './App.css';
import Proptypes from 'prop-types'

import Header from './mycomponents/Header';
import { ToDos } from './mycomponents/ToDos';
import { Footer } from './mycomponents/Footer'
import { Todo } from './mycomponents/Todo';
import { Addtodo } from './mycomponents/Addtodo';
import {About} from './mycomponents/About';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";



function App() {
  let inittodo;
  if (localStorage.getItem("todos") === null) {
    inittodo = [];
  }
  else {
    inittodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    //console.log("i am delete", todo)
    setTodos(todos.filter((e) => {

      return e !== todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addtodo = (title, des) => {
    console.log("I am adding this todo", title, des)
    let sno;
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;

    }

    const mytodo = {
      sno: sno,
      title: title,
      des: des,
    }
    setTodos([...todos, mytodo]);
    //console.log(mytodo)

  }
  // set todos updates todos
  const [todos, setTodos] = useState(inittodo)
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));

  }, [todos])

  return (
    <>
      <Router>
        <Header title="MyTodos List" searchbar={false} />
        <Switch>

          <Route exact path="/" render={() => {
            return (
              <>
                <Addtodo addtodo={addtodo} />
                <ToDos todos={todos} onDelete={onDelete} />
              </>)
          }}>
            
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>


        <Footer />
      </Router>
    </>

  );
}
export default App;
Header.defaultprops = {
  title: "your title here"
}
Header.proptypes = {
  title: Proptypes.string
}
