/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import ContactList from "./components/ContactList";
import ContactForm from "./components/ContactForm";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "./redux/operations";
import { deleteContact } from "./redux/operations";
import Filter from "./components/Filter";

const App = (props) => {
  const dispatch = useDispatch();
  const handleDelete = (id) => dispatch(deleteContact(id));
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <section
      css={css({
        height: "100%",
        width: "100%",
        backgroundColor: "#eee",
        backgroungSize: "cover",
      })}
    >
      <div>
        <ContactForm />
        <Filter />
        <ContactList onClick={handleDelete} />
      </div>
    </section>
  );
};

export default App;
