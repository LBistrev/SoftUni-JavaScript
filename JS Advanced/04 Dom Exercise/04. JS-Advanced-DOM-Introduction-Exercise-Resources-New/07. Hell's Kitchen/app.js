function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   let restaurants={};
   let highestSalary = 0;
   let bestRestaurant = '';
   let bestSalary = Number.MIN_SAFE_INTEGER;
   function onClick () {
      // get input
      let input = document.querySelector('#inputs>textarea').value
      // parse input to array
      let parsedInput = JSON.parse(input)
      // split input by the required delimeters
      parsedInput.forEach((element)=>{
         let averageSalary = 0
         // -- get the restaurant name and the workers
         let tokens = element.split(' - ')
         let restaurantName = tokens[0]
         let workers = tokens[1].split(', ')
         // ---create restaurant objects with properties {workerName:workerSalary}, averageSalary, bestSalary(highest)
         // ---- iterate over the workers array and split it again, get the names and then the salaries and add them to the respective objects
         let workersList = []
         for(let worker of workers)
         {
            let workerTokens = worker.split(' ')
            let workerName = workerTokens[0]
            let workerSalary = Number(workerTokens[1])
            averageSalary+=workerSalary
            workersList.push({workerName,workerSalary})
         }
         // ----- find the average
         averageSalary=Number((averageSalary/workers.length).toFixed(2))
         restaurants[restaurantName]={
            restaurantName,
            workers,
            averageSalary,
            highestSalary
         }
         // ----- sort the salaries in descending order, 
         // ----- find the best salary
         workersList=workersList.sort((a,b)=>b.workerSalary-a.workerSalary)
         highestSalary = workersList[0].workerSalary
         // if the restaurant exists, update the workers
         if(restaurants[restaurantName]!==undefined)
         {
            workersList.concat(restaurants[restaurantName].workers)
            restaurants[restaurantName]={
               restaurantName,
              workersList,
               averageSalary,
               highestSalary
            }
         }
         // find the best restaurant, by finding the highest salary
 
         if(restaurants[restaurantName].highestSalary>bestSalary)
         {
            bestRestaurant=restaurants[restaurantName]
            bestSalary=restaurants[restaurantName].highestSalary
         }
 
         
      })
      // ------ output everything to the specifiedd locations
      let firstString = `Name: ${bestRestaurant.restaurantName} Average Salary: ${bestRestaurant.averageSalary.toFixed(2)} Best Salary: ${bestRestaurant.highestSalary.toFixed(2)}`
      let secondString = ''
 
      bestRestaurant.workersList.forEach((element)=>{
         secondString+=`Name: ${element.workerName} With Salary: ${element.workerSalary} `
      })
 
      let bestRestaurantParagraph = document.querySelector('#bestRestaurant>p')
      bestRestaurantParagraph.textContent=firstString
      let bestWorkersParagraph = document.querySelector('#workers>p')
      bestWorkersParagraph.textContent=secondString
   
   }
}