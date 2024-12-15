import { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";

const restaurantController: T = {};
restaurantController.goHome = (eq: Request, res: Response) => {
    try {
        console.log("goHome");
        res.send("Home Page");
    } catch (err) {
        console.log("ERROR, goHome:, err");
    }
}

restaurantController.getLogin = (eq: Request, res: Response) => {
    try {
        console.log("getLogin");
        res.send("Login Page");
    } catch (err) {
        console.log("ERROR, getLogin:, err");
    }
}

restaurantController.getSignup = (eq: Request, res: Response) => {
    try {
        console.log("getSignup");
        res.send("Signup Page");
    } catch (err) {
        console.log("ERROR, getSignup:, err");
    }
};

restaurantController.processLogin = (eq: Request, res: Response) => {
    try {
        console.log("processLogin");
        res.send("DONE");
    } catch (err) {
        console.log("ERROR, processLogin:, err");
    }
};

restaurantController.processSignup = (eq: Request, res: Response) => {
    try {
        console.log("processSignup");
        res.send("DONE");
    } catch (err) {
        console.log("ERROR, processSignup:, err");
    }
};

export default restaurantController;