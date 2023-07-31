function isNumberEven(value) {
  if (Number.isInteger(value)) {
    if (value % 2 === 0) {
      return false;
    } else {
      return true;
    }
  }
}

let j = 2;

for (let i = 0; i <= 10; i++) {
  console.log("Ok");
  j = 5 - (j*2);

}
