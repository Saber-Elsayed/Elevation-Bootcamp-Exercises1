import "./App.css";
import Users from "./Users";
function App() {
  const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 22 },
  ];
  return (
    <div className="App">
      <div>
        {/* <Users name={users[0].name} age={users[0].age} /> */}
        <Users name={users[0].name} age={users[0].age} />
        {users.map((user) => (
          <Users name={user.name} age={user.age} />
        ))}
      </div>
    </div>
  );
}

export default App;
