function cleanSet(set, startString) {
    if (!(set instanceof Set) || typeof startString !== 'string' || startString.length === 0) {
        return '';
    }
    
    const filteredValues = [];
    
    for (const value of set) {
        if (typeof value === 'string' && value.startsWith(startString)) {
            const remainingPart = value.slice(startString.length);
            if (remainingPart !== value) { // Évite d'ajouter si le découpage ne change rien
                filteredValues.push(remainingPart);
            }
        }
    }
    
    return filteredValues.join('-');
}

export default cleanSet;
