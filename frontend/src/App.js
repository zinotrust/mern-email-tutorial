import axios from "axios";
import { useState } from "react";
// Test

function App() {
  const [email, setEmail] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();

    const data = {
      email,
    };

    const response = await axios.post(
      "http://localhost:5000/api/sendemail",
      data
    );
    console.log(response.data);
  };

  return (
    <div className="--flex-center --bg-primary --100vh">
      <div className="--width-500px --card --p --bg-light">
        <form className="--form-control" onSubmit={sendEmail}>
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" className="--btn --btn-primary">
            Send Email
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
