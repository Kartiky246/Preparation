const bt = document.querySelector(".btn");
const counter = document.querySelector(".counter");

let btnPressed = 0;
let counterValue = 0;
bt.addEventListener('click',()=>{
	btnPressed++;
	bt.innerText = 'press ' + btnPressed
	inc()
})

function increaseCounter(){
	counterValue++;
	counter.innerText = counterValue;
}


const debounce = (fn,delay) => {
	let timer;
	return (...args) => {
		clearTimeout(timer);
		timer = setTimeout(()=>{
			fn.apply(this,args)
		},delay)
	}
}

const inc = debounce(increaseCounter, 1000)



// html and css - 



// <div class="container">
// 	<button class='btn'>
// 	Press
// 	</button>
// 	<span class="counter">0</span>
// </div>


// .container{
// 	display:flex;
// 	flex-direction:column;
// 	justify-content:center;
// 	align-items:center;
// 	gap:50px;
// }