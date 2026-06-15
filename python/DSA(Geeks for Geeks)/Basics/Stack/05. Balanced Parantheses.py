# // Balanced Parantheses....

def matching(a, b) :
    return ((a == '(' and b == ')') or
            (a == '{' and b == '}') or 
            (a == '[' and b == ']'))

def isBalanced(str):
    s = []

    for i in range(len(str)):
        x = str[i]
        if x == '(' or x == '[' or x == '{' :
            s.append(x)
        else :
            if len(s) == 0:
                return False
            elif matching(s[len(s) - 1], x) == False:
                return False
            else:
                s.pop()
    
    return len(s) == 0


print(isBalanced('(){()}]()'))