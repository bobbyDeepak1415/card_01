import { cardsData } from "./data/cardsData";
import Card from "./components/Card/Card";
import CardImage from "./components/Card/CardImage";
import CardHeader from "./components/Card/CardHeader";
import CardTitle from "./components/Card/CardTitle";
import CardBody from "./components/Card/CardBody";

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
          {cardsData.map((card) => (
            <Card
              key={card.id}
              variant={card.id % 2 === 0 ? "primary" : "default"}
              padding="none"
            >
              {card.image && <CardImage src={card.image} alt={card.title} />}
              <div className="p-6">
                <CardHeader>
                  {card.category && (
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full mb-2">
                      {card.category}
                    </span>
                  )}
                  <CardTitle
                    className={card.id % 2 === 0 ? "text-blue-800" : ""}
                  >
                    {card.title}
                  </CardTitle>
                  {card.rating && (
                    <div className="flex tems-center gap-1">
                      <span className="text-yellow-500">⭐</span>
                      <span>{card.rating}/5.0</span>
                    </div>
                  )}
                </CardHeader>
                {card.description ? (
                  <CardBody
                    className={card.id % 2 === 0 ? "text-blue-700" : ""}
                  >
                    {card.description}
                  </CardBody>
                ) : (
                  <CardBody className="text-gray-400 italic">
                    No description for this destination
                  </CardBody>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
