// var a="HIIII"
// console.log(a)
// console.log("LOVE")

// let someNumber=33
// let stringNumber=String(someNumber)
// console.log(stringNumber)
// console.log(typeof stringNumber)
// console.log(typeof someNumber)

// let value=3
// let neg=-value
// console.log(neg)
// console.log(2**3)

// console.log("1" + 2)  //12
// console.log(1 + "2")  //12
// console.log("1" + 2 + 2)  //122
// console.log(1 + 2 + "2")  //32

// const id=Symbol('123');
// console.log(id)

// const name="Singh"
// const repocount=50
// console.log(name + repocount + " Value")

// console.log(`hello my name is ${name} and my repocount is ${repocount}`);

// const gameName=new String('Love')
// console.log(gameName)

// console.log(gameName[0])
// console.log(gameName.charAt(2))
// console.log(gameName.indexOf('o'))
// console.log(gameName.toUpperCase())

const myArray=[5,6,7,8,9]
console.log(myArray[1])

// const myarray=new Array(1,2,3,4,4)
// console.log(myarray)

// myArray.push(1)
// console.log(myArray)
// myArray.pop() 
// myArray.pop() 
// console.log(myArray)

// myArray.unshift(3)
// console.log(myArray)
// myArray.shift()
// console.log(myArray)
// myArray.shift()
// console.log(myArray)

// console.log(myArray.includes(9))
// console.log(myArray.indexOf(2))

// const mna1=myArray.slice(1,3)
// console.log(mna1);
// console.log(myArray);

// const mna2=myArray.splice(1,3);
// console.log(mna2);
// console.log(myArray);

// const marvel=["captain","hulk","ironman"]
// const dc=["superman",'batman','flash']

// // marvel.push(dc)
// // const allheros=marvel.concat(dc)
// const allheros=[...marvel, ...dc];
// console.log(allheros);

// console.log(Array.from("LOVE"))

//Objects
//object literals
// const mysym=Symbol("key1")


// const objectmaking={
//     name : "Love",
//     "full name" : "Love Singh",
//     [mysym]:"key2",
//     age : 18,
//     email : "lovesingh8844@gamil.com",
//     lastLoginDays:["mondey","tuesday"]
// }

// console.log(objectmaking["name"])
// console.log(objectmaking["email"])
// console.log(objectmaking["full name"])
// console.log(objectmaking[mysym])
// console.log(typeof objectmaking[mysym])

// objectmaking.name="Singh"
// console.log(objectmaking)
// Object.freeze(objectmakingf)
// objectmaking.name="Kumar"
// console.log(objectmaking)

// const obj1={1: "a", 2:"b"}
// const obj2={1: "d",4:"b"}
// const obj5={5:"a",6:"v"}
// const obj4={obj1,obj2}
// const obj3={...obj1,...obj2}
// const obj6=Object.assign(obj1,obj2,obj5)
// console.log(obj3)
// console.log(obj4)
// console.log(obj6)
// console.log(Object.keys(objectmaking));
// console.log(Object.values(objectmaking))
// console.log(objectmaking.hasOwnProperty('email'))

// function example(){
//     console.log("Hi");
// }
// example()

// function example2(number1 ,number2){
//        console.log(number1+number2)
// }
// example2(3,4)

// function example3(number3,number4){
//     let ct=number3+number4
//     return ct
// }
// const ans=example3(4,5)
// console.log(ans)
// console.log(example3(3,4))

// function loginUserMessage(username){
//     if(username===undefined){
//         console.log("please enter user name");
//         return
//     }
//     return `${username} just logged in`
// }
// console.log(loginUserMessage("love"))

// const user={
//     username : "love",
//     price: 10
// }

// function handleobject(anyobject){
//     console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
// }

// handleobject(user)

// const mynewarray=[12,34,45,67]

// function returnvalues(anyarray){
//     return anyarray[2]
// }
// console.log(returnvalues(mynewarray))

// Arrow function
// const addTwo = (num1,num2) => {
//     return num1+num2
// }
// const addTwo=(num1,num2) => num1+num2
// const addTwo=(num1,num2) => ({user:"Love"}) 
// console.log(addTwo(2,3))


// IIFE(Immediately Invoked Function Expression)
// (function chai(){
//     console.log("love");
// })();

// ( ()=> {
//     console.log(`love 2`)
// })();

// ( (name) => {
//     console.log(`${name} is excecuted`);
// })('function')