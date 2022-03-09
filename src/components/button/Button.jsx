import "./button.css";

const Button = ({ children, ...rest }) => {
  let fontSize;
  switch (rest.size) {
    case "sm":
      fontSize = "14px";
      break;
    case "md":
      fontSize = "18px";
      break;
    case "lg":
      fontSize = "24px";
      break;
    default:
      fontSize = "16px";
  }
  rest.style = {
    ...rest.style,
    fontSize,
  };
  return (
    <>
      <button
        onClick={rest.onClick}
        className={rest.className}
        id={rest.id}
        style={rest.style}
        type={rest.type}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
