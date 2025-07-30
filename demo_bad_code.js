// 개선이 필요한 다양한 자바스크립트 로직 예시

// 1. 비효율적인 배열 중복 제거
function removeDuplicates(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (result.indexOf(arr[i]) === -1) {
      result.push(arr[i]);
    }
  }
  return result;
}

// 2. 불필요하게 복잡한 팩토리얼 계산
function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result = result * i;
  }
  return result;
}

// 3. 잘못된 비동기 처리 (콜백 지옥)
function fetchData(callback) {
  setTimeout(function() {
    callback('data1');
    setTimeout(function() {
      callback('data2');
      setTimeout(function() {
        callback('data3');
      }, 100);
    }, 100);
  }, 100);
}

// 4. 불필요하게 반복되는 코드
function printNumbers() {
  console.log(1);
  console.log(2);
  console.log(3);
  console.log(4);
  console.log(5);
}

// 5. 잘못된 에러 처리
function parseJSON(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
    return null;
  }
}

// 6. 성능이 떨어지는 문자열 뒤집기
function reverseString(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

// 7. 불필요하게 복잡한 최대값 찾기
function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// 8. 중첩 반복문으로 합 구하기
function sumMatrix(matrix) {
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      sum += matrix[i][j];
    }
  }
  return sum;
}

// 9. 불필요하게 복잡한 조건문
function checkValue(val) {
  if (val === 1) {
    return 'one';
  } else if (val === 2) {
    return 'two';
  } else if (val === 3) {
    return 'three';
  } else {
    return 'other';
  }
}

// 10. 불필요하게 많은 변수 사용
function sum(a, b) {
  let x = a;
  let y = b;
  let z = x + y;
  return z;
}
