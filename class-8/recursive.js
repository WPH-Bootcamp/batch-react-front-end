// =====================================
// RECURSIVE
// Function yang memanggil dirinya sendiri
// =====================================

// Contoh 1 - Countdown
function countdown(number) {
  if (number === 0) {
    console.log("Selesai!");
    return;
  }

  console.log(number);
  countdown(number - 1);
}

countdown(5);

// =====================================
// Contoh 2 - Faktorial
// 5! = 5 × 4 × 3 × 2 × 1
// =====================================

function factorial(number) {
  if (number === 1) {
    return 1;
  }

  return number * factorial(number - 1);
}

console.log(factorial(5)); // 120
