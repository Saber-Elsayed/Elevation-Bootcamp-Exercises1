import "./App.css";
import Users from "./Users";
function Company(props) {
  let explodedRevenue = props.revenue * 100;

  return (
    <div>
      <p>
        {props.name} earns {explodedRevenue}
      </p>
    </div>
  );
}

export function App() {
  let companies = [
    { name: "Tesla", revenue: 140 },
    { name: "Microsoft", revenue: 300 },
    { name: "Google", revenue: 600 },
  ];

  return <Company name={companies[0].name} revenue={companies[0].revenue} />;
}

export default App;
