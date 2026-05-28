import Card from "./components/Card/Card";
import CardFooter from "./components/Card/CardFooter";
import { cardsData } from "./data/cardsData";

function App() {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Travel Destinations
          </h1>
          <p className="text-xl text-gray-600">
            Reusable card component with dynamic data
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardsData.map()}
        </div>
      </div>
    </div>
  );
}

export default App;
