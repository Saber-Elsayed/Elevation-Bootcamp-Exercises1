import "./App.css";
import SpotCheck1 from "./components/events";
import UseState from "./components/usestate";
import Company from "./components/Company";
function App() {
  let companiesData = [
    { name: "Tesla", revenue: 140 },
    { name: "Microsoft", revenue: 300 },
    { name: "Google", revenue: 600 },
  ];

  let [companies, setCompanies] = UseState(companiesData);

  return (
    <div className="App">
      <div className="ex-space">
        {companies.map((company) => (
          <Company name={company.name} revenue={company.revenue}></Company>
        ))}
      </div>
      <SpotCheck1 />
      <UseState />
    </div>
  );
}

export default App;
