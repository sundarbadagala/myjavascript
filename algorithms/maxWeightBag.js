const collection = [{ id: "a", val: 10, weight: 3, }, { id: "b", val: 6, weight: 8, }, { id: "c", val: 3, weight: 3, },];
const bagCapacity = 12;

function Max(data, capacity) {
    let sum = 0
    let pevSum = 0
    for (let i = 0; i < data.length+1; i++) {
        if (sum < capacity) {
            sum += data[i].weight
        }else{
            sum -= data[i-1].weight
            return sum
        }

    }
    return sum
}

console.log(Max(collection, bagCapacity));
