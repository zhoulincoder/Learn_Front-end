动态规划入门
老虎吃羊

500只虎，1只羊
都吃草
虎可以吃羊，一只虎吃一只羊
吃完羊之后，这只老虎变成羊
老虎会不会吃掉这只羊

动态规划：大事化小，小事化了，找规律
最优子结构： 上一次不吃，下一次就吃
边界： n = 1 吃  n = 2 不吃    n =2以上，递归子结构
状态转移 F(n) = !F(n-1) 

楼梯只有12阶，一步走一阶或走两阶梯，请问走完楼梯有几种走法？
边界 n=1 1种    n=2 2种
子结构   n=12     你在  n-1 = 11   走一步
                       n-2 = 10   走两步
                           = 9    先二后一
                                  先一后二
状态转移  F(n) = F(n-1) +F(n-2)
一个阶梯   走一步   一种走法
两个阶梯   走一步  一种走法
          走两步  两种走法
三个阶梯   走一步   一种走法
          走两步走一步  一种走法
          走一步走两步  一种走法
