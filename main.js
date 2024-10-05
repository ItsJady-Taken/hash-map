class HashMap {
    constructor(size){
        this.size = size;
        this.buckets = new Array(size).fill(null).map(() => []);
    }
    hash(key) {
        let hashCode = 0;

        for (let i = 0; i < key.length; i++) {
            hashCode += key.charCodeAt(i);
        }
        return hashCode % this.size;
    }
    set(key, value) {
        const index = this.hash(key);
        const bucket = this.buckets[index];
        for(let i = 0; i < bucket.length; i++) {
            if(bucket[i][0] === key) {
                bucket[i][1] = value;
                return;
            }
        }
        bucket.push([key, value]);
    }
    get(key) {
        const index = this.hash(key);
        const bucket = this.buckets[index];
        for(let i = 0; i < bucket.length; i++) {
            if(bucket[i][0] === key) {
                return bucket[i][1];
            }
        }
        return null;
    }
    has(key) {
        const index = this.hash(key);
        const bucket = this.buckets[index];
        for(let i = 0; i < bucket.length; i++) {
            if(bucket[i][0] === key) {
                return true;
            }
        }
        return false;
    }
    remove(key) {
        const index = this.hash(key);
        const bucket = this.buckets[index];
        for(let i = 0; i < bucket.length; i++) {
            if(bucket[i][0] === key) {
                bucket.splice(i, 1);
                return;
            }
        }
    }
    length() {
        let count = 0;
        for(let i = 0; i < this.buckets.length; i++) {
            count += this.buckets[i].length;
        }
        return count;
    }
    clear() {
        this.buckets = new Array(this.size).fill(null).map(() => []);
    }
    values() {
        const values = [];
        for(let i = 0; i < this.buckets.length; i++) {
            const bucket = this.buckets[i];
            for(let j = 0; j < bucket.length; j++) {
                if(!values.includes(bucket[j][1])) {
                    values.push(bucket[j][1]);
                }
            }
        }
        return values;
    }
    entries() {
        const entries = [];
        for(let i = 0; i < this.buckets.length; i++) {
            const bucket = this.buckets[i];
            for(let j = 0; j < bucket.length; j++) {
                entries.push(bucket[j]);
            }
        }
        return entries;
    }
}
