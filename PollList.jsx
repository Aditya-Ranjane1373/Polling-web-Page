import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function PollList() {
  const [polls, setPolls] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8082/poll/Api/get/poll")
      .then((res) => {
        setPolls(res.data);
      });
  }, []);

  return (
    <div className="container">
      <h2>Available Polls</h2>

      {polls.map((poll) => (
        <div className="poll-card" key={poll.id}>
          <h3>{poll.title}</h3>

          <p>{poll.description}</p>

          <Link
            className="link-btn"
            to={`/poll/${poll.id}`}
          >
            Vote Now
          </Link>
        </div>
      ))}
    </div>
  );
}

export default PollList;