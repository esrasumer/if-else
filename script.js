// let username = prompt("Kullanıcı adını giriniz:");

// if (username.length > 0) {
//     console.log(`Kulanıcı adınız : ${username}`);
// } else {
//     console.log("bilgi yok");
// }


let examGrade = prompt("Notunuzu giriniz:");
if (examGrade >= 0 && examGrade < 50) {
    console.log("FF :(");
} else if (examGrade >= 50 && examGrade < 60) {
    console.log("FD ☻");
} else if (examGrade >= 60 && examGrade < 65) {
    console.log("DD :)");
} else if (examGrade >= 65 && examGrade < 70) {
    console.log("DC ☻");
} else if (examGrade >= 70 && examGrade < 75) {
    console.log("CC ☻");
} else if (examGrade >= 75 && examGrade < 80) {
    console.log("CB ☻");
} else if (examGrade >= 80 && examGrade < 85) {
    console.log("BB ☻");
} else if (examGrade >= 85 && examGrade < 90) {
    console.log("BA ☻");
} else if (examGrade >= 90 && examGrade < 100) {
    console.log("AA ☻");
}

console.log("Notunuz: " + examGrade);