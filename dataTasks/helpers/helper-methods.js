//===================================================SORT DATA====================================
export function sortData(data, field, order=1) {
  data = JSON.parse(JSON.stringify(data));
  const sortedData = [...data].sort((a, b) => {
    let a1 = a[field];
    let b1 = b[field];
    if (a1 > b1) {
      return order ? 1 : -1;
    } else if (a1 < b1) {
      return order ? -1 : 1;
    } else {
      return 0;
    }
  });
  return sortedData;
}
//===================================================SORT ASCENDING DATA====================================
export function sortAscendingData(data, field) {
  return sortData(data, field, 1);
}
//===================================================SORT DESCENDING DATA====================================
export function sortDescendingData(data, field) {
return sortData(data, field, 0);
}
//===================================================ADD DATA====================================
export function addData(data, reqBody) {
  return [...data, reqBody];
}
//===================================================ADD DATA ELEMENT====================================
export function addDataValues(data, element) {
  for (let i = 0; i < data.length; i++) {
    data[i] = { ...data[i], ...element };
  }
  return data;
}

//===================================================UPDATE DATA====================================
export function updateData(data, reqBody, field) {
  const isAlreadyExist = data.some((item) => item[field] === reqBody[field]);
  if (isAlreadyExist) {
    return data.map((item) => {
      if (item[field] === reqBody[field]) {
        return { ...item, ...reqBody };
      }
      return item;
    });
  } else {
    return [...data, reqBody];
  }
}
//===================================================SEARCH DATA==================================
export function searchData(data, field, value) {
  return data.filter((item) =>
    item[field]
      ?.toString()
      .toLowerCase()
      .includes(value.toString().toLowerCase())
  );
}
//===================================================SEARCH DATA VALUE==================================
export function searchDataValue(data, field, searchValue, getValue) {
    return searchData(data, field, searchValue).map(item => item[getValue])
}
//===================================================IS DATA AVAILABLE==================================
export function isDataAvailabe(data, field) {
  return data.some((item) => isSameObjects(item, field));
}
//===================================================IS SAME OBJECTS==================================
export function isSameObjects(o1, o2) {
  for (var p in o1) {
    const isObject =
      o1[p] instanceof Object &&
      o2[p] instanceof Object &&
      !Array.isArray(o1[p]) &&
      !Array.isArray(o2[p]);
    const isArray = Array.isArray(o1[p]) && Array.isArray(o2[p]);
    if (isObject) {
      isSameObjects(o1[p], o2[p]);
    } else if (isArray) {
      if (!isSameArrays(o1[p], o2[p])) return false;
    } else {
      if (JSON.stringify(o1[p]) !== JSON.stringify(o2[p])) {
        return false;
      }
    }
  }
  for (var p in o2) {
    const isObject =
      o1[p] instanceof Object &&
      o2[p] instanceof Object &&
      !Array.isArray(o1[p]) &&
      !Array.isArray(o2[p]);
    const isArray = Array.isArray(o1[p]) && Array.isArray(o2[p]);
    if (isObject) {
      isSameObjects(o1[p], o2[p]);
    } else if (isArray) {
      if (!isSameArrays(o1[p], o2[p])) return false;
    } else {
      if (JSON.stringify(o1[p]) !== JSON.stringify(o2[p])) {
        return false;
      }
    }
  }
  return true;
}
//===================================================IS SAME ARRAYS==================================
export function isSameArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i in arr1) {
    if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
      if (!isSameArrays(arr1[i], arr2[i])) return false;
    } else if (arr1[i] instanceof Object && arr2[i] instanceof Object) {
      if (!isSameObjects(arr1[i], arr2[i])) return false;
    } else {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
  }
  return true;
}
//===================================================REPLACE DATA==================================
export function replaceData(data, key, oldValue, newValue) {
  return data.map((item) => {
    if (item[key] === oldValue) {
      return { ...item, [key]: newValue };
    }
    return item;
  });
}
//===================================================MULTI REPLACE DATA==================================
export function multiReplaceData(data, keys, oldValues, newValues) {
  return data.map((item) => {
    for(let i=0; i<keys.length; i++){
        if(item[keys[i]] === oldValues[i]){
            return {...item, [keys[i]]:newValues[i]}
        }
    }
    return item;
  });
}
//===================================================CHANGE DATA==================================
export function changeData(data, obj){
    return data.map(item =>{
        for(let i in item){
            if(obj[i]){
                item[i] = obj[i]
            }else{
                item[i] = item[i]
            }
        }
        return item 
    })
}
//==================================================REMOVE DUPLICATION====================
export function removeDuplicateData(arr=[], key='id'){
  const newArr=[]
  for(let i=0; i<arr.length; i++){
      if(newArr.filter(item => item[key] === arr[i][key] ).length === 0){
          newArr.push(arr[i])
      }
  }
  return newArr
}

//==================================================REMOVE DUPLICATION FROM START====================
export function removeDuplicateDataFromStart(arr=[], key='id'){
  return removeDuplicateData(arr, key)
}
//==================================================REMOVE DUPLICATION FROM LAST====================
export function removeDuplicateDataFromLast(arr=[], key='id'){
  const newArr=[]
  for(let i=arr.length-1; i>=0; i--){
      if(newArr.filter(item => item[key] === arr[i][key] ).length === 0){
          newArr.push(arr[i])
      }
  }
  return newArr
}
