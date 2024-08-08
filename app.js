let arrayprompt = prompt("please enter 5 numbers");
let arrsplit = arrayprompt.split(" ")
let arr = [+arrsplit[0], +arrsplit[1], +arrsplit[2], +arrsplit[3], +arrsplit[4]]

let min = arr[0]

for(let i = 1; i < arr.length; i++){
    if(arr[i] < arr[0]){
        min = arr[i]
    }
}
console.log(min)