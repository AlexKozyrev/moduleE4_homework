function createObjectWithoutPrototype() {
    return Object.create(null);
}
let emptyObject = createObjectWithoutPrototype()
console.log(emptyObject)