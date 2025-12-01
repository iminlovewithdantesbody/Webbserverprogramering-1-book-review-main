
import cors from "cors"
import express from "express"
import {v4 as uuidv4} from "uuid"
import fs from "fs";
import { dirname } from "path"
const app = express();

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}));

const filePath = `${__dirname}/data/reviews.json`;


const saveReview = (review) => {
    let reviews = []
   
      
    }
if (fs.existsSync(filePath)) {
try {
     
        const data = fs.readFileSync(filePath, "utf-8");//göt om texten tillnjavascript format
          reviews = JASON.parse(data);//läser fillens inhåll som text 
          if (!Array.isArray(review)) revies = []
} catch (error) {
    cinsole.error("Error during read of reviwes.jason:",error);
    reviews
}
fs.writeFileSync(filePath, JSON.stringify(reviews, null, 2));
};

reviews.push(bookReview);

try {
  console.log({reviews:reviews })
  
  // sparar tillbaka alla lrecensioner till reviews.json
  fs.writeFileSync(filePath, JSON.stringify(reviews,null,2))
} catch (error) {
    // skriv ut error medelande i consolen
    console.error("Error writing to reviews.json")
    
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
        saveReview(bookdata);
        let re
    } catch {
        
    }

})
export default app