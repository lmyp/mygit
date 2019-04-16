蜗牛爱吃香蕉 

N piles bananas 每把香蕉上有不同数量的bananas

有[3,6,7,11]
[30,11,23,4,20]
每个小时可以吃某一pile 的 n 只 香蕉，规定h小时内一定要吃完，吃每把的时候，要不就是吃m只，要不吃余下的

koko bananas
- 把香蕉吃完函数 canEatAllBananas
  h 来自于吃法规则 一小时mid， 一次只吃一把
  return h>=H;
- while 去疯狂的试
1,2，3,4,5,6..... Math.max
(...piles)
能拿到结果，但是太慢了
最大的来吗
中间 最大概率最快的 二分查找
二分查找优化查找的效率

简单查找 时间开销是n
二分查找写法是由规律的
x y 要找的是最小可以的min  可以来优化的
找中间 如果小了 mid = x + ((y-x) >>1)
mid +1新的X
大了 mid-1 新的y
log2N