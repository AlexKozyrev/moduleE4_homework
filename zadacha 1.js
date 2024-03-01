function showProperty(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(key + ': ' + obj[key]);
        }
    }
}

const human = {
    hair: 'black',
    eyes: 'red'
};

showProperty(human);