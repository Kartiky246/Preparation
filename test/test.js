

const click = () =>{
    console.log('click');
}

const obj = {
    value: 42,
    logValue: function() {
      console.log(this.value,);
    }
  };
  

  function debounce(func, timeout = 300){
    let timer;
    return function(...args){
      clearTimeout(timer);
      timer = setTimeout(func.bind(this, ...args), timeout);
    };
  }

const myClick = debounce(obj.logValue);
obj.logValue();

myClick();
