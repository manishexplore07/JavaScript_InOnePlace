let foods = ['bread', 'rice', 'meat', 'pizza'];
foods.forEach(function (food) {
console.log(food);
})
/*A method for array iteration, often preferred for readability.
Parameters: One for item, optional second for index.
Using return is similar to continue in traditional loops.
Not straightforward to break out of a forEach loop.
When you need to perform an action on each array element
and don't need to break early.*/

let arr = [1,2,3,4,5,6,7];

arr.forEach(function(num,index){
    console.log(num,index);
});

/*------------------------ARRAYS METHOD------------------

Array, isArray() checks if a variable is an array.
Length property holds the size of the array.
Common Methods:
push/pop: Add or remove to end.
shift/unshift: Add or remove from front.
splice: Add or remove elements.
toString: Convert to string.
sort: Sort elements.
valueOf: Get array itself.
Arrays also use reference like objects.
De-structuring also works for Arrays.*/