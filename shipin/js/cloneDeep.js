const cloneDeep = (obj = {}) => {
    if (typeof obj !== 'object' || typeof obj == null) {
        return obj;
    }

    let result = obj instanceof Array ? [] : {}

    for (key in obj) {
        if (obj.hasOwnProperty(key)) {
            result[key] = cloneDeep(obj[key])
        }
    }

    return result;
}

const a = {
    name: 'dddd',
    age: 12,
    address: {
        city: 'fff'
    }
}


const b = cloneDeep(a);
b.name = 'lilian';
console.log(b)
console.log(a)