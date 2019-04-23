
// 会计  年终奖
/**绩效  S  5
 *    A 3
 *    B 2
 *    C 1
 *    D
 *  */
// 一个个策略函数
var perfomanceX = function(salary) {
    return salary * 6;
}
var perfomanceS = function(salary) {
    return salary * 5;
}
var perfomanceA = function(salary) {
    return salary * 4;
}
var perfomanceB = function(salary) {
    return salary * 3;
}
var perfomanceC = function(salary) {
    return salary * 2;
}
var calculateBounce = function(perfomanceLevel, salary) {
    if(perfomanceLevel === 'X') {
        return perfomanceX(salary);
     }
    if(perfomanceLevel === 'S') {
       return perfomanceS(salary);
    }
    if(perfomanceLevel === 'A') {
        return perfomanceA(salary);
    }
    if(perfomanceLevel === 'B') {
        return perfomanceB(salary);
    }
    if(perfomanceLevel === 'C') {
        return perfomanceC(salary);
    }

}
// 优化？ 分支太多,计算策略太简陋
// 会计发钱的，制定发钱策略的区分开来
console.log(calculateBounce('X', 20000));