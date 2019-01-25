console.log('Задание 1');
function printWindowValues(){
	console.log(window);
}
printWindowValues();

console.log('Задание 2');
function expTen(num){
		let t = num;
	for(let i = 1; i < 10; i++){
		num *= t;
		}
	return num;
}
console.log(expTen(3));

console.log('Задание 3');
function getFuncRes(func, val){
	func = val;
	return func;
}
console.log(getFuncRes(console.log(), "Hello world!"));
