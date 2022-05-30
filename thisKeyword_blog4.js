const x2 = {
  fname: "Alex",
  lname: "Mark",
  age: 25,
  gender: "M",
  intro() {
    console.log(`hello my name is ${this.fname}${this.lname}`);
    let birthdate = function () {
      console.log(this);
      console.log(`my bithday is ${2022 - this.age}`);
    };
    birthdate();
  },
};
x2.intro();
