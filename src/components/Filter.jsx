/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useDispatch } from "react-redux";
import { filterContacts } from "../redux/contactsSlice";

function Filter() {
  const dispatch = useDispatch();
  const handleFilter = (event) => {
    const filterValue = event.target.value;
    if (event.target.name === "filter") dispatch(filterContacts(filterValue));
  };
  return (
    <div
      css={css({
        display: "flex",
        flexDirection: "column",
        width: 500,
        marginLeft: 150,
      })}
    >
      <p>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        onChange={handleFilter}
        css={css({
          width: 500,
          "&:focus": { outlineColor: "#cc8b86" },
        })}
      ></input>
    </div>
  );
}

export default Filter;
