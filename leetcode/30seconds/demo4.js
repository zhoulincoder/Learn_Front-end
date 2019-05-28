// 给定一个数组， 它的第i个元素 是一支给定股票第i天的价格
[7,1,5,3,6,4]
// 只允许一次交易 (一次买进， 一次卖出) 设计一个算法来计算你能获得的最大利润
//动态规划 买入状态 卖出状态
//只要考虑在当天和在之前买哪个收益更高
// 最大收益
const maxProfit = (prices) => {
  var i,
    length = prices.length,
    low,//低点
    high,//高点
    cur,
    max = 0;
  if (length === 0) {
    return 0
  }

  low = prices[0];
  high = low;
  for (i = 1; i < length; i++) {
    cur = prices[i];
    // 某一天 要买, high
    //
    if (cur > high) {
      high = cur;
    } else if (cur < low) {
      low = cur;
      //标记最低时指针的位置？
      high = cur; 
    }if(high - low > max ) {
      max = high - low
    }
  }
  return max;
}

console.log(maxProfit([7, 2, 3, 5, 7, 10]))
