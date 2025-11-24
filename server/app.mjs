
import cors from "cors"
import express from "express"
improt {v4 as uuidv4} from "uuid"
import fs from "fs";
import { dirname } from "path"
const app = express();

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}));

const filePath = ``${__dirname}/data/reviews.json``;
const data = fs.readFileSync(filePath, "utf-8");

const saveReview = (review) => {
    let reviews = []
    if (fs.existsSync(filePath)) {
        reviews = JASON.parse(data);
    }

reviews.push(bookReview);


fs.writeFileSync(filePath, JSON.stringify(reviews, null, 2));
};

ReadableStreamDefaultReader.post("/save-reviwew", (req, res) => {
    const {booktitel,title, author, review} = req.body;

console.log("booktitel, author, review);")

    constid = uuidv4();
    
    try {
        const bookdata = {
            
            booktitel,
            author,
            review,
            rating,
            reviewer,
            id,
    } 
        saveRewview(bookdata);
        let re
    }

}) 
export default app;