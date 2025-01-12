
class LRUCache {
    constructor(maxLimit=5){
        this._cache = new Map();
        this.maxLimit = maxLimit;
    }

    get(key){
        if(!this._cache.has(key)){
            throw new Error(`There is no data for ${key} in cache`);
        }
        const value = this._cache.get(key);
        this._cache.delete(key);
        this._cache.set(key,value);
        return value;
    }

    put(key,value){
        this._cache.delete(key);
        if(this._cache.size===this.maxLimit){
            this._cache.delete(this._cache.keys().next().value);
        }
        this._cache.set(key,value);
    }

    lestRecentlyUsed(){
        const key = Array.from(this._cache.keys())[0];
        return {key, value:this._cache.get(key)};
    }

    mostRecentlyUsed(){
        const key = Array.from(this._cache.keys())[this._cache.size-1];
        return {key, value: this._cache.get(key)};
    }

    getFullCache(){
        return this._cache;
    }
}

const cache = new LRUCache(5);

// console.log(cache.get('a'));
cache.put('a',1);
cache.put('b',2);
cache.put('c',3);
cache.put('d',4);
cache.put('e',5);
cache.put('f',6);
console.log(cache.getFullCache());
console.log(cache.get('c'));
console.log(cache.getFullCache());
console.log(cache.get('e'));
console.log(cache.getFullCache());
cache.put('g',7);
console.log(cache.getFullCache());
console.log(cache.lestRecentlyUsed());
console.log(cache.mostRecentlyUsed());
cache.put('d',0);
console.log(cache.getFullCache());




