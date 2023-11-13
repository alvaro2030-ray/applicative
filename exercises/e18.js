/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  // feel free to import your `maxBy` or `minBy` methods from previous lessons
  let yearCount = {};

  for(let i = 0; i < data.asteroids.length; i++){
    let item = data.asteroids[i];
    if(yearCount[item.discoveryYear]){
      yearCount[item.discoveryYear]++; 
    }else{
      yearCount[item.discoveryYear] = 1;
    }
  }

  let maxCount = 0;
  let repeatingYear = null;

  for(let year in yearCount){
    if(yearCount[year] > 1 && year > 
maxCount){
      maxCount = yearCount[year];
      repeatingYear = year;
    }
  }
    return repeatingYear

}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
