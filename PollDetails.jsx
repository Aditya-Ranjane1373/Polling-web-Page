import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function PollDetails() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [poll, setPoll] = useState({});

  const [selected, setSelected] = useState(1);

  useEffect(() => {
    axios
      .get(`http://localhost:8082/poll/Api/getByid/${id}`)
      .then((res) => {
        setPoll(res.data);
      });
  }, [id]);

  const vote = () => {
    axios
      .post(
        `http://localhost:8082/poll/Api/vote/${id}?option=${selected}`
      )
      .then(() => {
        navigate("/success");
      });
  };

  return (
    <div className="container">
      <div className="card">

        <h2>{poll.title}</h2>

        <p>{poll.description}</p>

        <div className="radio-group">
          <input
            type="radio"
            checked={selected === 1}
            onChange={() => setSelected(1)}
          />

          <label>{poll.option1}</label>
        </div>

        <div className="radio-group">
          <input
            type="radio"
            checked={selected === 2}
            onChange={() => setSelected(2)}
          />

          <label>{poll.option2}</label>
        </div>

        <button onClick={vote}>
          Submit Vote
        </button>

      </div>
    </div>
  );
}

export default PollDetails;