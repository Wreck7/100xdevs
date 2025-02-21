// exercise 1
console.log("Hello Vishwa")
// console.log(vishwa)
// exercise 2
{
    // let firstName = 'vishwa';
    // let lastName = 'Govula';
    // console.log(`Hello and Good morning ${firstName} ${lastName}`);
    // // exercise 3 
    // let gender = "Male"
    // if (gender === "Female") {
    //     console.log('He is Vishwa')
    // }
    // else{
    //     console.log('she is sowmya')
    // }
}
// exercise 4 
{
    for (let index = 0; index <= 1000; index++) {
        // console.log(index)
    }
}
// exercise 5
{
    // let arr = [1,11,5,7,12,9];
    // for (let i = 0; i <= arr.length-1; i++) {
    //     if (arr[i] % 2 === 0) {
    //         console.log(arr[i])
    //     }
    // }
    // for (let i = 0; i <= arr.length-1; i++) {
    //     let great = 0;
    //     if (arr[i] >= great) {
    //         great = arr[i]
    //     }else{
    //         great = great;
    //     }
    //     return great;
    // }
    // console.log(great)
}

// exercise 6
{
    const obj = [
        {
            male: true,
            fName: "vishwa"
        },
        {
            male: false,
            fName: "somu"
        },
        {
            male: true,
            fName: "vishwa"
        },
        {
            male: false,
            fName: "sowmya"
        }
    ]
    for (let i = 0; i <= obj.length - 1; i++) {
        if (obj[i].male) {
            console.log(obj[i].fName)
        }
        else {
            console.log("false")
        }
    }
}
// exercise 7
{
    let array = [1, 2, 3, 4, 5];
    let reversedArray = [];
    for (let index = 0; index <= array.length - 1; index++) {
        reversedArray.unshift(array[index]);
    }
    console.log(reversedArray);
}
//exercise 8
{
    function sum(a, b, fnToCall) {
        let result = a + b
        fnToCall(result)
    }
    function display(data) {
        console.log(`the sum is ${data}`)
    }
    let ans = sum(7, 7, display)
    // display(ans);
}
// bounty 1
{
    // let allSum = 0;
    // for (let index = 0; index < 10000000000; index++) {
    //     allSum = allSum + index;
    // }
    // console.log(allSum)
}
// assignment 1
{
    //     let count = 30
    //     setInterval(() => {
    //         if (count > 0) {
    //             count--
    //             console.log(count)
    //         }
    //         else{
    //             clearInterval()
    //         }
    // }, 1000);
}
// assignment 2
{
    function a() {
        let hours = new Date().getHours();
        let minutes = new Date().getMinutes();
        let seconds = new Date().getSeconds();
        console.log(`${hours} : ${minutes} : ${seconds}`)
    }
    a();
}
// assignment 3
{
    // function sum() {
    //     let a = 0;
    //     for (let i = 0; i < 10000000000; i++) {
    //         a = a +1;
    //     }
    //     return a;
    // }
    // let beforeDate = new Date();
    // let beforeMilli = beforeDate.getTime()
    // sum()
    // let afterDate = new Date();
    // let afterMilli = afterDate.getTime()
    // console.log(afterMilli - beforeMilli)
}

/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/
{
    function isAnagram(str1, str2) {
        const normal = (str) => str.toLowerCase();
        return normal(str1).split('').sort().join('') === normal(str2).split('').sort().join('');
    }
    console.log(isAnagram('listen', 'silent'));
    console.log(isAnagram('listen', 'sileent'));
}

/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
        id: 1,
        timestamp: 1656076800000,
        price: 10,
        category: 'Food',
        itemName: 'Pizza',
    }
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/
{
    const transactions = [
        { category: 'Groceries', price: 50 },
        { category: 'Electronics', price: 200 },
        { category: 'Groceries', price: 30 },
        { category: 'Clothing', price: 100 },
        { category: 'Electronics', price: 150 }
    ];
    function calculateTotalSpentByCategory(transactions) {
        const categoryTotals = {};

        transactions.forEach(transaction => {
            const { category, price } = transaction;
            if (categoryTotals[category]) {
                categoryTotals[category] += price;
            } else {
                categoryTotals[category] = price;
            }
        });

        return Object.keys(categoryTotals).map(category => ({
            category,
            totalSpent: categoryTotals[category]
        }));
    }
    console.log(calculateTotalSpentByCategory(transactions));
}

/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/
{
    let numbers = [3, 7, 2, 9, 1]
    function findLargestElement(numbers) {
        let great = 0;
        for (let i = 0; i < numbers.length; i++) {
            if (great < numbers[i]) {
                great = numbers[i];
            }
            else {
                great = great;
            }
        }
        return great;
    }
    console.log(findLargestElement(numbers));
}


/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    let count = 0;
    const vowels = 'aeiouAEIOU';
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    return count;
}
console.log(countVowels("VIshwa"));


/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
    let lower = str.toLowerCase();
    let reversed = lower.split('').reverse().join('');
    return lower === reversed;
}
console.log(isPalindrome("raceCar"))
console.log(isPalindrome("vishwa"))

/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

// function calculateTime(n) {
//     let before = new Date().getTime()
//     let sum = 0;
//     for (let i = 0; i < n; i++) {
//         sum = sum + i;
//     }
//     let after = new Date().getTime()
//     let time = after - before/100;
//     return time
// }
// console.log(calculateTime(1000000000))


/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/
{
    class Calculator {
        constructor() {
            this.result = 0;
        }

        add(number) {
            this.result += number;
            return this;
        }

        subtract(number) {
            this.result -= number;
            return this;
        }

        multiply(number) {
            this.result *= number;
            return this;
        }

        divide(number) {
            if (number === 0) {
                throw new Error("Cannot divide by zero");
            }
            this.result /= number;
            return this;
        }

        clear() {
            this.result = 0;
            return this;
        }

        getResult() {
            return this.result;
        }

        calculate(expression) {
            try {
                // Remove all spaces from the expression
                expression = expression.replace(/\s+/g, '');

                // Validate the expression
                if (/[^0-9+\-*/().]/.test(expression)) {
                    throw new Error("Invalid characters in expression");
                }

                // Evaluate the expression
                this.result = eval(expression);
                return this.result;
            } catch (error) {
                throw new Error("Invalid expression");
            }
        }
    }

    // Example usage:
    const calc = new Calculator();
    console.log(calc.calculate("10 + 2 * (6 - (4 + 1) / 2) + 7"));
    console.log(calc.calculate("1 + 1"));
}

/*
Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos */

class Todo {
    constructor() {
        this.todos = [];
    }

    add(todo) {
        this.todos.push(todo);
        return this;
    }

    remove(indexOfTodo) {
        if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
            this.todos.splice(indexOfTodo, 1);
        } else {
            throw new Error("Invalid index");
        }
        return this;
    }

    update(index, updatedTodo) {
        if (index >= 0 && index < this.todos.length) {
            this.todos[index] = updatedTodo;
        } else {
            throw new Error("Invalid index");
        }
        return this;
    }

    getAll() {
        return this.todos;
    }

    get(indexOfTodo) {
        if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
            return this.todos[indexOfTodo];
        } else {
            throw new Error("Invalid index");
        }
    }

    clear() {
        this.todos = [];
        return this;
    }
}
const todoList = new Todo();
todoList.add("Buy groceries").add("Walk the dog").add("Read a book");
console.log(todoList.getAll()); 
todoList.update(1, "Walk the dog in the park");
console.log(todoList.get(1)); 
todoList.remove(0);
console.log(todoList.getAll()); 
todoList.clear();
console.log(todoList.getAll());

