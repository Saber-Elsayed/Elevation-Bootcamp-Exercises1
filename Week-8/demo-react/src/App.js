import logo from "./logo.svg";
import "./App.css";
import HelloWorld from "./HelloWorld";

function App() {
  return (
    <div className="App">
      <div>
        <label htmlFor="username">Username:</label>
        <input type="text" />
      </div>
      <div>
        <label htmlFor="password">password:</label>
        <input type="password" />
      </div>
      <div className="actions">
        {signupBtn}
        {loginBtn}
      </div>
    </div>
  );
}
const signupBtn = actionbtn({ id: "signup", label: "signup" });
const loginBtn = actionbtn({ id: "login", label: "login" });

function actionbtn(props) {
  return <button id={props.id}>{props.label}</button>;
}
export default App;
