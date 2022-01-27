// Random MAC generator

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

// MAC Convertor
var convertedMAC = "";

function convertMAC() {
    convertedMAC = document.getElementById("MACToConvert").value;
    if (convertedMAC.includes("-")) {
        // Convert - to :
        convertedMAC = convertedMAC.replace(/-/g, ":");
    } else if (convertedMAC.includes(":")) {
        // Convert : to -
        convertedMAC = convertedMAC.replace(/:/g, "-");
    } else {
        // Probably not a MAC address
        convertedMAC = "Is this a MAC?";
    }

    document.getElementById("MACToConvert").value = convertedMAC;
}
const convertor = document.getElementById("Convertor");
convertor.addEventListener("click", convertMAC);