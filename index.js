// code your solution here
let saturdayFun = function saturdayFun(activity ="roller-skate"){
    return (`This Saturday, I want to ${activity}!`)
}
let mondayWork = function mondayWork (activity ="go to the office" ){
    return (`This Monday, I will ${activity}.`)
}
function wrapAdjective(name){
    return function(value){
        return `You are ${name}${value}${name}!`;
    }

}