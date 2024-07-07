const Skills = () => {
  const [text] = useTypewriter({
    words: ["Web Developer", "Web Designer", "Programmer"],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 60,
  });

  return (
    <section className="skills w-4/5 mx-auto">
      Test Text
    </section>
  );
};

export default Skills;
