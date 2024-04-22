export default {
    price: 0,
    myVar2: {},
    randomPrice() {
        this.price = Math.floor(Math.random() * 100);
			return this.price;
    },
    async myFun2() {
        //	use async-await or promises
await storeValue('price', 'price')    }
}
