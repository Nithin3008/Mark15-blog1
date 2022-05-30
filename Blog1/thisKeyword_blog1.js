const x1 = {
  fname: "Mark",
  lname: "jake",
  age: 25,
  gender: "M",
  intro() {
    console.log(
      `hello my name is ${this.fname}${this.lname} and my age is ${this.age}`
    );
  },
};

x1.intro();
