const os = require("os")
const { exec } = require("child_process");

const cpu = async () => {
    if (os.cpus()[0].model === 'unknown' && os.type() === 'Linux') {
        try {
            await exec("lscpu | grep 'Model name:'", async (err, stdout, stderr) => {
                if (err) {
                    await console.error(err)
                } else {
                    await console.log(`${stdout}Nº Cores: ${os.cpus().length}`)
                }
            })
        } catch (error) {
            await console.error(error)
        }
    } else {
        await console.log('CPU: ' + os.cpus()[0].model + ' Nº Cores:' + os.cpus().length)
    }
}

const network = async () => {
    if (os.networkInterfaces().Ethernet || os.networkInterfaces()['Wi-Fi']) {
        try {
            await console.log('Network: Ethernet ' + JSON.stringify(os.networkInterfaces().Ethernet[1]))
        } catch (error) {
            await console.log('Network: No Ethernet connection')
        }
        try {
            await console.log('Network: WIFI ' + JSON.stringify(os.networkInterfaces()['Wi-Fi'][1]))
        } catch (error) {
            await console.log('Network: No WIFI connection')
        }
    } else {
        await console.log('Network: ')
        await console.log(os.networkInterfaces())
    }
}

async function main() {
    await console.log('Platform: ' + os.type() + ' ' + os.platform() + ' ' + os.release() + ' ' + os.version())
    await console.log('Free RAM: ' + (os.freemem() / 1073741824).toPrecision(3) + 'Go')
    await console.log('Total RAM: ' + (os.totalmem() / 1073741824).toPrecision(3) + 'Go')
    await network()
    await cpu()
    await console.log('Architecture: ' + os.arch())
};

main()

process.on('exit', (code) => {
    console.log('Process exit event with code: ', code);
});
