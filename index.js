const express = require("express");  //Require dependencies

const geo = require("geoip-lite");

const PORT = 3000;   //Define the PORT

const app = express();

app.set("trust proxy", true);

app.get("/", function (req, res) {
  
    const ip = "182.71.173.3";   //Extract the IP address from the request

  if (!ip)
    return res.status(500).json({
      error: true,
      message: "Sorry, we couldn't extract your IP address at the moment.",
    });

  let details = geo.lookup(ip);  //Extract details the from IP address
  console.log(details.country,details.region,details.city)
  return res.send({   
          //Send the data to the client
    country: details.country,
    state: details.region,
    city: details.city,
    Ip:ip
  });
 
});
  
app.listen(PORT, () => {          // Start the server
    console.log('Listening to Port 3000');
});

