const { log } = require("console");
const express = require("express");
const app = express();
const PORT = 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get("/api", (req, res) =>{
    res.json({
        message: "Hello world",
    });
});

app.listen(PORT, ()=>{
    console.log(`server listening on ${PORT}`);
});

const database = [];

const generateID = ()=> Math.random().toString(36).substring(2, 10);


app.post("/register", (req, res)=>{
    const {username, email, password} = req.body;
    let result = database.filter(
        (user) => user.email === email || user.username === username
    );

    if(result.length === 0){
        database.push({
            id: generateID(),
            username,
            password,
            email,
            timezone: {},
            schedule: [],

        });

        return res.json({ message: "Account created successfully"});
    }

    res.json({erro_message: "User already exits !"});
})

app.post("/login", (req, res) => {
    const { username, password } = req.body;
    let result = database.filter(
        (user) => user.username === username && user.password === password
    );
    //👇🏻 user doesn't exist
    if (result.length !== 1) {
        return res.json({
            error_message: "Incorrect credentials",
        });
    }
    
    //👇🏻 user exists
    res.json({
        message: "Login successfully",
        data: {
            _id: result[0].id,
            _email: result[0].email,
        },
    });
});