// #include<stdio.h>
// int main()
// {
//     float a[11],flag[9],sum=0;
//     int i;
//     printf("本程序用于计算分数序列前十项的和。\n");
//     a[0]=1; a[1]=2;
//     for(i=0;i<=9;i++)
//     {
//         flag[i]=a[i+1] / a[i];
//         sum=sum + ( pow( -1, i) * flag[i] );
//         a[i+2]=a[i+1] + 1 ;
//     }
//     printf("结果为%f",sum);
//     return 0;
// }
//如果是前20项  代码中的  9改成19     11改成21