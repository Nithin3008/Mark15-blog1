let person={
    fname:'john',
    lname:'mike',
    name1:function()
    {
        console.log(`hi my name is ${this.fname} ${this.lname}`)
    }
}

let person1={
    fname:'king',
    lname:'arjun'
}

person.name1.call(person1)
let fn=person.name1.bind(person1)
fn()