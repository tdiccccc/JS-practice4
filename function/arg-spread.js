function setOrder(order1, order2, order3, oreder4) {
  console.log(order1, order2, order3, oreder4);
}

// 配列を作成
const orders = ['ホットコーヒー', 'アイスコーヒー', '紅茶', 'ほうじ茶'];

setOrder(...orders);