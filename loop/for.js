for (let i = 0; i < 4; i ++) {
  console.log(`変数iの値は${i}`);
}


// for in文

const item = {name: 'ホットコーヒー', price: 450, countDay: 8};

for (const propName in item) {
  console.log(`${propName} : ${item[propName]}`);
}

// for of文
const arr = ['コーヒー', `koucha`, 'cake', 'pizza'];

for (const param of arr) {
  console.log(param);
}

// while文

let n = 0;

while (n < 3) {
  console.log(n);

  //カウンターの値を増加
  n ++;
}

