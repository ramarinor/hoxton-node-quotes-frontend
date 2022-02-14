import { Link } from "react-router-dom";
import Quote from "./Quote";

type Props = {
  quotes: Quote[];
};
function QuotesList({ quotes }: Props) {
  return (
    <ul className="quotes__list">
      {quotes.map((quote) => (
        <li className="quotes__list-item" key={quote.id}>
          <Link to={`/quotes/${quote.id}`}>
            <Quote quote={quote} />
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default QuotesList;
