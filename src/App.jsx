import React from "react";
function App() {
const skills = [
"HTML5",
"CSS3",
"Tailwind CSS",
"Bootstrap",
"JavaScript",
"ReactJS",
"Django",
"MongoDB",
"Java",
"C",
"C++",
"DBMS",
"SQL",
"Git",
"GitHub",
];

const projects = [
{
title: "Portfolio Website",
desc: "Modern responsive portfolio built using ReactJS and Tailwind CSS.",
},
{
title: "Student Management System",
desc: "CRUD-based student record management application.",
},
{
title: "Weather App",
desc: "Real-time weather forecasting using API integration.",
},
{
title: "AI Chatbot",
desc: "AI-powered chatbot for intelligent conversations.",
},
{
title: "E-Commerce Website",
desc: "Online shopping platform with modern UI.",
},
];

return ( <div className="bg-slate-950 text-white min-h-screen">

```
  <nav className="sticky top-0 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 z-50">
    <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between">
      <h1 className="font-bold text-xl text-blue-400">
        Dhananjay.dev
      </h1>

      <div className="space-x-6 hidden md:flex">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  </nav>

  <section className="max-w-6xl mx-auto px-6 py-24 text-center">
    <h1 className="text-6xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
      DHANANJAY RAJAN SARNAIK
    </h1>

    <p className="text-xl mt-6 text-slate-300">
      Diploma Computer Engineering Student
    </p>

    <p className="mt-4 text-slate-400">
      Frontend Developer • React Developer • Django Enthusiast
    </p>

    <div className="mt-8 flex justify-center gap-4">
      <button className="bg-blue-600 px-6 py-3 rounded-xl hover:scale-105 transition">
        View Projects
      </button>

      <button className="border border-blue-500 px-6 py-3 rounded-xl hover:bg-blue-500 transition">
        Contact Me
      </button>
    </div>
  </section>

  <section id="about" className="max-w-6xl mx-auto px-6 py-16">
    <h2 className="text-4xl font-bold mb-8 text-blue-400">
      About Me
    </h2>

    <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800">
      <p className="text-slate-300 leading-8">
        I am a Diploma Computer Engineering student passionate about
        Web Development, Software Engineering, Databases, and Modern
        Technologies. I enjoy building real-world projects and
        continuously improving my technical skills.
      </p>
    </div>
  </section>

  <section id="skills" className="max-w-6xl mx-auto px-6 py-16">
    <h2 className="text-4xl font-bold mb-10 text-purple-400">
      Skills
    </h2>

    <div className="grid md:grid-cols-4 gap-4">
      {skills.map((skill) => (
        <div
          key={skill}
          className="bg-slate-900 border border-slate-800 p-4 rounded-xl text-center hover:-translate-y-2 transition"
        >
          {skill}
        </div>
      ))}
    </div>
  </section>

  <section id="projects" className="max-w-6xl mx-auto px-6 py-16">
    <h2 className="text-4xl font-bold mb-10 text-blue-400">
      Projects
    </h2>

    <div className="grid md:grid-cols-2 gap-6">
      {projects.map((project) => (
        <div
          key={project.title}
          className="bg-slate-900 border border-slate-800 rounded-3xl p-6 hover:-translate-y-2 transition"
        >
          <h3 className="text-2xl font-semibold">
            {project.title}
          </h3>

          <p className="text-slate-400 mt-3">
            {project.desc}
          </p>

          <div className="mt-5 flex gap-3">
            <button className="bg-blue-600 px-4 py-2 rounded-lg">
              GitHub
            </button>

            <button className="border border-blue-500 px-4 py-2 rounded-lg">
              Demo
            </button>
          </div>
        </div>
      ))}
    </div>
  </section>

  <section id="contact" className="max-w-6xl mx-auto px-6 py-16">
    <h2 className="text-4xl font-bold mb-8 text-purple-400">
      Contact
    </h2>

    <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl">
      <p>Email: dhananjaysarnaik12@gmail.com</p>
      <p className="mt-2">Phone: 8446017328</p>
      <p className="mt-2">
        GitHub: github.com/dhananjaysarn
      </p>
    </div>
  </section>

  <footer className="text-center py-8 border-t border-slate-800 text-slate-400">
    © 2026 Dhananjay Rajan Sarnaik | Built with ReactJS & Tailwind CSS
  </footer>
</div>


);
}

export default App;
