// assignment 1
function square(n) {
    return n * n;
}
function cube(n) {
    return n * n * n;
}

function someFunction(num, fn) {
    let fn1 = fn(num)
    let fn2 = fn(num)
    return fn1 + fn2;
}
let ans = someFunction(2, cube)
console.log(ans)
ans = someFunction(2, square)
console.log(ans)

// assignment 2
function loopToN(n) {
    let result = 0;
    for (let i = 0; i <= n; i++) {
        result = result + i
    }
    console.log(result);
}
function initiate() {
    (loopToN(10));
}
console.log("before")
// setTimeout(initiate, 1000);
console.log("after")

// assignment 3
{
    // function createdP(count) {
    //     return new Promise ((resolve) => {
    //         setTimeout(() => {
    //             resolve()
    //         }, count);
    //     })
    // }
    // let p1 = createdP(1000);
    // p1.then((th) => {
    //     console.log("thened message"); // This will log "resolved" after 1 second
    // });
}
// assignment 4 
{
    // function firstA(msg) {
    //     return new Promise ((resolve) => {
    //         setTimeout(() => {
    //             resolve(msg)
    //         }, 1000);
    //     })
    // }
    // async function mainA() {
    //     const a1 = await firstA("async resolved")
    //     console.log(a1)
    // }
    // mainA()
}

// assignments 5
var fs = require('fs');
const { resolve } = require('path');
{
    // function read() {
    //     fs.readFile('Demo.txt', 'utf8', (err, data) => {
    //         // Display the file content
    //         console.log(data);
    //     });
    // }
    // read();
    // console.log("after")
}

// assignment 6
{
    // function someTask1() {
    //     console.log("task1")
    // }
    // function someTask2() {
    //     console.log("task2")
    // }
    // setTimeout((data) => {
    //     someTask2(data)
    // }, 1000);
    // someTask1()
}


// easy 1
{
    //Create a counter in JavaScript
    // We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript It should go up as time goes by in intervals of 1 second

    // function counterWithInterval(seconds) {
    //     let countOfInterval = 0;
    //         let intervalId = setInterval(() => {
    //             countOfInterval = countOfInterval + 1;
    //             console.log(countOfInterval)
    //             if (countOfInterval >= seconds) {
    //                 clearInterval(intervalId);
    //             }
    //         }, 1000);
    // }
    // counterWithInterval(10);
}

// easy 2
/* Counter without setInterval
Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

(Hint: setTimeout) */
{
    // function counterWithTimeout(seconds) {
    //     let counterOfTimeout = 0;

    //     function logCount() {
    //         counterOfTimeout++;
    //         console.log(counterOfTimeout);
    //         if (counterOfTimeout < seconds) {
    //             setTimeout(logCount, 1000);
    //         }
    //     }
    //     setTimeout(logCount, 1000);
    // }

    // counterWithTimeout(10);
}


// easy3
/* Reading the contents of a file
Write code to read contents of a file and print it to the console. You can use the fs library to as a black box, the goal is to understand async tasks. Try to do an expensive operation below the file read and see how it affects the output. Make the expensive operation more and more expensive and see how it affects the output.
*/
{
    // fs.readFile("Demo.txt", "utf-8", (err, data) =>{
    //     console.log(data)
    // });
    // let zero = 0;
    // for (let i = 0; i < 10000000000; i++) {
    //     zero = zero + 1;
    // }
}


// easy4
/* Write to a file
Using the fs library again, try to write to the contents of a file. You can use the fs library to as a black box, the goal is to understand async tasks.
*/
{
    // fs.writeFile("Demo.txt", "hello everyone I'm karthik", function(err){})
    // let zero = 0;
    // for (let i = 0; i < 10000000000; i++) {
    //         zero = zero + 1;
    // }
}

// medium 1
/* File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was

hello     world    my    name   is       raman
After the program runs, the output should be

hello world my name is raman*/
{
    // fs.readFile("raman.txt", "utf-8", function (err, data) {
    //     let trimmedString = data.trim().split(/\s+/).join(' ');
    //     fs.writeFile("raman.txt", trimmedString, function(err){})
    // })
}



