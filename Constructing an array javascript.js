class Person{
    constructor(){
        this.length = 0
        this.data = {}
    }
    get(index){
        return this.data[index]
    }
    push(item){
        this.data[this.length] = item
        this.length++
        return this.length
    }
    pop(){
       delete this.data[this.length - 1] 
       this.length--
    }
    delete(index){
        const item = this.data[index]
        this.shiftItems(index)
    }
    shiftItems(index){
        for (let i = index; i < this.length - 1; i++){
            this.data[i] = this.data[i + 1]
        }
        delete this.data[this.length - 1]
    }
    arrayToString(){
        let string = ''
        for(let i = 0; i < this.length; i++){
            string = string + this.data[i]
        }
        console.log(string)
        return string
    }
}


//test
const x = new Person
x.push(1)
x.push(2)
x.push('amanda')
x.arrayToString()
console.log(x)
