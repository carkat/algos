const bubble = it => {
    if(it.isLastIteration()) 
        return it.data()
    if(it.getNext() > it.readNext()) it.swap()
    return bubble(it)
}

function bubbleIterator(a){
    let index = -1
    let top = a.length
    let last = function(){
        return a[a.length]
    }
    this.isLastIteration = function(){
        return top <= 0
    }
    this.swap = function(){
        [a[index], a[index+1]] = [a[index+1], a[index]]
    }
    this.readNext = function(){
        return a[index + 1]
    }
    this.getNext = function(){
        if(index === a.length || index >= top){
            index = -1
            top--
        }
        return a[++index]
    }
    this.isLast = function(){
        return this.current() === this.last
    }
    this.data = function(){
        return a
    }
    return this
}

const test = bubbleIterator([3,2,7,5,8,9,0,1,3,52,3254,36,5626])
console.log(bubble(test))

// console.log(bubble([3,2,7,5,8,9,0,1,3,52,3254,36,5626],0))