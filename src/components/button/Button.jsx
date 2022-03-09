import "./button.css";

function Button({ children, ...rest }) {
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
}

export default Button;
