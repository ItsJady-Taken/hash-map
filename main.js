function HashMap() {
    return {
        hash(key) {
            let hash = 0;
            for (let i = 0; i < key.length; i++) {
                hash += key.charCodeAt(i);
            }
            return hash % 101;
        },
        set(key, value) {
            const index = this.hash(key);
            this[index] = value;
            
            
        },
    };
}

