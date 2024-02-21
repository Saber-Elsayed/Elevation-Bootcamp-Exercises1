import "./App.css";
import Company from "./componenets/Company";

function App() {
  let companies = [
    { name: "Tesla", revenue: 140 },
    { name: "Microsoft", revenue: 300 },
    { name: "Google", revenue: 600 },
  ];
  function generateCompanyTags(companies) {
    let companiesarr = [];
    for (let com of companies) {
      companiesarr.push(<Company name={com.name} revenue={com.revenue} />);
    }
    return companiesarr;
  }
  generateCompanyTags(companies);
  return (
    <div className="App">
      {companies.map((comp, index) => (
        <Company key={index} name={comp.name} revenue={comp.revenue} />
      ))}
    </div>
  );
}

export default App;
