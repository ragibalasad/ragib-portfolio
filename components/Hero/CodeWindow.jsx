"use client";

import React, { useState } from "react";
import { Fira_Code } from "next/font/google";
import { Cursor } from "react-simple-typewriter";

const fira_code = Fira_Code({
  subsets: ["latin"],
});

const CodeWindow = ({ text }) => {
  const [age, setAge] = useState(null);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    const calculatedAge = new Date().getFullYear() - 2004;
    setAge(calculatedAge);
    setClicked(true);
  };

  return (
    <div class="relative flex w-full overflow-hidden bg-gray-800 shadow-xl sm:rounded-xl dark:bg-gray-800/70 dark:ring-1 dark:ring-inset dark:ring-white/10 dark:backdrop-blur-lg">
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
                <code
                  class={`${fira_code.className} relative flex flex-col overflow-auto px-4 pb-4 pt-4 text-slate-300`}
                >
                  <span>
                    <span className="text-pink-400">{`class`}</span>
                    <span className="text-yellow-200">{` DeveloperProfile {`}</span>
                  </span>
                  <span>
                    <span className="text-pink-400">{`  constructor() {`}</span>
                  </span>
                  <span>
                    <span className="text-pink-400">{`    this`}</span>.
                    <span className="text-slate-50">{`name`}</span>
                    {` = `}
                    <span className="text-green-300">{`"Ragib Al Asad"`}</span>;
                  </span>
                  <span>
                    <span className="text-pink-400">{`    this`}</span>.
                    <span className="text-slate-50">{`role`}</span>
                    {` = `}
                    <span className="text-green-300">{`"Web Developer Extraordinaire"`}</span>
                    ;
                  </span>
                  <span>
                    <span className="text-pink-400">{`    this`}</span>.
                    <span className="text-slate-50">{`skills`}</span>
                    {` = `}
                    <span className="text-green-300">{`["HTML", "CSS", "JS", "React", "Coffee"]`}</span>
                    ;
                  </span>
                  <span>
                    <span className="text-pink-400">{`    this`}</span>.
                    <span className="text-slate-50">{`hobbies`}</span>
                    {` = `}
                    <span className="text-sky-400">{`(`}</span>
                    <span className="text-green-300">
                      {`
      ["Coding", "Debugging", "Pretending to Understand Regex"]`}
                    </span>
                    <span className="text-sky-400">{`
    )`}</span>
                    ;
                  </span>

                  <span> </span>

                  <span>
                    <span className="text-sky-400">{`  introduce`}</span>
                    <span className="text-pink-400">{`() {`}</span>
                  </span>
                  <span>
                    <span className="text-yellow-200">{`    console`}</span>.
                    <span className="text-sky-400">{`log(`}</span>
                    <span className="text-green-300">{`"Hello, World!"`}</span>
                    <span className="text-sky-400">{`)`}</span>;
                  </span>
                  <span>
                    <span className="text-yellow-200">{`    console`}</span>.
                    <span className="text-sky-400">{`log(`}</span>
                    <span className="text-green-300">
                      {`
      \`I'm `}
                      <span className="text-yellow-200">{`\${`}</span>
                      <span className="text-pink-400">{`this`}</span>.
                      <span className="text-slate-50">{`name`}</span>
                      <span className="text-yellow-200">{`}`}</span>
                      {`, your friendly `}
                      <span className="text-yellow-200">{`\${`}</span>
                      <span className="text-pink-400">{`this`}</span>.
                      <span className="text-slate-50">{`role`}</span>
                      <span className="text-yellow-200">{`}`}</span>
                      {`.\``}
                    </span>
                    <span className="text-sky-400">{`
    )`}</span>
                    ;
                  </span>
                  <span className="text-pink-400">{`  }`}</span>
                  <span className="text-yellow-200">{`}`}</span>
                  <span> </span>
                  <span>
                    <span className="text-pink-400">{`new `}</span>
                    <span className="text-yellow-200">{`DeveloperProfile()`}</span>
                    .<span className="text-sky-400">{`introduce`}</span>
                    <span className="text-yellow-200">{`()`}</span>;
                  </span>
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
