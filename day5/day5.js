console.log("Hello, World!");
setTimeout(() => {
    console.log("This is a delayed message.");
}, 4000);
setTimeout(() => {
    console.log("This is another delayed message.");
}, 1000);
console.log("This is the last message.");
const sub = ((a,b) => {
    return a-b;
});
console.log(sub(10, 5));