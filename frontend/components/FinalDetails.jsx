"use client";

import { useForm } from "react-hook-form";


const FinalDetails = ({ submitHandler, hireType }) => {
    const { register, handleSubmit } = useForm();


    const onSubmit = (data) => {
        submitHandler(data);
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}> 

            <h2>Additional Details</h2>

            {hireType === "planner" && 
                (<>
                    <input placeholder="Enter Budget Range" {...register("budget", {required : true})}/>
                    <select {...register("planningLevel",{required : true})}>
                        <option value="">Select Planning Level</option>
                        <option value="full">Full Planning</option>
                        <option value="partial">Partial Planning</option>
                    </select>
                </>)
            }

            {hireType === "performer" &&(
                <>  
                    {/* prformertype and duration in minutes */}
                    <input placeholder="e.g. DJ, Singer..." {...register("perfromerType",{required : true})} />
                    <input type="number" placeholder="e.g. 120" {...register("durationInMinutes",{required : true})} />
                </>
            )}

            {hireType === "crew" && (
                <>
                    {/* crewtype and num od people */}
                    <input placeholder="e.g. Sound, Lighting..." {...register("crewType",{required : true})} />
                    <input type="number" placeholder="Number of People" {...register("count",{required : true})} />
                </>
            )}

            <button type="submit">Submit Requirement</button>


        </form>
    )
}   

export default FinalDetails;