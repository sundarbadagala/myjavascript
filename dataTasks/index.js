import './helpers/helper-prototypes.js'
import {sortData, addData, addDataValues, updateData, searchData, searchDataValue, replaceData, multiReplaceData, changeData} from './helpers/helper-methods.js'
import {sort_data, add_data, add_data_element, update_data, search_data, search_data_value} from './helpers/helper-functions.js'
//==========================================================================================================================================================
import {complexData} from './data/complexDummyData.js'
import {simpleData} from './data/simpleDummyData.js'
import {obj1, obj3, objPassed} from './data/examples.js'
//==========================================================================================================================================================

// const _sortedData = simpleData._sortData('name')
const sortedData = sortData(simpleData, 'class')
//const sorted_data = sort_data(simpleData, 'name')

// const _addedData = simpleData._addData(obj1)
// const addedData = addData(simpleData, obj1)
// const added_data = add_data(simpleData, obj1)

// const _addedDataElement = simpleData._addDataElement(objPassed)
// const addedDataElement = addDataElement(simpleData, objPassed)
// const added_data_element = add_data_element(simpleData, objPassed)

//const _updatedData = simpleData._updateData(obj3, 'id')
// const updatedData = updateData(simpleData, obj3, 'id')
// const updated_data = update_data(simpleData, obj3, 'id')

//const _searchedData= simpleData._searchData('class',8)
//const searchedData = searchData(simpleData, 'class', 8)
//const searched_data = search_data(simpleData, 'class', 8)

//const _searchedDataValue = simpleData._searchDataValue('class',8, 'name')
//const searchedDataValue = searchDataValue(simpleData, 'class', 8, 'name')
//const searched_data_value = search_data_value(simpleData, 'class', 8, 'name')

//const replacedData= replaceData(simpleData, 'class',8,90 )

//const multiReplacedData = multiReplaceData(simpleData, ['class','name'], [7, 'ram kumar'],[99,'bahubali'])

// const changedData = changeData(simpleData, {'class':90, name:'king', color:'red'})


console.log(sortedData)