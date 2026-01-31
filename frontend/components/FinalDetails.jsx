"use client";

import { useForm } from "react-hook-form";

const FinalDetails = ({ submitHandler, hireType }) => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        submitHandler(data);
    }

    return (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="min-h-screen flex flex-col justify-center max-w-md mx-auto"
        > 
            <h2 className="text-lg font-semibold">
              Additional Details
            </h2>

            {hireType === "planner" && 
                (<>
                    <label htmlFor="budget">Budget Range : </label>
                    <input
                      id="budget"
                      placeholder="Enter Budget Range"
                      {...register("budget", {required : true})}
                      className="border"
                    />

                    <label htmlFor="level">Planing Level :</label>
                    <select
                      id="level"
                      {...register("planningLevel",{required : true})}
                      className="border"
                    >
                        <option value="">Select Planning Level</option>
                        <option value="full">Full Planning</option>
                        <option value="partial">Partial Planning</option>
                    </select>
                </>)
            }

            {hireType === "performer" &&(
                <>  
                    {/* prformertype and duration in minutes */}
                    <label htmlFor="performer">Performer Type :</label>
                    <input
                      id="performer"
                      placeholder="e.g. DJ, Singer..."
                      {...register("perfromerType",{required : true})}
                      className="border"
                    />

                    <label htmlFor="duration">Duration (In Minutes)</label>
                    <input
                      id="duration"
                      type="number"
                      placeholder="e.g. 120"
                      {...register("durationInMinutes",{required : true})}
                      className="border"
                    />
                </>
            )}

            {hireType === "crew" && (
                <>
                    {/* crewtype and num od people */}
                    <label htmlFor="crewType">Crew Type</label>
                    <input
                      id="crewType"
                      placeholder="e.g. Sound, Lighting..."
                      {...register("crewType",{required : true})}
                      className="border"
                    />

                    <label htmlFor="count">Number of People Needed</label>
                    <input
                      id="count"
                      type="number"
                      placeholder="Number of People"
                      {...register("count",{required : true})}
                      className="border"
                    />
                </>
            )}

            <button type="submit" className="border">
              Submit Requirement
            </button>
        </form>
    )
}   

export default FinalDetails;
