// literal types

const myName = 'Lingkon'

// myName = 'bob'

// // const myName2: 'Lingkon' = 'BOB'
// let myName2: 'Lingkon' = "Lingkon" // literal means that we are using a variable that can be only declare with one value with same type. like declaring a const. 

// // myName2 = 'Rupon' // gives an error

// // Unions 
// type User = {
//     username: string
//     role: "guest" | "member" | "admin" 
// }

// type UserRole = "guest" | "member" | "admin" // Typing a variable with some literal types is called union

// let userRole: UserRole = "member" // the userRole variable will only be able to use one the UserRole union types. 


// Function return types 

type UserRole = "guest" | "member" | "admin"

type User = {
    username: string
    role: UserRole
}

const users: User[] = [
    { username: "john_doe", role: "member" },
    { username: "jane_doe", role: "admin" },
    { username: "guest_user", role: "guest" }
];

function fetchUserDetails(username: string) {
    const user = users.find(user => user.username === username)
    if (!user) {
        throw new Error(`User with username ${username} not found`)
    }
    return user
}
