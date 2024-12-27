import express, { Router } from "express";

const healthRouter: Router = express.Router();

healthRouter.use(express.json());

healthRouter.get("/health", (req, res) => {
    res.status(200).send('Server is up and running');
})

export {healthRouter}