function checkProperty(obj, name) {
    return obj.hasOwnProperty(name);
}

const isBlind = "eyes"

const human = {
    hair: 'black',
    eyes: 'red'
};

console.log(checkProperty(human, isBlind))