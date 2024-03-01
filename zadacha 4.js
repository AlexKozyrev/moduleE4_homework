function ElectricDevice(name, power) {
    this.name = name;
    this.power = power;
    this.isPowered = false;
}

ElectricDevice.prototype.turnOn = function() {
    this.isPowered = true;
    console.log(`${this.name} включен `);
}

ElectricDevice.prototype.turnOff = function() {
    this.isPowered = false;
    console.log(`${this.name} выключен`);
}

function Lamp(name, power, mode) {
    ElectricDevice.call(this, name, power);
    this.mode = mode;
}
Lamp.prototype = new ElectricDevice()
Lamp.prototype.NightMode = function() {
    this.mode = 'night';
    this.power = this.power - 10
    console.log(`${this.name} режим изменен на ${this.mode}%`);
}
Lamp.prototype.DayMode = function() {
    this.mode = 'day';
    this.power = this.power + 10
    console.log(`${this.name} режим изменен на ${this.mode}%`);
}

function AirFreshener(name, power, temperature) {
    ElectricDevice.call(this, name, power);
    this.temperature = temperature
}
AirFreshener.prototype = new ElectricDevice()
AirFreshener.prototype.ChangeTemp = function(tempDelta){
    this.temperature = this.temperature + tempDelta
    console.log(`${this.name} температура повышена до ${this.temperature}%`);
}

function PersonalComputer(name, power, workMode) {
    ElectricDevice.call(this, name, power);
    this.temperature = 50
    this.mode = workMode
}
PersonalComputer.prototype = new ElectricDevice()
PersonalComputer.prototype.OpenOffice = function(){
    this.temperature = 50
    this.mode = 'work'
    console.log(`${this.name} включил рабочий режим изменение температуры на ${this.temperature}%`);
}
PersonalComputer.prototype.OpenChrome50 = function(){
    this.temperature = 150
    this.mode = 'browser'
    console.log(`${this.name} открыл браузер(50 вкладок), температура ${this.temperature}%`);
}
function calculatePower(...devices){
    let allPower = 0
    devices.forEach(device=>{
        if (device.isPowered) {
           allPower += device.power
        }
    }
    )
    return allPower
}


const lamp1 = new Lamp('Лампа 1', 20, 'day');
const lamp2 = new Lamp('Лампа 2', 32, 'night');
const airc1 = new AirFreshener('Лампа 2', 400, 15);
const pc1 = new PersonalComputer('Домашний', 200, 'work')
lamp1.turnOn()
lamp2.turnOn()
airc1.turnOn()
pc1.turnOn()
lamp1.NightMode()
//console.log(pc1)
console.log(calculatePower(lamp1,lamp2,airc1,pc1))
pc1.turnOff()
console.log(calculatePower(lamp1,lamp2,airc1,pc1))
