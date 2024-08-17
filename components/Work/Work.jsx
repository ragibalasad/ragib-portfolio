const Work = () => {
  return (
    <section className="work relative mt-20 bg-slate-800 2xl:mt-48">
      <div className="placeHolderComponent container mx-auto h-auto py-20 md:w-4/5">
        <div className="mb-8 flex items-end">
          <h1 className="text-4xl font-semibold">Projects</h1>
          <ul className="ml-auto flex gap-3 text-sm font-medium">
            <li className="rounded-lg bg-slate-900/70 px-4 py-2 ring-1 ring-white/10">
              All
            </li>
            <li className="rounded-lg bg-slate-700/70 px-4 py-2">Frontend</li>
            <li className="rounded-lg bg-slate-700/70 px-4 py-2">Backend</li>
            <li className="rounded-lg bg-slate-700/70 px-4 py-2">Others</li>
          </ul>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-6">
          <div className="rounded-2xl bg-slate-900/70 p-12 ring-1 ring-inset ring-white/10">
            <h1>Project 1</h1>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
            ipsum, excepturi blanditiis laudantium nesciunt ipsam? Suscipit
            assumenda totam, ipsum adipisci dolores repellat nihil veniam porro
            mollitia quisquam asperiores obcaecati culpa. At, a incidunt
            voluptate qui quidem aperiam amet adipisci sequi dignissimos id
            cupiditate sit dolorum! Nulla, totam provident exercitationem optio
            voluptatem beatae omnis, ex est a atque maxime delectus impedit!
          </div>
          <div className="rounded-2xl p-12 dark:bg-slate-900/70 dark:ring-1 dark:ring-inset dark:ring-white/10">
            <h1>Project 1</h1>
          </div>
          <div className="rounded-2xl p-12 dark:bg-slate-900/70 dark:ring-1 dark:ring-inset dark:ring-white/10">
            <h1>Project 1</h1>
          </div>
          <div className="rounded-2xl p-12 dark:bg-slate-900/70 dark:ring-1 dark:ring-inset dark:ring-white/10">
            <h1>Project 1</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
