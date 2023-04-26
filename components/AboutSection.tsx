import React from "react";
import Image from "next/image";

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "React" },
  { skill: "Git" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "Bootstrap" },
  { skill: "WordPress" },
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-30">
        <h1 className="text-center font-bold text-4xl">
          As For Me
          <hr className="w-10 h-1 mx-auto mt-3 mb-10 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Gjorgjija and I am a{" "}
              <span className="font-bold text-teal-500">
                {"highly ambitious"}
              </span>
              ,
              <span className="font-bold text-teal-500">
                {" self-motivated"}
              </span>
              , and
              <span className="font-bold text-teal-500">{" driven"}</span> Front
              End Developer based in Sveti Nikole, Macedonia.
            </p>
            <br />
            <p>
              I graduated from Brainster Front End Web Development academy in
              Oct 2022.
            </p>
            <br />
            <p>
              I have a wide range of hobbies and passions that keep me busy.
              From watching football, reading car magazines to traveling. <br />
              I am always seeking new experiences and love to keep myself
              engaged and learning new things.
            </p>
            <br />
            <p>
              I believe in lifelong personal growth and have a passion for
              innovation and creativity in my career. I'm always eager to learn
              and open to new opportunities that allow me to expand my skills.
              With a positive attitude and commitment to excellence, I look
              forward to embracing the ever-changing challenges in the
              technology industry and achieving great things in my career.
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6 mx-4">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 px-4 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
