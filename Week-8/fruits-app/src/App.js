import "./App.css";
import { Card, CardHeader, CardContent, CardFooter } from "./Components/Card";
function App() {
  return (
    <div>
      <h1>Fruits</h1>
      <div className="fruits-list">
        <Card>
          <CardHeader>Apple</CardHeader>
          <CardContent>
            <img src="https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
          </CardContent>
          <CardFooter>Color: Red</CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default App;
