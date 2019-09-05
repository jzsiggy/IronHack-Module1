// function itoa(nb) {
//     res = [];
//     while (nb / 10 > 0) 
//     {
//         res.push(nb % 10);
//         nb -= nb % 10;
//         nb /= 10;
//     }
//     console.log(res)
//     return res.reverse();
// }

// itoa(196831)

// 19 / 10

function itoa2(nb) {
    return nb.toString()
}

console.log(itoa2(20))