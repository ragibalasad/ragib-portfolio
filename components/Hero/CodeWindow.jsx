"use client";

import React, { useState } from "react";
import { Cursor } from "react-simple-typewriter";

const CodeWindow = ({ text }) => {
  const [age, setAge] = useState(null);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    const calculatedAge = new Date().getFullYear() - 2004;
    setAge(calculatedAge);
    setClicked(true);
  };

  return (
    <div class="relative flex w-full overflow-hidden rounded-xl bg-gray-800 shadow-xl dark:bg-gray-800/70 dark:ring-1 dark:ring-inset dark:ring-white/10 dark:backdrop-blur-lg">
      <div class="relative flex w-full flex-col">
        <div class="flex-none border-b border-slate-500/30">
          <div class="flex h-8 items-center space-x-1.5 px-3">
            <div class="h-2.5 w-2.5 rounded-full bg-slate-600"></div>
            <div class="h-2.5 w-2.5 rounded-full bg-slate-600"></div>
            <div class="h-2.5 w-2.5 rounded-full bg-slate-600"></div>
          </div>
        </div>
        <div class="relative flex min-h-0 flex-auto flex-col">
          <div class="flex min-h-0 w-full flex-auto overflow-auto">
            <div class="relative w-full flex-auto">
              <pre class="flex min-h-full text-sm leading-6">
                <div
                  aria-hidden="true"
                  class="w-[50px] select-none text-wrap px-4 py-4 text-right text-slate-600 md:block"
                >
                  1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18
                </div>
                <code class="relative block flex-auto overflow-auto px-4 pb-4 pt-4 text-slate-50">
                  <pre>{`class DeveloperProfile {`}</pre>
                  <pre>{`  constructor() {`}</pre>
                  <pre>{`    this.name = "Ragib Al Asad";`}</pre>
                  <pre>{`    this.role = "Web Developer Extraordinaire";`}</pre>
                  <pre>
                    {`    this.skills = ["HTML", "CSS", "JS", "React", "Coffee"];`}
                  </pre>
                  <pre>
                    {`    this.hobbies = (
      ["Coding", "Debugging", "Pretending to Understand Regex"]
    );`}
                  </pre>
                  <pre> </pre>
                  <pre>{"  introduce() {"}</pre>
                  <pre>{`    console.log("Hello, World!");`}</pre>
                  <pre>{`    console.log(
      \`I'm \${this.name}, your friendly \${this.role}.\`
    );`}</pre>
                  <pre>{`  }`}</pre>
                  <pre>{`}`}</pre>
                  <pre> </pre>
                  <pre>{`new DeveloperProfile().introduce();`}</pre>
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeWindow;
