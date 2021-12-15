import React from "react";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons";

const SideBar = () => {
  return (
    <nav className="fixed bottom-0 left-5 h-1/4 w-10 flex justify-center invisible md:visible">
      <div className="flex flex-col items-center flex-grow gap-2">
        <a
          href="https://github.com/cwjoshuak"
          className="p-2 hover:text-cerulean-400 transition transform hover:-translate-y-px"
        >
          <IconBrandGithub />
        </a>
        <a
          href="https://linkedin.com/in/cwjoshuak"
          className="p-2 hover:text-cerulean-400 transition transform hover:-translate-y-px"
        >
          <IconBrandLinkedin />
        </a>
        <span className="w-px bg-white h-full mx-auto mt-2" />
      </div>
    </nav>
  );
};

export default SideBar;
