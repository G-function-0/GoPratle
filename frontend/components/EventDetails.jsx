"use client"

import { useForm } from "react-hook-form";



const EventDetails = ({ onNext }) => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) =>{
        onNext(data);
    }

    return (<form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Enter Event Name" {...register("eventName",{required : true})}/>
        <input placeholder="Enter Event Type" {...register("eventType",{required : true})} />
        <input type="date" {...register("date",{required : true})} />
        <input placeholder="Enter Event Location" {...register("location",{required : true})}/>
        <input placeholder="Enter Venue Name" {...register("venue",{required : true})} />

        <button type="submit">Next</button>
    </form>)
}

export default EventDetails;