// 0.1+0.2 =>?

// 进制转化的规则 十进制 =》二进制
// 0.1 0 是整数位 1 小数位

// 转换二进制-》二进制转换为10进制
console.log(parseInt('1010',2))


//      11.1101
// 对应 2^1+2^0  2^-1 2^-2


// 0.5 转换成 10进制为 0.1

// 整数位 当前位的值 * 2^(n-1)
// 小数位 把当前的不停的乘2取整

/**
 * 十进制小数转换为二进制小数：用2乘十进制小数，
 * 可以得到积，将积的整数部分取出，再用2乘余下的小数部分，
 * 又得到一个积，再将积的整数部分取出，如此进行，
 * 直到积中的小数部分为零，此时0或1为二进制的最后一位。或者达到所要求的精度为止。
 * 
 */

/**
0.1  转换成2进制 0.00011

0.1*2 = 0.2 无整数
0.2*2 = 0.4 无整数  
0.4*2 = 0.8 无整数  
0.8*2 = 0.16 余0.6
0.6*2 = 0.12 余0.2  
 */

 // 十进制转换为二进制
 console.log(0.1+0.2)
// 双精度浮点数
// 0.1 转换成二进制是无穷的 ，而计算机的内存是有限的，因此不可能存储这么多二进制

console.log('0001100110011001100110011001100110011001100110011001101'.length)

//0.1  0.0001100110011001100110011001100110011001100110011001101
//0.2  0.001100110011001100110011001100110011001100110011001101 


// 因此0.1 +0.2 = 0.30000000000000004 是因为计算过程中转换为二进制的时候进行了截取，同时二进制又因为截取进行了进制的进一位 因此比以前大了