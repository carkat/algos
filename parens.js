const test = (str, //accepts one param
    stack = [], unMatchedClosingBracket = false, open = '({[', close = ')}]',
    evaluateEachCharacter = str.split('').forEach(
        x => open.includes(x) ? stack.push(x) 
            : close.includes(x) && (close.indexOf(x) === open.indexOf(stack.slice(-1))) ? stack.pop()
            : unMatchedClosingBracket = true)
) => !unMatchedClosingBracket && stack.length === 0

console.log('testA is: ', test('{}{(())[[]][({})]()}'))
console.log('testB is: ', test('{}{(())[[]][({})]()(}'))
