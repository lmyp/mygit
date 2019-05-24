// 会溢出
// 用的是字符串， 链表
/**
 * 
 * @param {LinkedList} l1 
 * @param {LinkedList} l2 
 */
function LinkedNode(val) {
    this.val = val;
    this.next = null;
}
var addTwoNumbers = function(l1, l2) {
    let a = [],
    b = [], newl1 = l1, newl2 = l2; /*引用赋值*/
    // 倒着来 , 链表是单向的,是做不到的
    // Array reverse();
    while (newl1) {
        a.push(newl1.val);
        newl1 = newl1.next;
    } 
    while (newl2) {
        b.push(newl2.val);
        newl2 = newl2.next;
    } 
    a.reverse();
    b.reverse();
    console.log(a, b);
    let ans = []; // 两位相加的结果
    let carry = 0; /*是否进位 */
    while(a.length || b.length) {
        let c = a.length ? a.shift() : 0;
        let d = b.length ? b.shift() : 0;
        let sum = c + d + carry;
        ans.push(sum % 10);
        if(sum >= 10) {
            carry = 1;
        }else {
            carry = 0;
        }
       
     
    }    
    carry && (ans.push(carry));
    ans.reverse();
    // return ans.join('');
    // 返回的应该也是一个结点, 头结点
    let ret = [];
    for( let i = 0, len =ans.length; i< len; i++) {
        ret[i] = new LinkedNode(ans[i]);
    }
    for (let i =0, len =ans.length; i < len - 1; i++) {
        ret [i].next = ret [i + 1]; //指针搞定
    }
    return ret[0];
}
let a1 = new LinkedNode(1), a2 = new LinkedNode(2), a3 = new LinkedNode(3);
    a1.next = a2;
    a2.next = a3;
    let b1 = new LinkedNode(4), b2 = new LinkedNode(5), b3 = new LinkedNode(6);
    b1.next = b2;
    b2.next = b3;
    let ret = addTwoNumbers(a1, b1);
    while(ret) {
        console.log(ret.val);
        ret = ret.next;
    }
// console.log(addTwoNumbers(a1, b1));
// let node = a1;
// while (node) {
//     console.log(node.val)
//     node = node.next;
// }