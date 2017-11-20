//one liner for the lulz
//const test = (str,stack = [], unMatchedClosingBracket = false, open = '({[', close = ')}]',evaluateEachCharacter = str.split('').forEach(x => open.includes(x) ? stack.push(x) : close.includes(x) && (close.indexOf(x) === open.indexOf(stack.slice(-1))) ? stack.pop(): unMatchedClosingBracket = true)) => !unMatchedClosingBracket && stack.length === 0
const test = (str,stack = [], unMatchedClosingBracket = false) => {
    const open = '({[', close = ')}]'
    const matchingBrace = x => close.indexOf(x) === open.indexOf(stack.slice(-1))
    const evaluateEachCharacter = str.split('').forEach(x => open.includes(x) 
            ? stack.push(x) 
            : close.includes(x) && matchingBrace(x)
            ? stack.pop()
            : unMatchedClosingBracket = true)
    return  !unMatchedClosingBracket && stack.length === 0
}

console.log('testA is: ', test('{}{(())[[]][({})]()}'))
console.log('testB is: ', test('{}{(())[[]][({})]()(}'))
