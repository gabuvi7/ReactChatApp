import { useState } from "react";
import axios from "axios";
import { PROJECT_ID, API_URL } from "../services/settings";
const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const authObject = {
      "Project-ID": PROJECT_ID,
      "User-Name": username,
      "User-Secret": password,
    };
    try {
      await axios.get(API_URL + "/chats", { headers: authObject });
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      window.location.reload();
    } catch (error) {
        setError('Your credentials are wrong :(')
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">React Chat App</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={handleUsername}
            className="input"
            placeholder="Username"
          />
          <input
            type="password"
            value={password}
            onChange={handlePassword}
            className="input"
            placeholder="Pasword"
          />
          <div align="center">
            <button className="button" type="submit">
              <span>Start Chatting! :D</span>
            </button>
          </div>
          <h2 className="error">{error}</h2>
          <h3>Test user 1: </h3> <h4 align="center">test1</h4>
          <h3>Test password 1:</h3><h4 align="center">test1</h4>
          <hr/>
          <h3>Test user 2: </h3> <h4 align="center">test2</h4>
          <h3>Test password 2:</h3><h4 align="center">test2</h4>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
