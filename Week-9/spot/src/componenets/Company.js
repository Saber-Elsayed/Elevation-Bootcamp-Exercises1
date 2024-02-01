import SubCompany from "./SubCompany";
function Company(props) {
  return <SubCompany name={props.name} revenue={props.revenue} />;
}

export default Company;
