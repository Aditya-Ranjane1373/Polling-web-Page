import axios from "axios";
import { useState } from "react";

function CreatePoll() {
  const [data, setData] = useState({
    title: "",
    description: "",
    option1: "",
    option2: "",
  });

  const [loading, setLoading] = useState(false);

  const savePoll = () => {
    if (loading) return; // prevent double click

    setLoading(true);

    axios
      .post("http://localhost:8082/poll/Api/save/poll", data)
      .then(() => {
        alert("Poll Created Successfully");

        // clear form after success
        setData({
          title: "",
          description: "",
          option1: "",
          option2: "",
        });
      })
      .catch((err) => {
        console.log(err);
        alert("Error Creating Poll");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Create Poll</h2>

        <input
          type="text"
          placeholder="Title"
          value={data.title}
          onChange={(e) =>
            setData({ ...data, title: e.target.value })
          }
        />

        <input
          type="text"
          placeholder="Description"
          value={data.description}
          onChange={(e) =>
            setData({ ...data, description: e.target.value })
          }
        />

        <input
          type="text"
          placeholder="Option 1"
          value={data.option1}
          onChange={(e) =>
            setData({ ...data, option1: e.target.value })
          }
        />

        <input
          type="text"
          placeholder="Option 2"
          value={data.option2}
          onChange={(e) =>
            setData({ ...data, option2: e.target.value })
          }
        />

        <button onClick={savePoll} disabled={loading}>
          {loading ? "Creating..." : "Create Poll"}
        </button>
      </div>
    </div>
  );
}

export default CreatePoll;