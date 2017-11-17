let mergeSort = (array,sign,merged = []) => {
    if(array.length === 1)
        return array

    const [firstHalf, secondHalf] = split(array)
    const [mergeA, mergeB] = [new iter(mergeSort(firstHalf,sign)), new iter(mergeSort(secondHalf,sign))]
    while(mergeA.continue()|| mergeB.continue())
        merged.push(comparison(mergeA,mergeB,sign))
    return merged
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
    this.continue = function(){
        return count < data.length
    }
        
    this.next
    return this

}
const comparison = (ma,mb,sign) => 
    (isNaN(ma.current() - mb.current()))
    ? (ma.next() || mb.next())
    : eval('(ma.current() '+ sign +'= mb.current())')
    ? (ma.next())
    : (mb.next())

let split = a => {
    const splitLen = Math.floor(a.length / 2)
    return [a.slice(0,splitLen), a.slice(splitLen, a.length)]
}
console.log(mergeSort([...Array(100000).keys()], '>'))