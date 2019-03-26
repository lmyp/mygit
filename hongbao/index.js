function hongbao(total, num) {
    const arr = [];
    let restAmount = total; //余额初始为总钱
    let restNum = num;

    for (let i = 0; i < num -1; i++) {
        //还余一个人不发
        //平均值的2倍
        let amount = parseFloat(Math.random()*(restAmount/restNum*2));
        restAmount -= amount;
        restNum--;
        arr.push(amount);
    }
    //最后一个人restAmount
    arr.push();
    return arr;
}
console.log(hongbao(20, 44));