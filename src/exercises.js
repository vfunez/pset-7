function commonEnd(a, b) {
  if (!a || a.length === 0 || !b || b.length === 0) {
    return false;
  }

  if (a[0] === b[0] || (a[a.length-1] === b[b.length-1])) {
    return true;
  }
  return false;
}

function endsMeet(values, n) {
  let newArray = [];

  if (!values || values.length < n || !Number.isInteger(n)) {
    return newArray;
  } else {
      if (n === 0) {
        return values;
  } else {
      for (let i = 0; i < n; i++) {
        if (!(values[i] === undefined)) {
          newArray.push(values[i]);
          }
        }
      for (let i = n; i > 0; i--) {
        if (!(values[values.length - i] === undefined)) {
          newArray.push(values[values.length-i]);
        }
      }
      return newArray;
    }
  }
}

function difference(numbers) {
  let largestValue = Number(Math.max.apply(null,numbers));
  let smallestValue = Number(Math.min.apply(null,numbers));

  if (!numbers || numbers.length < 1 || numbers.some(isNaN)) {
    return undefined;
  } else {
      let difference = largestValue - smallestValue
        return difference;
  }
}

function max(number) {
  if (!number || number.length < 3 || number.length % 2 === 0 || number.some(isNaN)) {
    return undefined;
  } else {
      let newArray = [];

      let first = number[0];
      let middle = number[Math.floor(number.length/2)];
      let last = number[number.length - 1];
        newArray.push(first, middle, last);

      let largestValue = Number(Math.max.apply(null, newArray));
        return largestValue;
  }
}

function middle(values) {
  // write your code here
}

function increasing(numbers) {
  // write your code here
}

function everywhere(values, x) {
  // write your code here
}

function consecutive(numbers) {
  // write your code here
}

function balance(numbers) {
  // write your code here
  console.log("test");
}

function clumps(values) {
  // write your code here
}

/*
 * Exports all functions for use in external grader.js file. Do not modify.
 */

module.exports = {
  commonEnd,
  endsMeet,
  difference,
  max,
  middle,
  increasing,
  everywhere,
  consecutive,
  balance,
  clumps
};
