"use client";

const Header = () => {
  return (
    <header className="header relative">
      <div className="absolute inset-0 flex h-screen">
        <div className="w-1/2 left-half flex justify-between">
          <div className="intro container p-10 mt-28 mr-32 text-right">
            <p className="text-2xl text-ff">Hi 👋 I&apos;m</p>
            <p className="text-7xl text-ff font-bold">
              RAGIB <br /> AL ASAD
            </p>
          </div>
        </div>
        <div className="w-1/2 right-half"></div>
      </div>
      <div className="container p-4 pt-16">
        {/* Additional content or components can go here */}
      </div>
    </header>
  );
};

export default Header;
