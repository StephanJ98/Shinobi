const os = require("os")

console.log('Architecture: ' + os.arch())
console.log('CPU: ' + os.cpus()[0].model + ' Nº Cores:' + os.cpus().length)
console.log('Free RAM: ' + (os.freemem() / 1073741824).toPrecision(3) + 'Go')
console.log('Total RAM: ' + (os.totalmem() / 1073741824).toPrecision(3) + 'Go')
try {
    console.log('Network: Ethernet ' + JSON.stringify(os.networkInterfaces().Ethernet[1]))
} catch (error) {
    console.log('Network: No Ethernet connection')
}
try {
    console.log('Network: WIFI ' + JSON.stringify(os.networkInterfaces()['Wi-Fi'][1]))
} catch (error) {
    console.log('Network: No WIFI connection')
}
console.log('Platform: ' + os.type() + ' ' + os.platform() + ' ' + os.release() + ' ' + os.version())

process.on('exit', (code) => {
    console.log('Process exit event with code: ', code);
});
