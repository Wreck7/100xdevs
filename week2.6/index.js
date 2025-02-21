// given an array, give me back a new array in which every value multiplied by 2

{
    let inputArray = [2, 3, 4, 5, 6, 7];
    const outputArray = () => inputArray.map(x => x * 2);
    let ans = outputArray()
    console.log(ans)
}
// given an array, give me back a new array in which every value is even
{
    let inputArray = [2,3,4,5,6,7,8];
    const outputArray = () => inputArray.filter(i => i % 2 === 0);
    let ans = outputArray()
    console.log(ans)
}