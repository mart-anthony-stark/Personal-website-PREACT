import "./button.css";

function Button({ className = "", id = "", children, onClick, style = {} }) {
  return (
    <>
      <button onClick={onClick} className={className} id={id} style={style}>
        {children}
      </button>
    </>
  );
}

export default Button;
