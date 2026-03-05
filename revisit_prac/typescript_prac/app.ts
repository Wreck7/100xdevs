function add(a: number, b: number): number {
  return a + b;
}

add(5, "10") // Error


// normal object defining
let student: {
  name: string
  age: number
} = {
    name: "Alice",
    age: 30
}



// Interfaces (VERY IMPORTANT) - Interfaces define object structure.
interface User {
  name: string
  age: number
}

const user: User = {
  name: "Vishwa",
  age: 22
}



// Optional Properties
interface User {
  name: string
  age?: number
}

const user: User = {
  name: "Vishwa"
}


// union types 
let id: string | number

id = 101
id = "abc123"


// Type Aliases - Alternative to interfaces.
type User = {
  name: string
  age: number
}



// Generics (Powerful Feature)

function identity<T>(value: T): T {
  return value
}

identity<number>(10)
identity<string>("hello")