/******************
 * Async JS
 */

 // Simple Examples
 console.log("Async: Demo Starts...");

 const second = () => {
     setTimeout(() => {
         console.log("Asycn Executed after 2 Seconds");
     }, 2000); // 20 ms
 }

 const first = () => {
     console.log("First Executed");
     second();
     console.log("Executing Ends");
 }

 first();

// Tradiational way of using time-out
// Example for Call Back hell.

function getRecipe() {
        setTimeout(() => {
            const recipeID = [523, 883, 432, 974];
            console.log(recipeID);

            setTimeout(id => {
                const recipe = {title: 'Fresh tomato pasta', publisher: 'Jonas'};
                console.log(`${id}: ${recipe.title}`);

                setTimeout(publisher => {
                    const recipe2 = {title: 'Italian Pizza', publisher: 'Jonas'};
                    console.log(recipe);
                }, 1500, recipe.publisher);

            }, 1500, recipeID[2]);

        }, 1500);
    }

    getRecipe();

// To Resolve this, Promises are introduced.