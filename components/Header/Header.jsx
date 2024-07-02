"use client";

const Header = () => {
  return (
    <header className="header">
      <div className="absolute -z-50 flex w-full h-screen">
        <div className="w-1/2 left-half bg-highlight"></div>
        <div className="w-1/2 right-half"></div>
      </div>
      <div className="container p-4 pt-16"></div>
    </header>
  );
};

export default Header;
