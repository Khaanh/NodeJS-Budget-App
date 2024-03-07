require("dotenv").config();

const express = require("express");
const expressLayouts = require("express-ejs-layouts");

const app = express();
const PORT = 5001 || process.env.PORT;

app.get("/", (req, res) => {
	res.status(200).send({ msg: "Hello" });
});

app.get("/api/users", (req, res) => {
	res.send([
		{ id: 1, name: "Khanh1", surname: "Nguyen1" },
		{ id: 2, name: "Khanh2", surname: "Nguyen2" },
		{ id: 3, name: "Khanh3", surname: "Nguyen3" },
		{ id: 4, name: "Khanh4", surname: "Nguyen4" },
	]);
});

app.get("/api/product", (req, res) => {
	res.send([
		{ id: 1, name: "Product1", surname: "Mark1" },
		{ id: 2, name: "Product2", surname: "Mark2" },
		{ id: 3, name: "Product3", surname: "Mark3" },
		{ id: 4, name: "Product4", surname: "Mark4" },
	]);
});

app.listen(PORT, () => {
	console.log("Running server on " + PORT);
});
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// // Static Files
// app.use(express.static("public"));

// //Templating Engine
// app.use(expressLayouts);
// app.set("layout", "./layouts/main");
// app.set("view engine", "ejs");
