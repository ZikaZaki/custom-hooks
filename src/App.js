import './App.css';
import CounterOne from "./components/CounterOne";
import CounterTwo from "./components/CounterTwo";
import DocTitleOne from "./components/DocTitleOne";
import DocTitleTwo from "./components/DocTitleTwo";
// import ParentContainer from "./components/Modal/ParentContainer";
import ParentContainer from "./components/ParentContainer";
import PostsList from "./components/Post/PostsList";
import UserForm from "./components/UserForm";
import React, { useState } from "react";
import { Person, usePersonProps } from "./components/Person";
function App() {
  const [count, setCount] = useState(0);
  const inc = () => setCount(count + 1);
  const dec = () => setCount(count - 1);

  const personProps = usePersonProps();

  return (
    <div className="App">
      {/* <DocTitleOne />
      <DocTitleTwo /> */}
      {/* <CounterOne />
      <CounterTwo /> */}
      {/* <UserForm /> */}
      {/* <ParentContainer /> */}
      {/* <ParentContainer /> */}
      {/* <PostsList /> */}
      <div>Count: {count}</div>
      <div>
        <button onClick={inc}>+</button>
        <button onCanPlay={dec}>-</button>
      </div>
      
      <Person {...personProps} />
    </div>
  );
}

export default App;
