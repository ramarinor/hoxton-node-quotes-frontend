import { Link, useNavigate } from "react-router-dom";

type Props = {
  quote: Quote;
};
function Quote({ quote }: Props) {
  const navigate = useNavigate();

  return (
    <div className="quote">
      <div className="quote__image">
        <img src={quote.image} alt="profile" />
      </div>

      <div className="quote__content">
        <Link to={`/quotes/${quote.id}`}>
          <q>{quote.content}</q>
          <p>
            - {quote.firstName} {quote.lastName} ({quote.age})
          </p>
        </Link>
      </div>

      <div className="edit">
        <button
          onClick={(event) => {
            event.stopPropagation();
            navigate(`/quotes/${quote.id}/edit`);
          }}
        >
          Edit
        </button>
      </div>
    </div>
  );
}

export default Quote;
