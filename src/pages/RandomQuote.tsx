import { useEffect, useState } from "react";
import Quote from "../componets/Quote";

function RandomQuote() {
  const [quote, setQuote] = useState<Quote | null>(null);
  useEffect(() => {
    fetch("http://localhost:4000/random")
      .then((resp) => resp.json())
      .then((quote) => setQuote(quote));
  }, []);
  if (quote === null) return <p>Loading</p>;
  return <Quote quote={quote}></Quote>;
}

export default RandomQuote;
