const x2 = {
  fname: "Alex",
  lname: "Mark",
  age: 25,
  gender: "M",
  intro: () => {
    console.log(this);
    console.log(
      ` ${this} hello my name is ${this.fname}${this.lname} and my age is ${this.age}`
    );
  },
};
x2.intro();
