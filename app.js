const express = require("express");
const app = express();
require("dotenv").config();
const { auth, requiresAuth } = require("express-openid-connect");

//this is a library that serves to create HTTP requests that are present externally.
cost axios = require('axios');

app.use(
  auth({
    authRequired: false,
    auth0Logout: true,
    issuerBaseURL: process.env.ISSUER_BASE_URL,
    baseURL: process.env.BASE_URL,
    clientID: process.env.CLIENT_ID,
    secret: process.env.SECRET,
    idpLogout: true,
  })
);

// req.isAuthenticated is provided from the auth router
app.get("/", (req, res) => {
  res.send(req.oidc.isAuthenticated() ? "Logged in" : "Logged out");
});

// The /profile route will show the user profile as JSON
app.get("/profile", requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user));
});

// GET /teams?id/resources API route to list resources of specific team
app.get("/teams?id/resources", (req, res) => {
  try{
    const request = {
     "schema_version": "",
     "snap_token": "",
     "depth": 20
   },
   "entity": {
     "type": "team",
     "id": "1"
   },
   "permission": "list_resources",
   "subject": {
     "type": "user",
     "id": //USER ID THAT COME FROM REQUEST PARAMS: id,
     "relation": ""
   },
 };
    const outPut = async() => {
       
        const response = awit axiox.post('GIVE URL HERE', request);
      if(response.status === 200){
        return response.data;
      }
      return false;
    }
  }
  catch (error)
  {
    return false;
  }
  // create a middleware for that get receiver
  // that sends a REST API request to:
  // "localhost:3476/v1/permissions/check" endpoint
  // with body params:
  /*
   {
   "metadata": {
     "schema_version": "",
     "snap_token": "",
     "depth": 20
   },
   "entity": {
     "type": "team",
     "id": "1"
   },
   "permission": "list_resources",
   "subject": {
     "type": "user",
     "id": //USER ID THAT COME FROM REQUEST PARAMS: id,
     "relation": ""
   },
 }
 */
});

// GET /teams?id/resources?id API route to view resource

app.get("/resources?id", (req, res) => {
  // create a middleware for that get receiver
  // that sends a REST API request to:
  // "localhost:3476/v1/permissions/check" endpoint
  // with body params:
  /*
   {
   "metadata": {
     "schema_version": "",
     "snap_token": "",
     "depth": 20
   },
   "entity": {
     "type": "team",
     "id": "1"
   },
   "permission": "view",
   "subject": {
     "type": "user",
     "id": //USER ID THAT COME FROM REQUEST PARAMS: id,
     "relation": ""
   },
 }
 */
});

// PUT /resources?id API route to edit resource

app.put("/resources?id", (req, res) => {
  
  try{
    const request = {
     "schema_version": "",
     "snap_token": "",
     "depth": 20
   },
   "entity": {
     "type": "team",
     "id": "1"
   },
   "permission": "list_resources",
   "subject": {
     "type": "user",
     "id": //USER ID THAT COME FROM REQUEST PARAMS: id,
     "relation": ""
   },
 };
    const outPut = async() => {
       
        const response = awit axiox.put('GIVE URL HERE', request);
      if(response.status === 200){
        return response.data;
      }
      return false;
    }
  }
  catch (error)
  {
    return false;
  }
  // create a middleware for that get receiver
  // that sends a REST API request to:
  // "localhost:3476/v1/permissions/check" endpoint
  // with body params:
  /*
  {
  "metadata": {
    "schema_version": "",
    "snap_token": "",
    "depth": 20
  },
  "entity": {
    "type": "team",
    "id": "1"
  },
  "permission": "edit",
  "subject": {
    "type": "user",
    "id": //USER ID THAT COME FROM REQUEST PARAMS: id,
    "relation": ""
  },
}
*/
});

// DELETE /resources?id API route to delete the resource
app.delete("/resources?id", (req, res) => {
  // create a middleware for that get receiver
  // that sends a REST API request to:
  // "localhost:3476/v1/permissions/check" endpoint
  // with body params:
  /*
    {
    "metadata": {
      "schema_version": "",
      "snap_token": "",
      "depth": 20
    },
    "entity": {
      "type": "team",
      "id": "1"
    },
    "permission": "delete",
    "subject": {
      "type": "user",
      "id": //USER ID THAT COME FROM REQUEST PARAMS: id,
      "relation": ""
    },
  }
  */
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
