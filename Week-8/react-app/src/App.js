// import logo from "./logo.svg";
// import "./App.css";

function App() {
  let companies = [
    { name: "Tesla", revenue: 140 },
    { name: "Microsoft", revenue: 300 },
    { name: "Google", revenue: 600 },
  ];
  const showCompany = (name, revenue) => {
    return (
      <div id={name}>
        {name} makes {revenue} every year
      </div>
    );
  };
  function sendParams(arr) {
    return arr.map((name, rev) => console.log(name, rev));
  }
  return (
    <div className="ex-space">
      <h4 className="ex-title">Exercise 1</h4>
      <div className="exercise" id="ex-1">
        {sendParams(companies)}
      </div>
    </div>
  );
}
export default App;
