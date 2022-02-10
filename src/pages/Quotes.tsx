import { useEffect, useState } from "react";
import QuotesList from "../componets/QuotesList";

function Quotes() {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  useEffect(() => {
    fetch("http://localhost:4000/quotes")
      .then((resp) => resp.json())
      .then((quotes) => setQuotes(quotes));
  }, []);
  return (
    <div className="quotes">
      <QuotesList quotes={quotes} />
    </div>
  );
}

export default Quotes;
