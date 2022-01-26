// Random hex generator

function macGen() {
    var macValues = [];
    var macAddress = [];

    for (var j = 0; j < 6; j++) {
        macValues[j] = Math.floor(Math.random() * 16).toString(16) + Math.floor(Math.random() * 16).toString(16);
    }

    macAddress[0] = macValues.join(":");
    macAddress[1] = macValues.join("-");
    return macAddress;
}

var macAddress = macGen();

document.getElementById('MAC1').innerHTML = macAddress[0];
document.getElementById('MAC2').innerHTML = macAddress[1];