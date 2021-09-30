import logo from "./logo.svg";
import "./App.css";
import Review from "./Reviews";
import { FaGithubSquare } from "react-icons/fa";
function App() {
  return (
    <main>
      <div className="container">
        <div className="title">
          <h2>Ours Reviews</h2>
          <div className="underline"></div>
        </div>
        <Review />
      </div>
    </main>
  );
}

export default App;
