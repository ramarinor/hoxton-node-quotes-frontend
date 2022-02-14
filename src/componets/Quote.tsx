import { Link } from "react-router-dom";

type Props = {
  quote: Quote;
};

function Quote({ quote }: Props) {
  return (
    <div className="quote">
      <div className="quote__image">
        <img src={quote.image} alt="profile" />
      </div>
      <div className="quote__content">
        <q>{quote.content}</q>
        <p>
          - {quote.firstName} {quote.lastName} ({quote.age})
        </p>
      </div>
    </div>
  );
}

export default Quote;
