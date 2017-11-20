//one liner for the lulz
// const mergeSort = (array,sign,sorted = []) => array.length === 1 ? array: (([left, right]) => new mergeSortIterator(mergeSort(left,sign)).merge(new mergeSortIterator(mergeSort(right,sign)), sign))(split(array))
const mergeSort = (array,sign, sorted=[]) =>{
    if(array.length === 1) 
        return array
    const [left, right] = split(array)
    const [sortedLeft, sortedRight] = [
        new mergeSortIterator(mergeSort(left,sign)), 
        new mergeSortIterator(mergeSort(right,sign))
    ]
    return sortedLeft.merge(sortedRight,sign)
}

function mergeSortIterator(data){
    let count = 0
    this.merge = function(r,sign,sorted = []) {
        while(this.hasAdditionalElements()|| r.hasAdditionalElements())
            sorted.push(smallestOrLargest(this,r,sign))
        return sorted
    }
    this.next = function(){
        count++
        return data[count - 1]
    }
    this.current = function(){
        return data[count]
    }
    this.hasAdditionalElements = function(){
        return count < data.length
    }
        
    return this
}

const smallestOrLargest = (left,right,lt_or_gt) => 
    (isNaN(left.current() - right.current()))// either ma or mb current value is undefined
    ? (left.next() || right.next())          // push only the defined value
    : eval('(left.current() '+ lt_or_gt +'= right.current())') // otherwise use the sign to determind which of the two is greater than/lessthan
    ? (left.next()) //push a if a gt/lt b
    : (right.next()) // push b if b gt/lt a

const split = (a, len = Math.floor(a.length / 2)) => [a.slice(0,len), a.slice(len, a.length)]

console.log(mergeSort([...Array(100000).keys()], '>'))