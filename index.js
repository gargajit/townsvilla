import express from "express";
import ejs from "ejs";
import bodyParser from "body-parser";

const app = express();
const port = 3002;

const optionsData = {
    school: { id: 1, name: "School", description: "Welcome! This is a place for education" },
    hospital: { id: 2, name: "Hospital", description: "Emergency! We will take your medical care" },
    police: { id: 3, name: "Police Station", description: "Don't Worry! We will help to solve the crime." },
};

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.post("/", (req, res) => {
    const selectedOption = req.body.choice;
    // console.log(`Selected Button: ${selectedOption}`);

    const data = optionsData[selectedOption];

    if(data) {
        res.render("index.ejs", {ejsData: data});
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    
});