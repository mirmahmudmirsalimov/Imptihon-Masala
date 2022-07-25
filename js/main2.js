/* Sizga users array beriladi, siz funksiya yasaysiz, 
 u funksiyaga users arrayni va (22)yosh kiritaman. 
 Va u menga returnida yangi array qaytaradi va 
 unda faqat 22 yoshga teng va undan kattalarni qaytaradi.
*/
let users = [
    {
        name: "Avazbek",
        age: "25"
    },
    {
        name: "Umid",
        age: "21"
    },
    {
        name: "O'ktam",
        age: "22"
    },
    {
        name: "Valijon",
        age: "19"
    },
    {
        name: "Sarvar",
        age: "27"
    },
    {
        name: "Sardor",
        age: "17"
    },
    {
        name: "Toxir",
        age: "16"
    }
]



function ageGreaterThan(array, minAge) {
    let newArray = []

    array.forEach(gap => {
        // console.log(gap)
        if(gap.age >= minAge) {
            newArray.push(gap)
        }
    });


    return newArray
}


// ageGreaterThan(users, 22);
console.log(ageGreaterThan(users, 25))

// Result
// [
    // {
    //     name: "Avazbek",
    //     age: "25"
    // },
    // {
    //     name: "O'ktam",
    //     age: "22"
    // },
    // {
    //     name: "Sarvar",
    //     age: "27"
    // }
// ]


