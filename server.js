const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

require("./routes/htmlRoutes")(app);
require("./routes/apiRoutes")(app);

app.listen(PORT, () => {
    console.log(`listening on PORT ${PORT}`);
})