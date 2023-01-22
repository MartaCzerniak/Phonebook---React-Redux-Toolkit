/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useSelector } from "react-redux";
import { selectFilter, selectItems } from "../redux/selectors";
import Button from "./Button";

function ContactList({ onClick }) {
  const filter = useSelector(selectFilter);
  const items = useSelector(selectItems);

  let contacts = items
    .filter((item) => item.name.toLowerCase().includes(filter.toLowerCase()))
    .map((item) => (
      <li key={item.id}>
        {item.name}:{item.phone}
        <Button type="button" label="Delete" onClick={() => onClick(item.id)} />
      </li>
    ));

  return (
    <ul
      css={css({
        fontWeight: 500,
        display: "flex",
        flexDirection: "column",
        width: "500px",
        height: "100vh",
        marginLeft: 150,
        marginTop: 30,
        marginBottom: -15,
        paddingBottom: 150,
      })}
    >
      {contacts}
    </ul>
  );
}

export default ContactList;
