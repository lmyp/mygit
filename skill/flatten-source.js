function flatten(arr) {
    if (!Array.isArray(arr)) {
        return false;
    }
    // 递归思想 原生api 将多层数组的扁平化分为多个
    //  一维数组跟旁边的数字或者字符串 concat 小问题
    // 退出条件是不再有数组了 就退出递归

    const flattenArr = arr.reduce((prev, cur) => {
        return prev.concat(
            Array.isArray(cur) ? flatten(cur) : cur
        );
    }, [])
    return flattenArr;
}
const arr = [1,[2,[3]]];
console.log(flatten(arr));
