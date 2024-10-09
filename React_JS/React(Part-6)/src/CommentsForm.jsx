import { useState } from "react";

export default function CommentsForm() {
  let [formData, setFormData] = useState({
    fullName: "",
    comment: "",
    rating: 1,
  });

  function handleInputChange(event) {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
    setFormData({ fullName: "", comment: "", rating: 1 });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h4>Give a comment!</h4>
      <label>
        Name:
        <input
          type="text"
          placeholder="enter your full name"
          value={formData.fullName}
          onChange={handleInputChange}
          name="fullName"
        />
      </label>
      <br />
      <br />
      <label>
        Comment:
        <textarea
          type="text"
          placeholder="enter your comment"
          value={formData.comment}
          onChange={handleInputChange}
          name="comment"
        ></textarea>
      </label>
      <br />
      <br />
      <label>
        Rating:
        <input
          type="number"
          placeholder="rating"
          value={formData.rating}
          onChange={handleInputChange}
          name="rating"
          min={1}
          max={5}
        />
      </label>
      <button>Add a comment</button>
    </form>
  );
}
