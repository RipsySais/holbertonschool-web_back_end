function hasValuesFromArray(set, array) {
    if (!(set instanceof Set) || !Array.isArray(array)) {
        return false;
    }
    
    return array.every(element => set.has(element));
}

export default hasValuesFromArray;
