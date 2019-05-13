var Arr = [3, 5, 6, 7, 9, 12, 15];
function binary(find, arr, low, high) {
    if (low <= high) {
        if (arr[low] == find) {
            return low;
        }
        if (arr[high] == find) {
            return high;
        }
        var mid = Math.ceil((high + low) / 2);
        if (arr[mid] == find) {
            return mid;
        } else if (arr[mid] > find) {
            return binary(find, arr, low, mid - 1);
        } else {
            return binary(find, arr, mid + 1, high);
        }
    }
    return -1;
}
console.log(binary(5, Arr, 0, Arr.length - 1));