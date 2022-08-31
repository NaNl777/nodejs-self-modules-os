import os from 'os';

// console.log(os.homedir())
// console.log(os.hostname())
// console.log(os.version())
// console.log(os.type())



function osCheck() {
   console.log(`Привет юзер, ух ты .. У тебя новая версия - ${os.version} крутяк!`)
}


export default osCheck;