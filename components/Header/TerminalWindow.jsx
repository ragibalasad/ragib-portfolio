"use client";

import React, { useState } from "react";
import { Cursor } from "react-simple-typewriter";

const TerminalWindow = ({ text }) => {
  const [age, setAge] = useState(null);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    const calculatedAge = new Date().getFullYear() - 2004;
    setAge(calculatedAge);
    setClicked(true);
  };

  return (
    <div className="terminal-win h-max shadow-md shadow-slate-900">
      <div className="terminal-head flex gap-1 p-2 shadow-sm">
        <div className="close"></div>
        <div className="minimize"></div>
        <div className="maximize"></div>
      </div>
      <div className="terminal-body px-6 py-4 text-sm text-gray-200">
        <pre className="text-purple-400">
          <span className="text-gray-400">{`1`}</span>
          {`  class `}
          <span className="text-orange-300">Person</span>
          <span className="text-orange-300">{` {`}</span>
        </pre>
        <pre className="text-purple-400">
          <span className="text-gray-400">{`2`}</span>
          {`    constructor() {`}
        </pre>
        <pre>
          <span className="text-gray-400">{`3`}</span>
          <span className="text-orange-300">{`      this`}</span>.
          <span className="text-red-400">{`name`}</span>
          <span className="text-sky-400">{` = `}</span>
          <span className="text-green-400">{`"`}</span>
          <span className="text-green-400">Ragib Al Asad</span>
          <span className="text-green-400">{`"`}</span>;
        </pre>
        <pre>
          <span className="text-gray-400">{`4`}</span>
          <span className="text-orange-300">{`      this`}</span>.
          <span className="text-red-400">{`traits`}</span>
          <span className="text-sky-400">{` = [`}</span>
          <span className="text-green-400">{text}</span>
          <Cursor cursorStyle="█" />
          <span className="text-sky-400">{`]`}</span>;
        </pre>
        <>
          {!clicked ? (
            <pre onClick={handleClick} style={{ cursor: "pointer" }}>
              <span className="text-gray-400">{`5`}</span>
              <span className="text-orange-300">{`      this`}</span>.
              <span className="text-red-400">{`age`}</span>
              <span className="text-sky-400">{` =`}</span>
              <span className="text-purple-400">{` new`}</span>
              <span className="text-orange-300">{` Date`}</span>
              <span className="text-sky-400">{`()`}</span>.
              <span className="text-orange-300">{`getFullYear`}</span>
              <span className="text-sky-400">{`() -`}</span>
              <span className="text-orange-300">{` 2004`}</span>;
            </pre>
          ) : (
            <pre onClick={handleClick} style={{ cursor: "pointer" }}>
              <span className="text-gray-400">{`5`}</span>
              <span className="text-orange-300">{`      this`}</span>.
              <span className="text-red-400">{`age`}</span>
              <span className="text-sky-400">{` = `}</span>
              <span className="text-orange-300">{age}</span>;
            </pre>
          )}
        </>
        <pre>
          <span className="text-gray-400">{`6`}</span>
          <span className="text-purple-400">{`    }`}</span>
        </pre>
        <pre>
          <span className="text-gray-400">{`7`}</span>
          <span className="text-orange-300">{`  }`}</span>
        </pre>
      </div>
    </div>
  );
};

export default TerminalWindow;
