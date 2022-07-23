class HashTable{
    constructor(size){
        this.data = new Array(size)
    }
    
    _hash(key){
        let hash = 0
        for(i = 0; i < key.length; i++){
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash
    }
    
    set(key, value){
        let address = this._hash(key)
        if(!this.data[address]){
            this.data[address] = []
        }
        this.data[address].push([key, value])
    }
    get(key){
        let address = this._hash(key)
        const cB = this.data[address]
        
        if(cB.length){
            for(let i = 0; i < cB.length; i++){
                if(cB[i][0] === key){
                    return cB[i][1]
                }
            }
        }
    }
}
