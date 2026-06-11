import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <div className="card">
        <h1>Online Polling System</h1>

        <Link className="link-btn" to="/create">
          Create Poll
        </Link>

        <Link className="link-btn" to="/polls">
          View Polls
        </Link>
      </div>
    </div>
  );
}

export default Home;