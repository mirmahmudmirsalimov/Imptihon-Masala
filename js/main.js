/* Sizga users array beriladi, siz funksiya yasaysiz, 
 u funksiyaga users arrayni va telefon nomer kiritaman. 
 Va u menga returnida shu nomer kimga tegishliligini 
 chiqarib beradi. Agar yo'q bo'lsa bo'sh string qaytaradi.
*/
let users = [{
        name: "Avazbek",
        telNumber: "998911645099"
    },
    {
        name: "Umid",
        telNumber: "998911758585"
    },
    {
        name: "O'ktam",
        telNumber: "998911777767"
    },
    {
        name: "Valijon",
        telNumber: "998917777777"
    },
    {
        name: "Sarvar",
        telNumber: "998911222222"
    },
    {
        name: "Sardor",
        telNumber: "998911222322"
    },
    {
        name: "Toxir",
        telNumber: "998911645022"
    }
]



function findUser(array, number) {
    let user = ""

    array.forEach(cur => {
        console.log(cur.telNumber == number);
        if(cur.telNumber == number) {
          user = cur.name  
        }
        console.log(cur.name);
    })





    return user
}


let result = findUser(users, 998911645022)

console.log('natija:')
console.log(result);

// Result
// --> Toxir