const fetch = require("node-fetch");

// function that checks if an object has given property
function isPropertyThere(data, searchedProperty ){
    if (data.hasOwnProperty(searchedProperty)){
        return true;
    }
    else {
        for (const property in data) {
            if (typeof data[property] === 'object'){
                if (isPropertyThere(data[property], searchedProperty)){
                    return true;
                }
            }
        }        
    }
    return false;
}

// function that fetches the API and then calls the 'isPropertyThere' function
function doesPropertyExist(property) {
    fetch('https://gorest.co.in/public-api/categories').then(response => {
        if (response.ok)
          return response.json();
        else
          throw new Error('Network error');
        }).then(data => {
            const existence = isPropertyThere(data, property) ? "exists" : "doesn't exist";
            console.log(`Property ${property} ${existence}`);
        });
}

doesPropertyExist('movies'); 