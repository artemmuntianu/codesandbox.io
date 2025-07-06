import { useState } from "react";
import "./styles.css";

export default function EditProfile() {
  const [firstName, setFirstName] = useState("Jane");
  const [lastName, setLastName] = useState("Jacobs");
  const [isEditing, setIsEditing] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsEditing(!isEditing);
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        First name:&nbsp;
        {isEditing ? (
          <input value={firstName} onChange={handleFirstNameChange} />
        ) : (
          <b>{firstName}</b>
        )}
      </label>
      <label>
        Last name:&nbsp;
        {isEditing ? (
          <input value={lastName} onChange={handleLastNameChange} />
        ) : (
          <b>{lastName}</b>
        )}
      </label>
      <button type="submit" onClick={handleFormSubmit}>
        {isEditing ? "Save Profile" : "Edit Profile"}
      </button>
      <p>
        <i>
          Hello, {firstName} {lastName}!
        </i>
      </p>
    </form>
  );
}
