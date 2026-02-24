What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
getElementById it select specfic id element ,  getElementsByClassName  it select all , it select first css selector, querySelectorAll select  all css selector

How do you create and insert a new element into the DOM?

first create a Element by createElement and then append this element into created div
What is Event Bubbling? And how does it work?
Event bubbling means an event starts from the target element and then moves up to its parent elements. It allows parent elements to also detect events that happened on their children.

What is Event Delegation in JavaScript? Why is it useful?
Event delegation is a technique where a single event listener is added to a parent element to handle events from its child elements. It is useful because it improves performance and works for dynamically added elements without needing separate listeners
 What is the difference between preventDefault() and stopPropagation() methods?
 preventDefault() stops the default action of an event (like preventing form submission or link navigation). stopPropagation() stops the event from bubbling up to parent elements but does not stop the default action.

