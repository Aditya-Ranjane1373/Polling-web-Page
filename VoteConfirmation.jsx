import { Link } from "react-router-dom";

function VoteConfirmation() {
  return (
    <div className="container">
      <div className="card">

        <h2 className="success">
          Thank You For Voting!
        </h2>

        <Link className="link-btn" to="/polls">
          Back To Poll List
        </Link>

      </div>
    </div>
  );
}

export default VoteConfirmation;