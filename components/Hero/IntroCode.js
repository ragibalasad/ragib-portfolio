class DeveloperProfile {
  constructor() {
    this.name = "Ragib Al Asad";
    this.role = "Web Developer Extraordinaire";
    this.skills = ["HTML", "CSS", "JavaScript", "React", "Coffee"];
    this.hobbies = ["Coding", "Debugging", "Pretending to Understand Regex"];
  }

  introduce() {
    console.log("Hello, World!");
    console.log(`I'm ${this.name}, your friendly ${this.role}.`);
  }
}
