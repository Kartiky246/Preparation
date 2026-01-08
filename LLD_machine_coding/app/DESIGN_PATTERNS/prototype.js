

const obj1 = {
    name: "kartik",
    greet(){
        console.log(`Hi ${this.name}`)
    }
}

console.log(obj1);
console.log(obj1.__proto__.__proto__ === null) // true
// ( obj1 => Object => null)

const obj2 = Object.create(obj1);
console.log(obj2 == obj1); //false
console.log(obj2 === obj1); // false
console.log(obj2.__proto__ === obj1); // true

let s = 'a';
console.log(s.__proto__ === String.prototype) //true
console.log(s.__proto__.__proto__.__proto__ == null) // true
//( s => String => Object => null)


function Factory(){
    this.name = 'k'
    console.log(this.__proto__ === Factory.prototype) // true
}
const f = new Factory();
console.log(f.__proto__ === Factory.prototype); // true

//NOTE: instance.__proto === Class.prototpye
// instance is always this in class or function

class S{}
console.log(new S().__proto__ === S.prototype) // true
const i = new S();
console.log(i instanceof S) // true
