import { useState } from "react";

export default function Form() {
  //   let [fullName, setFullName] = useState("");
  //   let [userName, setUserName] = useState("");
  let [formData, setFormData] = useState({
    fullName: "",
    userName: "",
    password: "",
  });

  //   function handleChange(event) {
  //     setFullName(event.target.value);
  //   }

  //   function handleUserNameChange(event) {
  //     setUserName(event.target.value);
  //   }

  function handleInputChange(event) {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
    setFormData({ fullName: "", userName: "", password: "" });
  }

  return (
    <form onSubmit={handleSubmit}>
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
        Username:
        <input
          type="text"
          placeholder="enter your username"
          value={formData.userName}
          onChange={handleInputChange}
          name="userName"
        />
      </label>
      <br />
      <br />
      <label>
        Password:
        <input
          type="password"
          value={formData.password}
          onChange={handleInputChange}
          name="password"
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
