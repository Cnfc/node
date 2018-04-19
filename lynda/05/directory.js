var fs = require("fs");

if(fs.existsSync("new")) {

    console.log("Directory already there");

} else {

    fs.mkdir("new", function(err){

        if(err) {
            console.log(err);
        } else {
            console.log("Directory Created");
        }
    });

}
