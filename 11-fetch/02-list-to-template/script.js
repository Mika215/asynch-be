/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: list to template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  const tpl = document.querySelector("#tpl-hero");
  const target = document.querySelector("#target");

  document.querySelector("#run").addEventListener("click", async () => {
    const response = await fetch("http://localhost:3000/heroes");

    // your code here
    const xMenList = await response.json();
    xMenList.forEach((xMen) => {
      const newTPL = tpl.content.cloneNode(true);

      let newName = newTPL.querySelector(".name");
      let newAlterEgo = newTPL.querySelector(".alter-ego");
      let newPowers = newTPL.querySelector(".powers");

      newAlterEgo.textContent = xMen.alterEgo;
      newPowers.textContent = xMen.abilities; //before this property name was saved us "powers"
      newName.textContent = xMen.name;

      target.append(newTPL);
    });
  });
})();
