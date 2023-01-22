/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Button({ label, type, onClick }) {
  return (
    <button
      type={type}
      onClick={onClick}
      css={css({
        width: 100,
        marginLeft: 5,
        marginBottom: 10,
        marginTop: 20,
        borderRadius: 5,
        backgroundColor: onClick ? "#cc8b86" : "#7d4f50",
        fontWeight: 600,
        "&:hover": { cursor: "pointer", backgroundColor: "#7d4f50" },
        "&:focus": onClick && { backgroundColor: "#7d4f50" },
      })}
    >
      {label}
    </button>
  );
}

export default Button;
