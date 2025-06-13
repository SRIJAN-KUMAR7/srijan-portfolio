import React from "react";

import {
  SiReact,
  SiTailwindcss,
  SiJavascript,
  SiNodedotjs,
  SiMongodb,
  SiPython,
  SiHtml5,
  SiCss3,
} from "react-icons/si";

const topSkills = [
  { icon: <SiReact />, name: "React" },
  { icon: <SiTailwindcss />, name: "TailwindCSS" },
  { icon: <SiJavascript />, name: "JavaScript" },
  { icon: <SiNodedotjs />, name: "Node.js" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <SiHtml5 />, name: "HTML" },
  { icon: <SiCss3 />, name: "CSS" },
  { icon: <SiPython />, name: "Python" },
 {
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
        alt="C++"
        className="w-26 h-12 inline-block -ml-3.5"
      />
    ),
    name: "C++"
  },
];



const educationData = [
  {
    title: "B.Tech in Engineering & Computational Mechanics(ECM)",
    institution: "NIT Jamshedpur",
    year: "2023 - 2027",
    cgpa:"Current CGPA: 8.17",
    description:
      "Integrating core computer science and AI/ML techniques to solve real-world challenges at the intersection of software development and mechanical systems",
  },
  {title: "Intermediate-12th",
    institution: "GuruNanak Higher Secondary School Ranchi",
    year: "2020 - 2022",
    cgpa:"Percentage: 91.4%",
    description:
    "Completed 12th grade with a strong foundation in Mathematics, Physics, and Computer Science.",
  },
  {
    title: "Secondary Education -10th",
    institution: "GuruNanak Higher Secondary School Ranchi",
    year: "2019 - 2020",
    cgpa:"Percentage: 94.8%",
    description:
      "Completed 10th grade with a strong foundation in Mathematics, Physics, and Computer Science with Python.",},
];

const frontendSkills = ["React.js", "JavaScript", "TailwindCSS", "TypeScript","Redux","HTML","CSS"];
const backendSkills = ["Node.js","Next.js", "Express","MongoDB", "PostgreSQL"];
const tools=["C++","C","Python","OpenCV","Git/GitHub","Postman","VS-Code","MongoDB Atlas","Figma","Canva"]


export const About = () => {
  return (
    <section id="about" className="w-full py-16 px-4 bg-black text-white">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        {/* Title */}
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-6">
          About Me
        </h2>

          {/* Short intro */}
        <p className="text-gray-400 text-center-justify max-w-2xl mb-10 text-lg sm:text-xl">
          Pursuing a blend of Computer Science and AI/ML to tackle real-world
          challenges in both software development and mechanical systems.
        </p>
        
       <div className="w-full mt-1 mb-12">
  <h3 className="text-2xl font-bold text-center text-white mb-8">
    🔥 Top Skills:
  </h3>

  <div className="flex flex-wrap justify-center gap-10 animate-fade-in-up">
    {topSkills.map((skill, index) => (
      <div
        key={index}
        className="flex flex-col items-center hover:scale-110 transition-transform duration-300"
      >
        <div className="text-5xl text-blue-400">{skill.icon}
        </div>
        
        <span className="mt-2 text-white text-sm font-semibold-center -ml-3">
          {skill.name}
        </span>
   
      </div>
    ))}
  </div>
</div>

        {/* Skill Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-10">
          {/* Frontend */}
          <div className="p-6 bg-gray-900 rounded-xl border-white/10 border hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-xl font-bold mb-4 text-blue-400">Frontend:</h3>
            <div className="flex flex-wrap gap-2">
              {frontendSkills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-blue-500/10 text-white py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="p-6 bg-gray-900 rounded-xl border-white/10 border hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-xl font-bold mb-4 text-blue-400">Backend:</h3>
            <div className="flex flex-wrap gap-2">
              {backendSkills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-blue-500/10 text-white py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="p-6 bg-gray-900 rounded-xl border-white/10 border hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-xl font-bold mb-4 text-blue-400">Tools And Languages:</h3>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool, index) => (
                <span
                  key={index}
                  className="bg-blue-500/10 text-white py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>


        

        {/* Description */}
        <p className="text-gray-400 text-center max-w-2xl mb-10 text-lg sm:text-xl">
       Here’s a quick look at my academic background:
        </p>

        {/* Timeline Section */}
        <div className="flex flex-col gap-8 w-full max-w-3xl">
          {educationData.map((item, index) => (
            <div
              key={index}
              className="bg-gray-900 border-l-4 border-blue-500 p-6 rounded-lg shadow-lg hover:scale-[1.02] transition-transform duration-300"
            >
              <h3 className="text-xl font-bold text-blue-400">{item.title}</h3>
              <p className="text-sm text-gray-400 italic">
                {item.institution} | {item.year}
              </p>
              <p>{item.cgpa}</p>
              <p className="mt-2 text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
