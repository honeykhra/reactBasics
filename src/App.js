import "./App.css";
import FunctionComp from "./components/FunctionComp";
import ClassComp from "./components/ClassComp";
import Greet from "./components/Greet";
import GreetClass from "./components/GreetClass";
import Message from "./components/Message";
import Counter from "./components/Counter";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import ConditionalRender from "./components/ConditionalRender";
import NamesList from "./components/NamesList";

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <FunctionComp />
      <ClassComp />
      <Greet name="Honey" work="Coder">
        <p>This is props children</p>
      </Greet>
      <Greet name="Divu" work="Student">
        <button>Action</button>
      </Greet>
      <Greet name="Harsift" work="Child" />
      <GreetClass name="Honey" work="Coder" />
      <GreetClass name="Divu" work="Student" />
      <GreetClass name="Harsift" work="Child" />
      <Message />
      <Counter />
      <EventBind />
      <ParentComponent />
      <ConditionalRender />
      <NamesList />
    </div>
  );
}

export default App;
