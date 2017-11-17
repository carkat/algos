const bubble = it => {
    if(it.isLastIteration()) 
        return it.value()
    if(it.getNext() > it.readNext()) 
        it.swap()
    return bubble(it)
}

function bubbleIterator(data){
    let index = -1
    let top = data.length
    let last = function(){
        return data[data.length]
    }
    this.isLastIteration = function(){
        return top <= 0
    }
    this.swap = function(){
        [data[index], data[index+1]] = [data[index+1], data[index]]
    }
    this.readNext = function(){
        return data[index + 1]
    }
    this.getNext = function(){
        if(index === data.length || index >= top){
            index = -1
            top--
        }
        return data[++index]
    }
    this.isLast = function(){
        return this.current() === this.last
    }
    this.value = function(){
        return data
    }
    return this
}

const test = bubbleIterator([3,2,7,5,8,9,0,1,3,52,3254,36,5626])
console.log(bubble(test))

// console.log(bubble([3,2,7,5,8,9,0,1,3,52,3254,36,5626],0))