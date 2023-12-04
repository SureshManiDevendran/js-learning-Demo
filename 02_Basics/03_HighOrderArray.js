const lstNumbers=[1,32,45,67]

for (const number of lstNumbers) {
   // console.log(number);
}

// const lstCharacter="India"

// for (const character of lstCharacter) {
//     console.log(character)
// }

//Maps
const maps=new Map();
//console.log(typeof maps)
maps.set('01',"India");
maps.set("02","Pakistan")
maps.set('03',"Srilanka")
//console.log(maps)

//console.log(maps.get('02'))

for (const [key,value] of maps) {
    //console.log(`Key:- ${key} and Value ${value}`)
}

// working maps with objects

const myObjlan={
    js:"Reacj.js",
    frontend:"HTML",
    backEnd:"C#"
 }

//  for (const [key,value] of myObjlan) {
//     console.log(`Key:- ${key} and Value ${value}`)
//  }

 for (const key in myObjlan) {
    // if (myObjlan.hasOwnProperty.call(object, key)) {
    //     const element = myObjlan[key];
    //     console.log(element)
        
    // }
   // console.log(key);
   // console.log(`Key ${key} and value is ${myObjlan[key]}`);
 }

 const programming=["C#","JAVA","PYTHON","RUBY"]

 for (const key in programming) {
    // if (programming.hasOwnProperty.call(programming, key)) {
    //     const element = programming[key];
    //     console.log(element)
    // }
   // console.log(`${key}:-${programming[key]}`)
 }

// for (const key in maps) {
//    console.log(key)
// }

