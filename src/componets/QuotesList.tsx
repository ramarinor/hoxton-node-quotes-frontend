import Quote from "./Quote";

type Props = {
  quotes: Quote[];
};
function QuotesList({ quotes }: Props) {
  return (
    <ul className="quotes__list">
      {quotes.map((quote) => (
        <li className="quotes__list-item">
          <Quote quote={quote} />
        </li>
      ))}
    </ul>
  );
}

export default QuotesList;
