"use client"

import { useForm } from "react-hook-form";

const EventDetails = ({ onNext }) => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) =>{
        onNext(data);
    }

    return (
      <form onSubmit={handleSubmit(onSubmit)} className="min-h-screen flex flex-col justify-center max-w-md mx-auto">
        <label htmlFor="eventName">Event Name : </label>
        <input
          id="eventName"
          placeholder="Enter Event Name"
          {...register("eventName",{required : true})}
          className="w-full border px-2 py-1 rounded"
        />

        <label htmlFor="eventType">Event Type :</label>
        <input
          id="eventType"
          placeholder="Enter Event Type"
          {...register("eventType",{required : true})}
          className="w-full border px-2 py-1 rounded"
        />

        <label htmlFor="eventDate">Date Of Event :</label>
        <input
          id="eventDate"
          type="date"
          {...register("date",{required : true})}
          className="w-full border px-2 py-1 rounded"
        />

        <label htmlFor="eventLocation">Event Location :</label>
        <input
          id="eventLocation"
          placeholder="Enter Event Location"
          {...register("location",{required : true})}
          className="w-full border px-2 py-1 rounded"
        />

        <label htmlFor="eventVenue">Event Venue : </label>
        <input
          id="eventVenue"
          placeholder="Enter Venue Name"
          {...register("venue",{required : true})}
          className="w-full border px-2 py-1 rounded"
        />

        <button type="submit" className="border px-3 py-1 rounded">
          Next
        </button>
      </form>
    )
}

export default EventDetails;
