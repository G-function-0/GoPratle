import { RequirementsModel } from "../model/Requirement.js";
import { sendError } from "../utils/sendError.js";


const createRequirement = async (req, res) => {
    const  { eventName, eventType, date, location, venue, hireType, details } = req.body;

    if(!eventName || !eventType || !date || !location || !venue || !hireType || !details){
        return sendError(res,400,"All feilds are Required");
    }

    const allowedHireTypes = ["planner","performer","crew"];
    if(!allowedHireTypes.includes(hireType)){
        return sendError(res,400,"Invalid request");
    }

    await RequirementsModel.insertOne({
        eventName,
        eventType,
        date,
        location,
        venue,
        hireType,
        details
    })

    return res.status(201).json({
        success : true,
        message : "Requirements Created",
    })

} 


const getAllRequirements = async (req,res) => {
    const allRequirements = await RequirementsModel.find({});

    res.status(200).json({
        success : true,
        message : "All requirements",
        allRequirements,
    })
}

export default {createRequirement, getAllRequirements}