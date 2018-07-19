const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.webhook = functions.https.onRequest((request, response) => {
    console.log("request.body.result.parameters : ", request.body.queryResult.parameters)
    // {
    //     toLocation: "30 Rock"
    // }
    let params = request.body.queryResult.parameters;
    let dest = `${params.location}`;
    if(dest == "30 Rock"){(response.send({fulfillmentText:  dest +  " schedule : 10:30 AM, 12:00 PM, 2:00 PM" }));}
    else if(dest == "Journal Square") {response.send({fulfillmentText:   dest +  "/Jersey City schedule : 5:15 PM"});}
    else if(dest == "Newark") {response.send({fulfillmentText:   dest +  " schedule : 5:10 PM"});}
    else if(dest == "Brooklyn") {response.send({fulfillmentText:   dest +  " schedule : 5:00PM, 6:15 PM"});}
    else {response.send({fulfillmentText:   dest +  " schedule is not loading" });}

});
