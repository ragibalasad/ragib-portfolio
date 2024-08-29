import React, { useState } from "react";
// import { Fira_Code } from "next/font/google";
// import { Cursor } from "react-simple-typewriter";

import "@fontsource/fira-code";

// const fira_code = Fira_Code({
//   subsets: ["latin"],
// });

const CodeWindow = ({ text }) => {
  return (
    <div className="relative flex w-full overflow-hidden bg-slate-800 shadow-xl sm:rounded-xl dark:bg-slate-800/70 dark:ring-1 dark:ring-inset dark:ring-white/10 dark:backdrop-blur-lg">
      <div className="relative flex w-full flex-col">
        <div className="flex-none border-b border-slate-500/30">
          <div className="flex h-8 items-center space-x-1.5 px-3">
            <div className="h-2.5 w-2.5 rounded-full bg-slate-600"></div>
            <div className="h-2.5 w-2.5 rounded-full bg-slate-600"></div>
            <div className="h-2.5 w-2.5 rounded-full bg-slate-600"></div>
          </div>
        </div>
        <div className="relative flex min-h-0 flex-auto flex-col">
          <div className="flex min-h-0 w-full flex-auto overflow-auto">
            <div className="relative w-full flex-auto">
              <pre className="flex min-h-full text-sm leading-6">
                <div
                  aria-hidden="true"
                  className="w-[50px] select-none text-wrap px-4 py-4 text-right text-slate-600 md:block"
                  style={{ fontFamily: "Fira Code, monospace" }}
                >
                  1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18
                </div>
                <code
                  className={`relative flex flex-col overflow-auto px-4 pb-4 pt-4 text-slate-300`}
                  style={{ fontFamily: "Fira Code, monospace" }}
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
                    <span className="text-green-300">
                      <span className="text-sky-400">{`[`}</span>
                      {`"HTML", "CSS", "JS", "React", "Coffee"`}
                      <span className="text-sky-400">{`]`}</span>
                    </span>
                    ;
                  </span>
                  <span>
                    <span className="text-pink-400">{`    this`}</span>.
                    <span className="text-slate-50">{`hobbies`}</span>
                    {` = `}
                    <span className="text-sky-400">{`(`}</span>
                    <span className="text-green-300">
                      <span className="text-yellow-200">{`
      [`}</span>
                      {`"Coding", "Debugging", "Pretending to Understand Regex"`}
                      <span className="text-yellow-200">{`] `}</span>
                    </span>
                    <span className="text-sky-400">{`
    )`}</span>
                    ;
                  </span>

                  <span className="text-pink-400">{`  }`}</span>

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
