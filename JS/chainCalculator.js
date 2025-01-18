
class Calc{
    constructor(initialValue =0){
        this._value = initialValue
    }

    add(a){
        this._value+=a;
        return this;
    }

    sub(a){
        this._value-=a;
        return this;
    }

    mujltiply(a){
        this._value*=a;
        return this;
    }

    get total(){
        return this._value;
    }
}

const calc = new Calc(0);
console.log(calc.total);
const value = calc.add(1).mujltiply(5).sub(4).add(10).total;
console.log(value); 