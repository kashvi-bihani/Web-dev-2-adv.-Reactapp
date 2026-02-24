var a = 678
let b = 567

console.log(a)
console.log(b)

function print(){
    let c=43
    console.log(c)
    console.log("inside fn")
}

print()

function first(){
    second()
}

function second(){
    third()
}

function third(){
    console.trace()
}
first()

setTimeout(() => {
    alert("after 3 sec")
}, 3*1000);

//setInterval(()=>{
//    console.log("after 3 sec")
//},1000)

const timerId =setInterval(()=>{
    console.log("After 3 sec")
},1000)
console.log(timerId)
setTimeout(()=>{
    clearInterval(timerId)
},10*1000)

let count=0;
const timerid=setInterval(() => {
    count++;
    console.log("1 second passed",count);
    if(count===10){
        clearInterval(timerid);
        console.log("interval cleared");
    }
}, 1000);

const name=document.querySelector("#name")
const btn=document.querySelector(".btn")
const list=document.querySelector(".list")

btn.addEventListener('click',()=>{
    const li=document.createElement('li')
    const dlt=document.createElement('button')
    dlt.innerText="Delete";
    li.innerText=name.value;
    list.appendChild(li)
    li.appendChild(dlt)
    name.value=""
})

function orderFood(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log("Food Ordered")
            res("Food is being prepared")
        },2000)
    })
}

function prepareFood(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log("Food Prepared")
            res()
        },2000)
    })
}

function deliverFood(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log("Food Delivered")
            res()
        },2000)
    })
}


async function order(){
    const data=await orderFood()
    console.log(data)
    await prepareFood()
    await deliverFood()
}

order()

orderFood().then((data)=>{
    return prepareFood()
}) .then((data)=>{
    return deliverFood()
}) .then((data)=>{
}).catch((err)=>{
    console.log("Something went wrong")
})

console.log("First Line")
try{
    let sample=234
    console.log("Line after sample")
}catch(e){
    console.log(e)
}
console.log("Last Line")

async function getdata(){
    const response=await fetch("")
    const data=await response.json()
    data.product.forEach((product)=> {
        console.log(product.title)
    });
}
getdata()


async function sendData(){
    const response=await fetch('',{
        method:'Post',
        headers:{
            "content-Type":"application/json"
        },
        body:JSON,stringify({
            title:"New Product",
            description:"This is a new product"
            price
        })
    })
}


localStorage.setItem("name","Alex")
localStorage.setItem("age",45)

console.log(localStorage.getItem("name"))
console.log(localStorage.getItem("age"))

localStorage.removeItem("name")
console.log(localStorage.getItem("name"))

sessionStorage.setItem("name","Alex")
sessionStorage.setItem("age","45")

console.log(sessionStorage.getItem("name"))
console.log(sessionStorage.getItem("age"))

