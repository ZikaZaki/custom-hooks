import './App.css';
import CounterOne from "./components/CounterOne";
import CounterTwo from "./components/CounterTwo";
import DocTitleOne from "./components/DocTitleOne";
import DocTitleTwo from "./components/DocTitleTwo";
import HugeList from "./components/HugeList";
import ListContainer from "./components/ListContainer";
import LocalStorageComp from "./components/LocalStorageComp";
// import ParentContainer from "./components/Modal/ParentContainer";
import ParentContainer from "./components/ParentContainer";
import PostsList from "./components/Post/PostsList";
import StorageComponent from "./components/StorageComponent";
import Test from "./components/Test";
import UserForm from "./components/UserForm";

function App() {
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
      {/* <Test /> */}
      {/* <StorageComponent /> */}
      {/* <LocalStorageComp /> */}
      {/* <HugeList /> */}
      <ListContainer />
    </div>
  );
}

export default App;
