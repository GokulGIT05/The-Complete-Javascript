/******************
 * Promises
 */

 console.log("Promises.");

 var getIds = new Promise((resolve,reject) => {
     // resolve & reject are build in executor function of Promise.
    setTimeout(() => {
         resolve([523, 883, 432, 974]);
        // reject([523, 883, 432, 974]);

    }, 1500); // ms
 });

// new Promise ( Arrow Function );
// There are two methos used to process promises. then() & catch()
/*
getIds
    .then(ids => {
        console.log("Succesfully Executed. Result from Resolve function");
        console.log(ids);
    })
    .catch(error => {
        console.log("Error Occurred. Result from Reject function");
        console.log(error);
    });
*/

var getRecipe = recipeId => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const recipe = {
                title: 'Fresh tomato pasta', 
                publisher: 'Jonas'
            };
            resolve(`${recipeId}: ${recipe.title}`);

        }, 1500);
    });
};


const getRelated = publisher => {
    return new Promise((resolve, reject) => {
        setTimeout(pub => {
            const recipe = {title: 'Italian Pizza', publisher: 'Jonas'};
            resolve(`${pub}: ${recipe.title}`);
        }, 1500, publisher);
    });
};

// Promise Consume in ES6
/*
getIds
    .then(ids => {
        console.log("Succesfully Executed. Result from Resolve function");
        console.log(ids);
        return getRecipe(ids[2]);  // Method chaining
    }).then( recipe => {
        console.log(recipe)
        return getRelated("Gokul"); // we have to pass string. so hardcoding. bcoz we are returning string not object.
    }).then(pub => {
        console.log(pub)
    }).catch(error => {
        console.log("Error Occurred. Result from Reject function");
        console.log(error);
    });
*/

// ES 8  ways 
/******************
 * Async & Await
 */

 async function getRecipeAW (){
     const reciepeIds = await getIds;
     console.log(reciepeIds);

    const recipe = await getRecipe(reciepeIds[2]);
    console.log(recipe);

    const publisher = await getRelated("Gokul");
    console.log(publisher);

    return recipe;
 }

 // To start Async function we need to call
 // getRecipeAW();
 getRecipeAW ().then(returnAsyncValue => console.log(returnAsyncValue));

console.log(" After Async & Await");