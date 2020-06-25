// 反转一个单链表。
// 示例:
// 输入: 1->2->3->4->5->NULL
// 输出: 5->4->3->2->1->NULL

// https://leetcode-cn.com/problems/reverse-linked-list/

class ListNode {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}

let node5 = new ListNode(5, null);
let node4 = new ListNode(4, node5);
let node3 = new ListNode(3, node4);
let node2 = new ListNode(2, node3);
let head = new ListNode(1, node2);

// 指针法
// var reverseList = function (head) {
//   if (head == null || head.next == null) {
//     return head;
//   }
//   let pre = null;
//   let curr = head;

//   while (curr != null) {
//     const next = curr.next;
//     curr.next = pre;
//     pre = curr;
//     curr = next;
//   }

//   return pre;
// };

var reverseList = function (head) {
  if (head == null || head.next == null) {
    return head;
  }
  let curr = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return curr;
};
