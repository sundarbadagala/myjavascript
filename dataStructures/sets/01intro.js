//A Set is a special type collection – “set of values” (without keys), where each value may occur only once.

//Its main methods are:

//new Set(iterable) – creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.
//set.add(value) – adds a value, returns the set itself.
//set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
//set.has(value) – returns true if the value exists in the set, otherwise false.
//set.clear() – removes everything from the set.
//set.size – is the elements count.

//The same methods Map has for iterators are also supported:

//set.keys() – returns an iterable object for values,
//set.values() – same as set.keys(), for compatibility with Map,
//set.entries() – returns an iterable object for entries [value, value], exists for compatibility with Map.


//-----------------------------------------

//a set is a data structure that can hold a collection of values the values however must be unique
//sets can contain a mix of different data types you can store strings booleans numbers or even objects all in the same set
//sets are dynamically sized you don't have to declare the size of a set before creating it
//sets do not maintain an insertion order an item inserted first does not necessarily mean it is the first element in the set
//sets are iterables they can be used with a for off loop