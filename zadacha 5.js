class ElectricDevice {
    constructor(name, power) {
        this.name = name;
        this.power = power;
        this.isPowered = false;
    }
    turnOn() {
        this.isPowered = true;
        console.log(`${this.name} включен `);
    }
    turnOff() {
        this.isPowered = false;
        console.log(`${this.name} выключен`);
    }
}

class Lamp extends ElectricDevice {
    constructor(name, power, mode) {
        super(name, power);
        this.mode = mode;
    }
    NightMode() {
        this.mode = 'night';
        this.power -= 10;
        console.log(`${this.name} режим изменен на ${this.mode}%`);
    }
    DayMode() {
        this.mode = 'day';
        this.power += 10;
        console.log(`${this.name} режим изменен на ${this.mode}%`);
    }
}

class AirFreshener extends ElectricDevice {
    constructor(name, power, temperature) {
        super(name, power);
        this.temperature = temperature;
    }
    ChangeTemp(tempDelta) {
        this.temperature += tempDelta;
        console.log(`${this.name} температура повышена до ${this.temperature}%`);
    }
}

class PersonalComputer extends ElectricDevice {
    constructor(name, power, workMode) {
        super(name, power);
        this.temperature = 50;
        this.mode = workMode;
    }
    OpenOffice() {
        this.temperature = 50;
        this.mode = 'work';
        console.log(`${this.name} включил рабочий режим изменение температуры на ${this.temperature}%`);
    }

    OpenChrome50() {
        this.temperature = 150;
        this.power +=200
        this.mode = 'browser';
        console.log(`${this.name} открыл браузер(50 вкладок), температура ${this.temperature}%`);
    }
}

function calculatePower(...devices) {
    let allPower = 0;
    devices.forEach(device => {
        if (device.isPowered) {
            allPower += device.power;
        }
    });
    return allPower;
}

const lamp1 = new Lamp('Лампа 1', 20, 'day');
const lamp2 = new Lamp('Лампа 2', 32, 'night');
const airc1 = new AirFreshener('Лампа 2', 400, 15);
const pc1 = new PersonalComputer('Домашний', 200, 'work');
lamp1.turnOn();
lamp2.turnOn();
airc1.turnOn();
pc1.turnOn();
lamp1.NightMode();
console.log(calculatePower(lamp1, lamp2, airc1, pc1));
pc1.turnOff();
pc1.OpenChrome50()
console.log(calculatePower(lamp1, lamp2, airc1, pc1));