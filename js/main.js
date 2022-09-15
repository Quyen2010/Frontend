// // ẩn password 
var password ="quynhquyen"
var str = "*"
console.log(password.slice(0,1) + str.repeat(password.length -2) + password.slice(-1))
// đếm số lần xuất hiện 
var str = "hello world!"
console.log(str.split("l").length-1)
// 2 cách dùng for và này 
// thay thế string a -> b 
var numbers = "thanks for watching!"
// c1
// console.log(numbers.replace('lo', 'nhat' ))
// c2
// var a = numbers.split('')
// console.log(a);
// a.splice(3,2,'nhat')
// console.log(a.join(''))
var a = numbers.split('')
console.log(a);
var b = a.indexOf('r')
var c = a.length
a.splice(b,c, 's')
console.log(a.join(''))

// tìm ra số nhỏ nhất lớn nhất trong mảng 
var arr =[1,2,3,4,5,15,100,53,2,12,3]
// var numbers =arr.reduce((acc, val)=>{
//     return (acc < val) ? acc : val
// })
// console.log(arr)
// console.log("min = ",numbers)
// var numbers  = arr.reduce((acc,val)=>{
//     return (acc > val) : acc  val
// })
// console.log(arr)
// console.log("max: ",numbers)

var user ={
    name:'user 1'
}
const liskKeys = Object.values(user)
if(!liskKeys.length){
    console.log("object rong")
}else{
    console.log("object khong rong");
}
console.log("name" in user );

