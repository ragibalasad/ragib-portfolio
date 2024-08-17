const About = () => {
  return (
    <section className="about container relative mx-auto mt-20 md:w-4/5">
      {/* <div className="pink-bubble absolute left-10 top-6 -z-10 block h-48 w-48 rounded-full bg-gradient-to-br from-transparent to-pink-500 opacity-70 shadow-2xl shadow-pink-500 blur max-md:left-6"></div> */}
      <div className="placeHolderComponent h-auto pt-8">
        <div className="grid grid-cols-1 rounded-2xl lg:grid-cols-5 2xl:grid-cols-3">
          <div className="col-span-1 h-auto w-full rounded-2xl bg-gray-800/70 px-4 pt-4 shadow-xl backdrop-blur-xl lg:col-span-2 2xl:col-span-1 dark:ring-1 dark:ring-inset dark:ring-white/10">
            <img className="" src="images/ragib_potrait_md.png" alt="" />
          </div>
          <div className="col-span-1 p-12 lg:col-span-3 2xl:col-span-2 2xl:p-24">
            <p className="border-l-4 border-sky-400 pl-3 font-medium">
              About Me
            </p>
            <h1 className="py-6 text-4xl font-semibold">
              Precision Design,
              <br /> Peak Efficiency
            </h1>
            <p className="text-lg font-medium">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Similique ducimus, quam ea quos odit deleniti hic neque magni,
              doloremque omnis dolorum, odio id? Magni, praesentium quam ratione
              odit similique quibusdam? Saepe commodi quia sunt magnam dolores
              rem atque dolore? Minima architecto id placeat ex, ea consectetur
              magnam ullam laudantium, ut sapiente nemo nostrum tempore
              consequuntur assumenda saepe fuga? Odio, aut?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
