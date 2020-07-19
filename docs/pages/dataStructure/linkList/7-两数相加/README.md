## 两数相加

[2. 两数相加](https://leetcode-cn.com/problems/add-two-numbers/)

## 描述

给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。

如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

示例：

输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
输出：7 -> 0 -> 8
原因：342 + 465 = 807

## 思路

[合并两个有序链表](../合并两个有序链表/README.md)的变种题型

我的示例：

```

987 + 23 = 1010

7 -> 8 -> 9

3 -> 2 --> 0（(null 补 0)）



l1 + l2 + payload(0) = 0,payload:1 - >        dummyNode -> 0 ->
    l1 + l2 + payload(1) = 1,payload:1 ->       dummyNode -> 0 -> 1 ->
      l1 + l2 + payload(1) = 0,payload:1 ->       dummyNode -> 0 -> 1 -> 0 ->
        l1(null) + l2(null) + payload(1) = 1,payload:0 -> over!!!  dummyNode -> 0 -> 1 -> 0 -> 1

```

- 构建 dummyNode，用于承载相加后的结果
- 对两个链表中的“每一对”节点进行相加操作，结果记为 sum，并且计算对应的 payload
  - 对 sum = sum % 10，再加入到 dummyNode 中（保证如果 sum >= 10 时，能够正确进位）
  - 计算 payload = sum / 10, 修改全局 payload 的值（保证进位后的值能够利用起来）
- 如果链表有“错位”发生（一个还有节点，一个为 null），对 null 进行补 0 操作，保证能够相加
- 当“每一对”计算完毕后，进行后续处理，最后返回 dummyNode
  - 边界：如果 payload 还有值，需要继续计算（例如上面的例子：百进千）

## 代码

```js
var addTwoNumbers = function (l1, l2) {
  let dummyNode = new ListNode(0);
  let _run = dummyNode,
    sum = (payload = 0);
  while (l1 || l2) {
    // 遇null 补 0 操作
    let x = l1 ? l1.val : 0;
    let y = l2 ? l2.val : 0;
    let sum = x + y + payload;
    _run.next = new ListNode(sum % 10);
    _run = _run.next;
    payload = parseInt(sum / 10);

    // 常规操作，保证“一对一对”进行
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }
  // post process
  if (payload > 0) {
    _run.next = new ListNode(payload);
  }
  return dummyNode.next;
};
```

#### 复杂度

Time: 我们需要遍历“每一对”链表中的节点 => O(n)

Space: 一个 虚拟节点 => O(1)
