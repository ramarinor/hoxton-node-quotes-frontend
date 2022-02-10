type Props = {
  quote: Quote;
};

function Quote({ quote }: Props) {
  return (
    <div className="quote">
      <q>{quote.content}</q>
      <span> - {quote.author}</span>
    </div>
  );
}

export default Quote;
