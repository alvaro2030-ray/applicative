import { data } from "../data/data";

// SPACE DATA EXERCISE 8
// Return a Planet name by a given moon name
// Return example: 'Planet Name'

export function findPlanetNameByMoon(data, moonName) {
  // Your code goes here...
  var planetsN = data.planets.filter(function(n){
        return n.moons?.includes(moonName);
      }).map(function(n1){
        return n1.name;
      }).find(function(n2){
        return n2;
      })
      
     return planetsN; 
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
