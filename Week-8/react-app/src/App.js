// import logo from "./logo.svg";
// import "./App.css";

function App() {
  const personContainer = (name, email) => {
    let greatName = `The Great ${name}`;

    return (
      <div className="person">
        <h4>{greatName}</h4>
        <p>
          Contact at: <a href={email}>email</a>
        </p>
      </div>
    );
  };

  return personContainer("Louisa", "l@elo.com");
}
export default App;
