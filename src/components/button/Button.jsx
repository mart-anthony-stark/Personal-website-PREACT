import "./button.css";

function Button({ className="", id="",  }) {
  return (
    <>
      <button className={className} id={id}></button>
    </>
  );
}

export default Button;
