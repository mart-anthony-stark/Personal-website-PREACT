import Home from "./pages/Home";
import Router from "preact-router";

export function App(props) {
  return (
    <>
      <Router>
        <Home path="/" />
      </Router>
    </>
  );
}
