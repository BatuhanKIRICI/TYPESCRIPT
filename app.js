function add(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    else if (typeof a === "string" && typeof b === "string") {
        return a.concat(b);
    }
    throw new Error("Please try again!");
}
console.log(add(5, 9));
console.log(add("Miguel ", "Verdugo"));
