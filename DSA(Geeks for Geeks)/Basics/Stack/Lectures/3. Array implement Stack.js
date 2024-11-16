// Array implementation of Stack

/**
 * In Array we do insersion and deletion at the end.
 * push to insert and pop to remove from the end
 */

let st = [];
st.push(10);
st.push(20);
console.log(st.pop());
st.push(30);
console.log(st[st.length -1]); // peek()
console.log(st.length); // size()
console.log(st);