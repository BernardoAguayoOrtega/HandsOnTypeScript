type Points = 20 | 40 | 60 | 80 | 100;
let score: Points = 20;
console.log(score);
score = 101; // Error: Type '101' is not assignable to type 'Points'

type ComplexPerson = {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string];
};

let complexPerson: ComplexPerson = {
    name: "Max",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: [2, "author"],
};

console.log(complexPerson);
complexPerson.role.push("admin"); // Error: Property 'push' does not exist on type '[number, string]'.
