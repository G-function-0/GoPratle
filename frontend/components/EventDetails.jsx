"use client"

import { useForm } from "react-hook-form";



const EventDetails = ({ onNext }) => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) =>{
        onNext(data);
    }

    return (<form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Enter Event Name" {...register("eventName")}/>
        <input placeholder="Enter Event Type" {...register("eventType")} />
        <input type="date" {...register("date")} />
        <input placeholder="Enter Event Location" {...register("location")}/>
        <input placeholder="Enter Venue Name" {...register("venue")} />

        <button type="submit">Next</button>
    </form>)
}

export default EventDetails;