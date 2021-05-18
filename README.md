This code demonstrates the following:
1.How to use React icons library

2.how to destructure an object and use an index to track each objective 
const {name,job,image,text}=people[index]

3. How to get around randomly selecting an object to display
const randomPerson =()=>{
    let randomNumber = Math.floor(Math.random() * people.length)
    if(randomNumber === index){
      randomNumber = index + 1
    }
    setIndex(checkNumber(randomNumber))
  }
  
Notice that Math.random will return a float number that needs to be floored. Also need to check if the random number is equal to the object already selected. 
If the random number is the same then just add one and then run it through the checkNumber function to make sure it is not less or more than the array size.


