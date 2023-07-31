function isNumberEven(value) {
  if (!Number.isInteger(value)) {
    return false;
  }

  if (value % 2 === 0) {
    return false;
  }

  return true;
}

console.info(isNumberEven(2));
