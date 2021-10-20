/* becode/javascript
 *
 * /10-asynchronous/05-promise-get-comments/script.js - 10.5: chargement d'articles et de commentaires (Promise)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // click
    document.querySelector("#run").addEventListener("click", () => {
      window.lib
        .getPosts()
        .then(
          // Your code here
          (resolve, reject) => {
        resolve.forEach(item => {
           window.lib.getComments(item.id).then(
               (comments)=>{
                   item.comments=comments;
               }    
           ) 
        });
        console.log(resolve)
          }
        )
        .catch((reject) => {
          return console.error(reject);
        });
    });
  })();
  