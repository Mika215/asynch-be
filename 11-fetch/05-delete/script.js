/* becode/javascript
 *
 * /09-fetch/05-delete/script.js - 11.5: delete an element
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here
  const userInput = document.getElementById("hero-id");
  const url = "http://localhost:3000/heroes";
  document.getElementById("run").addEventListener("click", async () => {
    const response = await fetch(url);
    const xMenList = await response.json();
    const userID = parseInt(userInput.value);
    let match = false;
    xMenList.forEach((xMen) => {
      // the problem starts here what the hel is the response2 variable doing here?
      if (xMen.id === userID) {
        fetch(`${url}/${xMen.id}`, {
          method: "DELETE",
        })
          .then(() => {
            console.log(`You have removed "${xMen.name}"\nSee detailes below`);
            console.log(xMen);
          })
          .catch((err) => {
            console.error(err);
          });
        //  console.log(`You have removed " ${xMen.name} " see detailes below`);

        match = true;
      }
    });
    if (match !== true) {
      console.log(`ID No."${userID}" doesn't exist`);
    } else {
      match = false;
    }
  });
})();
