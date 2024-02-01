import "./App.css";

function App() {
  let isUserLoggedIn = localStorage.getItem("loggedIn");
  let componentToDisplay = isUserLoggedIn ? <LandingPage /> : <AboutUs />;

  return (
    <div className="App">
      <div className="app">
        <Nav />
        {componentToDisplay}
      </div>
    </div>
  );
}

export default App;

function AboutUs() {
  return <p>This is an example of an about us page~</p>;
}

function Nav() {
  return (
    <div id="nav">
      <span>Home</span>
      <span>About</span>
    </div>
  );
}

function LandingPage() {
  return <h1>Welcome!</h1>;
}
