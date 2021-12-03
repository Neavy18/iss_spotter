const { fetchMyIP, fetchCoordsByIP,fetchISSFlyOverTimes } = require('./iss');



fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  
  console.log('It worked! Returned IP:' , ip);
});

fetchCoordsByIP("70.80.224.99", (error, data) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  
  console.log(data);
});

const coords = {latitude: "45.5178", longitude: "-73.6046"};

fetchISSFlyOverTimes(coords, (err, responses) => {
  if (err) {
    console.log("It didn't work!" , err);
    return;
  }
  
  console.log(responses);
});