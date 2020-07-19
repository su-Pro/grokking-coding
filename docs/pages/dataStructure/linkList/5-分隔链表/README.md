## 面试题 02.04. 分割链表

[面试题 02.04. 分割链表](https://leetcode-cn.com/problems/partition-list-lcci/)

### 描述

编写程序以 x 为基准分割链表，使得所有小于 x 的节点排在大于或等于 x 的节点之前。如果链表中包含 x，x 只需出现在小于 x 的元素之后(如下所示)。分割元素 x 只需处于“右半部分”即可，其不需要被置于左右两部分之间。

示例:

输入: head = 3->5->8->5->10->2->1, x = 5
输出: 3->1->2->10->5->5->8

### 思路

关键点：虚拟链表

- 构造两个虚拟节点（dummy head）
- 比较链表中每个节点和 x 的关系，将链表中小的值加入到 ListOne，大的值加入到 listTwo
  - if current.value < target : listOne.append(current)
  - else current.value > target : listTwo.append(current)
- 合并两个链表，同时 cut 掉 listTwo 的尾结点，防止成环
- listTwo.next = null

### 代码

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
  if(head === null || head.next === null) {
    return head;
  }
  /**
   * 1.构建dummyNode1 、2
   * 2.摘出 小于的 和 大于等于的元素
   *  - 小于的： dummyNode1.append(x)
   *  - 大于等于的： dummyNode2.append(x)
   * 3.当node为空时，开始merge链表
   * 4.返回dummyNode1
   * 边界
   *  切断dummyNode2尾节点的指针，防止成环
   */
  let dummyNode1 = new ListNode(-1),
      dummyNode2 = new ListNode(-1),
      dummyRun1 = dummyNode1,
      dummyRun2 = dummyNode2;
  while(head !== null) {
    if(head.val < x) {
      // 1.append
      dummyRun1.next = head;
      dummyRun1 = dummyRun1.next;
    }else {
      // head.val >= x
      dummyRun2.next = head;
      dummyRun2 = dummyRun2.next;
    }
    head = head.next;
  }
  // merge:
  dummyRun1.next = dummyNode2.next;
  // cute:
  dummyRun2.next = null;
  return dummyNode1.next;
};
```

Time:链表中有 n 个节点需要 compare => O(n)

Space: 只有两个 dummyHead，没有动用其他空间 => O(1)
