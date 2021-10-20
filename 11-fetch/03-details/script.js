/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    const templetElement = document.querySelector("#tpl-hero");
    const targetList = document.querySelector("#target");
    document.getElementById("run").addEventListener("click", async () => {
      const fechedData = await fetch("http://localhost:3000/heroes");
      const xMenList = await fechedData.json();
  
      const userInput = document.getElementById("hero-id").value;
      const userID = parseInt(userInput); //converting the userInput(string) in to a number
  
      const clonedTemplet = templetElement.content.cloneNode(true);
      let targetName = clonedTemplet.querySelector(".name");
      let targetAlterEgo = clonedTemplet.querySelector(".alter-ego");
      let targetPowers = clonedTemplet.querySelector(".powers");
      let match = false;
      xMenList.forEach((xMen) => {
        if (xMen.id === userID) {
          targetName.textContent = xMen.name;
          targetAlterEgo.textContent = xMen.alterEgo;
          targetPowers.textContent = xMen.abilities;
          targetList.append(clonedTemplet);
          match = true;
          // console.log(match)
        }
      });
      if (match !== true) {
        console.log(`${userID} doesn't exist`);
      } else {
        match = false;
      }
    });
  })();
  