/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../redux/operations";
import { selectItems } from "../redux/selectors";
import Button from "./Button";

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectItems);
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const foundContant = contacts.find((contact) => contact.name === name);
    const alertMessage = name + "\xa0" + "is already in contacts.";
    if (foundContant) {
      return alert(alertMessage);
    } else {
      dispatch(addContact(e.target.elements.name.value));
    }
  };

  return (
    <div>
      <h1
        css={css({
          marginLeft: 150,
          marginTop: 0,
          paddingTop: 25,
        })}
      >
        Phonebook
      </h1>

      <form
        onSubmit={handleSubmit}
        css={css({
          display: "flex",
          flexDirection: "column",
          width: "500px",
          marginLeft: 150,
        })}
      >
        <span>Name</span>
        <input
          css={css({
            marginTop: 5,
          })}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <span>Number</span>
        <input
          css={css({
            marginTop: 5,
          })}
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <Button label={"Add contact"} type={"submit"} />
      </form>
    </div>
  );
};
export default ContactForm;
