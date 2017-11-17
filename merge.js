const mergeSort = (array,sign,sorted = []) => {
    if(array.length === 1)
        return array

    const [firstHalf, secondHalf] = split(array)
    const [mergeA, mergeB] = [new iter(mergeSort(firstHalf,sign)), new iter(mergeSort(secondHalf,sign))]
    while(mergeA.shouldContinue()|| mergeB.shouldContinue())
        sorted.push(comparison(mergeA,mergeB,sign))
    return sorted
}

function iter(data){
    let count = 0
    this.next = function(){
        count++
        return data[count - 1]
    }
    this.current = function(){
        return data[count]
    }
    this.shouldContinue = function(){
        return count < data.length
    }
        
    this.next
    return this

}
const comparison = (iterA,iterB,lt_or_gt) => 
    (isNaN(iterA.current() - iterB.current()))// either ma or mb current value is undefined
    ? (iterA.next() || iterB.next())          // push only the defined value
    : eval('(iterA.current() '+ lt_or_gt +'= iterB.current())') // otherwise use the sign to determind which of the two is greater than/lessthan
    ? (iterA.next()) //push a if a gt/lt b
    : (iterB.next()) // push b if b gt/lt a

const split = a => {
    const splitLen = Math.floor(a.length / 2)
    return [a.slice(0,splitLen), a.slice(splitLen, a.length)]
}
console.log(mergeSort([...Array(100000).keys()], '>'))