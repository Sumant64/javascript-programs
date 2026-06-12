'''
// Array implementation of Stack

/**
 * In Array we do insersion and deletion at the end.
 * push to insert and pop to remove from the end
 */
'''

st = []
st.append(10)
st.append(20)
print(st)
st.pop()
print(st)
st.append(30)
print(st[len(st) - 1])
print(len(st))