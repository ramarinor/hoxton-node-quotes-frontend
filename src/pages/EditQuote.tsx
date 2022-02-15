import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditQuote() {
  const navigate = useNavigate();
  const params = useParams();
  const [quote, setQuote] = useState<Quote | null>(null);
  useEffect(() => {
    fetch(`http://localhost:4000/quotes/${params.id}`)
      .then((resp) => resp.json())
      .then((quote) => setQuote(quote));
  }, []);
  function deleteQuote() {
    fetch(`http://localhost:4000/quotes/${params.id}`, {
      method: "DELETE"
    });
    navigate("/quotes");
    // .then((parsedResp) => console.log(parsedResp));
  }

  return (
    <form
      className="edit-quote-form"
      onSubmit={(event) => {
        event.preventDefault();
        const formEl = event.target as HTMLFormElement & {
          content: HTMLInputElement;
          firstName: HTMLInputElement;
          lastName: HTMLInputElement;
          age: HTMLInputElement;
          image: HTMLInputElement;
        };
        const editedQuote = {
          content: formEl.content.value,
          firstName: formEl.firstName.value,
          lastName: formEl.lastName.value,
          age: Number(formEl.age.value),
          image: formEl.image.value
        };
        fetch(`http://localhost:4000/quotes/${params.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(editedQuote)
        })
          .then((resp) => resp.json())
          .then((parsedResp) => {
            if (parsedResp.errors) {
              console.log(parsedResp.errors);
            } else {
              console.log("quote updated successfully");
              navigate(`/quotes/${quote?.id}`);
            }
          });
        formEl.reset();
      }}
    >
      <label>
        Content:
        <input
          type="text"
          name="content"
          required
          defaultValue={quote?.content}
        />
      </label>
      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          required
          defaultValue={quote?.firstName}
        />
      </label>
      <label>
        Last Name:
        <input
          type="text"
          name="lastName"
          required
          defaultValue={quote?.lastName}
        />
      </label>
      <label>
        Age:
        <input
          type="number"
          name="age"
          required
          min={0}
          defaultValue={quote?.age}
        />
      </label>
      <label>
        Image:
        <input type="url" name="image" required defaultValue={quote?.image} />
      </label>
      <button type="submit"> Save</button>
      <button onClick={deleteQuote} type="button">
        Delete Quote
      </button>
    </form>
  );
}

export default EditQuote;
