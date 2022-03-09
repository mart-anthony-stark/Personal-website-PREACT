import "./button.css";

function Button({ className = "", id = "", children, onClick }) {
  return (
    <>
      <button onClick={onClick} className={className} id={id}>
        {children}
      </button>
    </>
  );
}

export default Button;
