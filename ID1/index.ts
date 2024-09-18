// 1.- Tipos de datos primitivos (string, number, boolean)
let userName: string = "John Doe";
let age: number = 25;
let isActive: boolean = true;
console.log(`Name: ${userName}, Age: ${age}, Active: ${isActive}`);


// 2.- Enumeración (enum)
enum Status {
    Active,
    Inactive,
    Pending
}
let currentStatus: Status = Status.Active;
console.log(`Current Status: ${Status[currentStatus]}`); // Output: Active


// 3.- Tipos any y unknown
let randomValue: any = 10;
randomValue = "This can be anything!";
console.log(`Random value (any): ${randomValue}`);

let unknownValue: unknown = "Unknown value!";
if (typeof unknownValue === "string") {
    console.log(`Unknown value (string): ${unknownValue.toUpperCase()}`);
}


// 4.-Tipos de unión e intersección
type Employee = {
    employeeId: number;
    name: string;
};

type Admin = {
    adminId: number;
    permissions: string[];
};

// Unión: Puede ser Employee o Admin
let user: Employee | Admin;

user = { employeeId: 1, name: "Alice" };  // Es un empleado
console.log(`Employee Name: ${(user as Employee).name}`);

user = { adminId: 101, permissions: ["read", "write"] };  // Es un admin
console.log(`Admin ID: ${(user as Admin).adminId}`);

// Intersección: Debe ser tanto Employee como Admin
type EmployeeAdmin = Employee & Admin;

let superUser: EmployeeAdmin = {
    employeeId: 2,
    name: "Bob",
    adminId: 202,
    permissions: ["read", "delete"]
};
console.log(`Super User: ${superUser.name}, Permissions: ${superUser.permissions}`);


// 5 .-Tipos de colección (arrays, tuplas, sets, maps)
// Arrays
let scores: number[] = [90, 85, 88];
console.log(`Scores: ${scores.join(", ")}`);

// Tuplas
let person: [string, number] = ["John", 30];
console.log(`Person: Name = ${person[0]}, Age = ${person[1]}`);

// Sets
let uniqueNumbers: Set<number> = new Set([1, 2, 3, 3, 4]);
console.log(`Unique Numbers: ${Array.from(uniqueNumbers).join(", ")}`);

// Maps
let userRoles: Map<string, string> = new Map();
userRoles.set("John", "Admin");
userRoles.set("Jane", "Editor");
console.log(`User Roles: ${userRoles.get("John")}, ${userRoles.get("Jane")}`);


// 6 .-Función que sigue buenas prácticas para el uso de tipos
function calculateTotal(price: number, tax: number): number {
    return price + price * tax;
}
let total = calculateTotal(100, 0.15);
console.log(`Total Price: ${total}`);
