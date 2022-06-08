function getPrice(menu) {
  let res;
  
  switch (menu) {
    case 'ホットコーヒー':
    case 'アイスコーヒー':
    case '紅茶':

      res = 450;
      break;
    case 'チョコレートパフェ':
    case 'フルーツパフェ':
      res = 800;
      break;
    default:
      // その他
      res = 500;
  }

  return res;
}

console.log('ホットコーヒー', getPrice('ホットコーヒー'));
console.log('アイスコーヒー', getPrice('アイスコーヒー'));
console.log('チョコレートパフェ', getPrice('チョコレートパフェ'));
console.log('サンドイッチ', getPrice('サンドイッチ'));