/* becode/javascript
 *
 * /09-fetch/04-add/script.js - 11.4: add an element
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
  
    const recievedName = document.getElementById("hero-name");
    const recievedAlterEgo = document.getElementById("hero-alter-ego");
    const recievedPower = document.getElementById("hero-powers");
    document.getElementById("run").addEventListener("click", () => {
      // const response= await fetch("http://localhost:3000/heroes");
      // const heroesList= await response.json();
  
      const url = "http://localhost:3000/heroes";
  
      let userObject = {};
      if (
        recievedName.value === "" &&
        recievedAlterEgo.value === "" &&
        recievedPower.value === ""
      ) {
        console.log(
          "Nothing recieved \nTry to fill all the submission form fileds"
        );
      } else if (
        recievedName.value === "" ||
        recievedAlterEgo.value === "" ||
        recievedPower.value === ""
      ) {
        console.log(
          "Ooops! \nat list on of the submission form fileds is not completed "
        );
      } else {
        userObject.name = recievedName.value;
        userObject.alterEgo = recievedAlterEgo.value;
        userObject.power = recievedPower.value.split(","); //spliting the userinput(string) by comma & qotation
        fetch(url, {
          method: "post",
          body: JSON.stringify(userObject),
          headers: {
            "content-type": "application/json; charset=UTF-8",
          },
        })
          .then((response) => response.json())
  
          .then((json) => console.log(json));
      }
    });
  })();
  