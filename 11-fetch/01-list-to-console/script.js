/* becode/javascript
 *
 * /09-fetch/01-list-to-console/script.js - 11.1: list to console
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.querySelector("#run").addEventListener("click", async () => {
        const response = await fetch("http://localhost:3000/heroes");
        const xMen= await response.json();
        console.log(xMen); 
        // Steps :
        // 1. read the Fetch documentation
        // 2. you must convert the response in a json format
        // 3. display the response in the console
        // NB: here we use an async await function, you can convert it
        //     in a Promise or callbacks functions if you prefer

    });
})();

