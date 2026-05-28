import Card from "./components/Card/Card";
import CardFooter from "./components/Card/CardFooter";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <Card variant="primary" padding="large">
        <h2>Hello Card</h2>
        <p>This is working</p>
        <CardFooter>
          <p>Helo</p>
        </CardFooter>
      </Card>
    </div>
  );
}

export default App;
