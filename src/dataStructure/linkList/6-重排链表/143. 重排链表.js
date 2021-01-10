/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
	if (head === null || head.next === null) {
		return head
	}
	/**
	 * 1. 找到中间node，一刀两断 N1（head -> middle） 和 N2(middle.next -> tail)     
	 * 2. reverse (N2)
	 * 3. merge (N1,N2)
	 * 
	 */
	let N2 = findMiddle(head);
	reverse(N2);
	merge(head, N2);
	return head;
	/**
	 * step merge N1 N2 one by one
	 * 
	 * return dummyHead.next -> -> ->...
	 * 
	 */
	function merge(N1, N2) {
		if (N1 === null) {
			return N2;
		} else if (N2 === null) {
			return N1;
		}
		let dummyHead = new ListNode(-1),
			dummyRun = dummyHead;
		let runN1 = N1,
			runN2 = N2;
		while (runN1 !== null && runN2 !== null) {
			// 一次连接两个
			dummyRun.next = runN1;
			dummyRun = dummyRun.next;
			dummyRun.next = runN2;
			dummyRun = dummyRun.next;
			runN1 = runN1.next;
			runN2 = runN2.next;
		}
		// 边界,只能左边有剩余，因为中点元素会让左边多 1,2,3 N1: 1,2
		if (runN1 !== null) {
			dummyRun.next = runN1;
		}
		return dummyHead.next;
	}
	/**
	 * 翻转链表head
	 * 
	 * 返回翻转后的链表头部
	 */
	function reverse(head) {
		if (head === null || head.next === null) {
			return head;
		}
		let newHead = reverse(head.next);
		head.next.next = head;
		head.next = null;
		return newHead;
	}
	/**
	 * 找到中点元素，返回以它为首的链表
	 */
	function findMiddle(head) {
		let slow = head,
			fast = head;
		while (fast !== null && fast.next !== null) {
			fast = fast.next.next;
			slow = slow.next;
		}
		return slow;
	}

};