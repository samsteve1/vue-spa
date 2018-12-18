//include files and create required variables
const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");

//add the html page to serve
const indexHTML = (() => {
    return fs.readFileSync(path.resolve(__dirname, "./index.html"), "utf-8");
})();

app.use("/dist", express.static(path.resolve(__dirname, "./dist")));

require("./build/dev-server")(app);

//listen to and catch all get requests
app.get("*", (req, res) => {
        res.write(indexHTML);
        res.end();
});
//create the port to listen to
const port = process.env.PORT || 3000;
app.listen(port, () =>{
    console.log(`Server started at http://localhost${port}`);
});
