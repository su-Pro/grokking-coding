/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**     1 + 2 翻转几个？
 *      n = 3
 *      m = 1 (入口)
 *      head
 * 1 -> [2 -> 3 -> 4] -> 5  m = 2 n = 4
 *
 * 1 -> 4 -> 3 -> 2 -> 5
 *
 *                3tail 指针处理  tailNode = (5)
 *                4 何时记录？
 *
 */

/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function (head, m, n) {
  let post;
  if (m === 1) {
    return reverse(head, n); // 4
  }
  head.next = reverseBetween(head.next, m - 1, n - 1); // 4
  return head;
  /**
   *
   * base-case: n = 1  tailNode
   *
   * let curHead = xxxx
   * head.next = tailNode
   * return curHead
   * @param {*} head 链表头部
   * @param {*} n 翻转几个
   */
  function reverse(head, n) {
    if (n === 1) {
      post = head.next; //5
      return head; // 4
    }
    let newHead = reverse(head.next, n - 1);
    head.next.next = head; // head => 3
    head.next = post; // head.next = null;
    return newHead;
  }
};
