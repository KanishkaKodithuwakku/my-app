export const vanSelector = (collection, { category = '' }) => { 

    return collection.filter(item => { 
        const matchCategory = category ? item.category : true;
        return matchCategory;
    }) 

}
