import express from "express";
import {connect} from "./dbconnect.js"
import cors from "cors";
import bodyParser from "body-parser";
import reviewroutes from "./Reviewroute.js";

const app=express();
const PORT=7000;
app.use(express.json());


const corsOptions = {
   // origin: 'http://localhost:5173', 
    origin:'https://boisterous-faun-238182.netlify.app',
    methods: ['GET', 'POST'], 
    credentials: true, 
  };


  app.use(cors(corsOptions));
  app.use(bodyParser.json());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use('/review', reviewroutes);

connect();


app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });

  app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the backend API' });
  });

