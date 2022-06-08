// 再帰関数
function recursion(n, max) {
  console.log(n);

  n *= 2;

  if (n > max) { return; }

  recursion(n, max);
}

recursion(16, 1000);