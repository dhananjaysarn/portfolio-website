import "./App.css";

function App() {
  return (
    <div className="container">
      <header>
        <h1>DHANANJAY RAJAN SARNAIK</h1>
        <p>Diploma Computer Engineering Student</p>
      </header>

      <section>
        <h2>About Me</h2>
        <p>
          Passionate Computer Engineering student interested in
          Web Development, Artificial Intelligence, Software Engineering,
          and Startup Building.
        </p>
      </section>

      <section>
        <h2>Skills</h2>

        <div className="skills">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React</span>
          <span>Python</span>
          <span>SQL</span>
          <span>Git</span>
          <span>GitHub</span>
        </div>
      </section>

      <section>
        <h2>Projects</h2>

        <div className="project">
          <h3>Student Management System</h3>
          <p>CRUD based student record management application.</p>
        </div>

        <div className="project">
          <h3>Weather App</h3>
          <p>Real-time weather forecasting using API integration.</p>
        </div>

        <div className="project">
          <h3>AI Chatbot</h3>
          <p>Intelligent chatbot using modern AI APIs.</p>
        </div>
      </section>

      <section>
        <h2>Contact</h2>
        <p>Email: yourmail@gmail.com</p>
        <p>GitHub: github.com/yourusername</p>
      </section>
    </div>
  );
}

export default App;