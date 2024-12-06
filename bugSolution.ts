function greeter(person: string | string[]): string {
  if (typeof person === 'string') {
    return "Hello, " + person;
  } else if (Array.isArray(person)) {
    return "Hello, " + person.join(" ");
  } else {
    return "Hello, unknown";
  }
}

let user = ["Jane", "Doe"];

console.log(greeter(user)); // Expected output: Hello, Jane Doe

let user2 = "John Doe";
console.log(greeter(user2)); // Expected output: Hello, John Doe