// medium 2
// create a clock which displays HH:MM:SS AM/PM
{
    // function formatTimeUnit(unit) {
    //     return unit < 10 ? '0' + unit : unit;
    // }

    // function getAmPm(hours) {
    //     return hours >= 12 ? 'PM' : 'AM';
    // }

    // function formatHours(hours) {
    //     return hours % 12 || 12; // Convert 0 to 12 for 12 AM/PM
    // }

    // function displayClock() {
    //     const now = new Date();
    //     const hours = formatHours(now.getHours());
    //     const minutes = formatTimeUnit(now.getMinutes());
    //     const seconds = formatTimeUnit(now.getSeconds());
    //     const amPm = getAmPm(now.getHours());

    //     console.log(`${hours}:${minutes}:${seconds} ${amPm}`);
    // }

    // function startClock() {
    //     // displayClock(); // Display immediately
    //     setInterval(displayClock, 1000); // Update every second
    // }

    // startClock()
}


// hard 1
/*
Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/
{
    // function wait(n) {
    //     return new Promise(resolve => {
    //         setTimeout(() => {
    //             resolve();
    //         }, n * 1000);
    //     })
    // }
    // let w1 = wait(5)
    // w1.then(() => console.log("resloved"));
}

// hard 2
/*
 Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
  During this time the thread should not be able to do anything else.
  the function should return a promise just like before
 */
{
    // function busyWait(ms) {
    //     return new Promise((resolve) => {
    //         const start = Date.now();
    //         while (Date.now() - start < ms) {
    //             // Busy-wait loop
    //         }
    //         resolve();
    //     });
    // }
    
    // // Usage example:
    // busyWait(500).then(() => {
    //     console.log('5 milliseconds have passed');
    // });
}


//hard 3
/*
  Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
  Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t1) {
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve(t1)
        }, t1*1000)
    })
    
}

function wait2(t2) {
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve(t2)
        }, t2*1000)
    })
    
}

function wait3(t3) {
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve(t3)
        }, t3*1000)
    })

}

function calculateTime(t1, t2, t3) {
    const startTime = Date.now()
    return Promise.all([wait1(t1), wait2(t2), wait3(t3)]).then((result) =>{
        console.log(result);
        const endTime = Date.now();
        let totalTime = endTime-startTime;
        return totalTime;
    })
}

calculateTime(1,2,3).then((totalTime)=>{
    console.log(totalTime +"ms")// Promise.all is used for trigger all promises at the same time 
})


// hard 4 
/*
Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
Write a function that sequentially calls all 3 of these functions in order.
Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
Compare it with the results from 3-promise-all.js
*/
{

    // function wait1(t1) {
    //     return new Promise(resolve => {
    //         setTimeout(()=>{
    //             resolve(t1)
    //         }, t1*1000)
    //     })
        
    // }
    
    // function wait2(t2) {
    //     return new Promise(resolve => {
    //         setTimeout(()=>{
    //             resolve(t2)
    //         }, t2*1000)
    //     })
        
    // }
    
    // function wait3(t3) {
    //     return new Promise(resolve => {
    //         setTimeout(()=>{
    //             resolve(t3)
    //         }, t3*1000)
    //     })
    
    // }
    // function calculateTime(t1,t2,t3) {
    //     const startTime = Date.now();
    //     return wait1(t1).then((result1)=>{
    //         console.log(result1);
    //         return wait2(t2);
    //     }).then((result2)=>{
    //         console.log(result2);
    //         return wait3(t3);
    //     }).then((result3)=>{
    //         console.log(result3);
    //         let endTime = Date.now();
    //         let totalTime = endTime-startTime;
    //         return totalTime;
    //     })
    // }
    // calculateTime(1,2,3).then((totalTime)=>{
    //     console.log(totalTime);// promise chains are used to trigger promises one by one
    // })
}