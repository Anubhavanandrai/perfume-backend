
import express from "express"
import { Review } from "./Model.js"

const router= express.Router()

router.get('/',(req,res)=>{
    res.send("here in review")
    })

router.post("/sendreview", async (req, res) => {
        try {
          const { Username, Message, Email } = req.body;
    
          const newReview = new Review({
            Username,
            Message,
            Email,
          });
      
          await newReview.save();
          res.status(201).json({
            message: "Review created successfully",
            review: newReview,
          });
        } catch (error) {
          console.error("Error creating review:", error);
          res.status(500).json({ message: "Server error", error: error.message });
        }
      });


      router.get("/getreview", async (req, res) => {
        try {
          const reviews = await Review.find();
          res.status(200).json(reviews);
        } catch (error) {
          console.error("Error fetching reviews:", error);
          res.status(500).json({ message: "Server error", error: error.message });
        }
      });



export default router;