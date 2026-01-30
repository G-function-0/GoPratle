import mongoose from "mongoose";


const requirementsSchema = new mongoose.Schema({
    eventName : {
        type : String,
    },
    eventType : {
        type : String,
    },
    date : {
        type : Date,
    },
    location : {
        type : String,
    },
    venue : {
        type : String,
    },
    hireType : {
        type : String,
        enum : ["planner","performer","crew"],
    },
    details : {
        type : Object,
    },
},{timestamps :  true});

const RequirementsModel = new mongoose.model("Requirement",requirementsSchema);

export { RequirementsModel };