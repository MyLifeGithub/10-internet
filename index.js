// 192.168.110.109:5500/index.html

// Internet = inter(international) + net(web)
// nationality: America
// 192.168.x.x-local internet-or IP
// IP - 2 types - local,global
// WeproInternet -> local pages

// Browser -> youtube.com(host) -> https,http
// SSl,TLS - domen
// provider -> hub -> router -> wifi
//          `-> lum(local internet),wlan(global internet)
// lan - provodnoy internet
// wlan - bezprovodnoy internet

// let age = +prompt('your age?')
// if (age > 18) {
//     let name = prompt('your name')
//     if (name.length > 7) {
//         alert('access allowed')
//     }
//     else {
//         alert('get out')
//     }
// }
// else {
//     alert('get out')
// }
console.log([-23, 3123, -12312, -123, 112].sort()); // ASCII 2-50,1-49
let num1 = +prompt('num1')
let num2 = +prompt('num2')
let method = prompt('operator')
let result;
if (method ==' +') {
    result = num1 + num2
    alert('result is : ' + result)
}
else if (method ==' -') {
    result = num1 - num2
    alert('result is : ' + result)
}
else if (method ==' *') {
    result = num1 * num2
    alert('result is : ' + result)
}
else if (method ==' /') {
    result = num1 / num2
    alert('result is : ' + result)
}
else if (method == '**') {
    result = num1 ** num2
    alert('result is : ' + result)
}
else {
    result = num1 % num2
    alert('result is : ' + result)
}