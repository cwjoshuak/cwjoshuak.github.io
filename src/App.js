// import logo from "./logo.svg";
import "./App.css";
import { NavBar, SideBar } from "./components";
import TypeWriter from "typewriter-effect";
import ReactGA from "react-ga4";
import { IconBrandGithub } from "@tabler/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJs,
  faNode,
  faReact,
  faSwift,
} from "@fortawesome/free-brands-svg-icons";
function App() {
  ReactGA.initialize("G-SVZBYQTN6E");
  return (
    <>
      <NavBar />
      <SideBar />
      <div className="container mx-auto md:px-36 sm:px-20 px-10 ">
        <header
          className="container flex justify-center flex-col h-screen"
          // style={{ height: "90vh" }}
        >
          <div id="intro" className="xl:mx-40">
            <div className="text-xl block mb-2">Hey there, I am</div>
            <div className="text-6xl block mb-2"> Joshua Kuan.</div>
            <span className="pre-tag">and I like </span>
            <TypeWriter
              component="span"
              options={{
                strings: [
                  "learning new things.",
                  "cooking.",
                  "attending hackathons.",
                  "coding.",
                ],
                autoStart: true,
                loop: true,
                delay: 50,
              }}
            />

            <div className="text-lg block mt-2 leading-relaxed lg:mr-36">
              <hr className="mr-2 sm:mr-32" />
              <br />
              I'm a software engineer specializing in building and designing
              remarkable web applications. Currently seeking full-time
              employment with a Masters Degree in Software Engineering from UC
              Irvine.
            </div>
          </div>
        </header>

        <main className="container flex justify-center flex-col">
          <div
            className="container mx-auto flex justify-between flex-col gap-y-10 lg:flex-row xl:px-20"
            style={{ minHeight: "70vh" }}
            id="about"
          >
            <div className="flex flex-col justify-center">
              <div className="text-4xl block mb-10 font-bold">About Me</div>
              <p className="text-base leading-relaxed lg:mr-24">
                Hey there! My name is Joshua and I enjoy creating software that
                makes the lives of people around me easier. My interests are in
                Frontend and native iOS development. I've been interested in
                technology from a young age and found out that I had a knack for
                coding when I started learning in 2015. In my free time, I
                experiment with new technologies and work on turning ideas into
                functional projects.
              </p>
              <p className="mt-2">
                Here are a few technologies I have recently used:
              </p>
              <ul className="font-mono fa-ul">
                <li>
                  <FontAwesomeIcon
                    icon={faJs}
                    color="#f0db4f"
                    listItem
                    transform="down-2.9"
                  />{" "}
                  Javascript (ES6+)
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faReact}
                    color="#61dbfb"
                    listItem
                    transform="down-2.9"
                  />{" "}
                  React
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faNode}
                    color=" #44883e"
                    listItem
                    transform="down-2.9"
                  />{" "}
                  Node.js
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faSwift}
                    color="#d35840"
                    listItem
                    transform="down-2.9"
                  />{" "}
                  Swift
                </li>
              </ul>
            </div>
            {/* <div className="flex flex-col justify-center"> */}
            <img
              src="https://media.discordapp.net/attachments/772808958808817694/918921362603638864/B3E0DBA1-30E2-46DA-957B-8E63F52B48E8.jpg"
              className="flex self-center w-auto max-w-sm max-h-96 drop-shadow-lg rounded-lg align-middle"
              alt="this is me."
            />
            {/* </div> */}
          </div>
          <div
            className="container mx-auto flex justify-center flex-col"
            style={{ minHeight: "65vh" }}
            id="experience"
          >
            <span className="text-5xl block text-center font-bold mt-10">
              Experience
            </span>
            <span className="text-xl block mt-4 text-center mx-auto max-w-screen-sm bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 text-transparent bg-clip-text">
              This area is a Work in Progress!
            </span>
            <span className="text-xl block mx-auto text-center max-w-screen-lg">
              <br />I just graduated from University of California, Irvine with
              a{" "}
              <span className="font-semibold">
                Master of Science in Software Engineering
              </span>
              .
              <br />
              <br />
              Check out my{" "}
              <a
                href="/Kuan,Joshua-Resume.pdf"
                className="underline underline-offset-2 decoration-cerulean-600 hover:decoration-cerulean-400"
              >
                resume
              </a>{" "}
              for more info.
            </span>
          </div>
          <div
            id="projects"
            className="container mx-auto flex justify-center flex-col"
            style={{ height: "70vh" }}
          >
            <span className="text-5xl block text-center font-bold mt-10">
              Some Things I’ve Built
            </span>
            {/* <br /> */}

            <span className="text-xl block mt-4 text-center mx-auto max-w-screen-sm">
              <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 text-transparent bg-clip-text">
                This area is a Work in Progress!
              </span>
              <br />
              <br /> Check out my{" "}
              <a
                href="https://github.com/cwjoshuak"
                className="text-cerulean-600 hover:text-cerulean-400"
                // className="underline underline-offset-2 decoration-cerulean-600 hover:decoration-cerulean-400"
              >
                <IconBrandGithub className="inline mb-1" />
                GitHub
              </a>{" "}
              to see what I have made!
            </span>
          </div>
          <div
            id="contact"
            className="container mx-auto flex flex-col mb-10 items-stretch"
            style={{ height: "50vh" }}
          >
            <div className="text-5xl block text-center font-bold mt-10">
              Connect with Me
            </div>
            {/* <br /> */}

            <div className="text-xl block mt-4 text-center mx-auto max-w-screen-sm">
              I'm always open to new opportunities. Connect with me on LinkedIn,
              or send me an{" "}
              <a
                href="mailto:cwjoshuak@gmail.com?subject=Hello!"
                className="underline underline-offset-2 decoration-cerulean-600 hover:decoration-cerulean-400"
              >
                email
              </a>
              . I would love to collaborate on an application or idea!
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
