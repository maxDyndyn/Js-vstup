//  _______1_______
let name = prompt("Як тебе звати?");
alert("Привіт, " + name + "!");

// _______2_______
const CURRENT_YEAR = 2025;
let birthYear = prompt("Введи свій рік народження:");
let age = CURRENT_YEAR - birthYear;
alert("Тобі " + age + " років!");

// _______3_______
let side = prompt("Введи довжину сторони квадрата:");
let perimeter = 4 * side;
alert("Периметр квадрата: " + perimeter);

//  _______4_______





//  _______5_______
let distance = prompt("Введи відстань між містами :");
let time = prompt("За скільки годин хочеш дістатися?");
let speed = distance / time;
alert("Тобі потрібно рухатися зі швидкістю " + speed + " км/год");

//  _______6_______
let dollars = prompt("Введи суму в доларах:");
let euros = dollars * 0.92; 
alert(dollars + " USD = " + euros + " EUR");


//  _______7_______
let flashSizeGB = prompt("Введи обсяг флешки в ГБ:");
let flashSizeMB = flashSizeGB * 1024; 
let fileSizeMB = 820; 
let fileCount = flashSizeMB / fileSizeMB;
alert("На флешку поміститься " + fileCount + " файлів по 820 МБ.");