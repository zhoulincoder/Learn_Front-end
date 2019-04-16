1. 蜗牛爱吃香蕉
2. N piles bananas 每pile banbas 有不同数量的bananas
[3,6,7,11]
[30,11,23,4,20] 
每个小时可以吃某一个pile里的n只香蕉，规定h小时内一定要吃完，吃每把香蕉的时候，要不就是吃m只，要么就吃剩下的。

koko banans
- 把香蕉吃完函数 canEatAllBanans  h来自于吃法规则  一小时mid ,一次只吃一把 return h >= H;
- while 去疯狂的试   1,2,3,4,5,6，.....Math.max(...piles)
能拿到结果，便是太慢
中间 最大概率是最快的，二分查找
二分查找优化查找的效率

简单查找 时间开销是n
二分查找的写法是有规律   x  y  要找的是最小可以min  可以来优化的
找中间，mid= x+(（y-x)>>1),小了,
mid +1 新的
