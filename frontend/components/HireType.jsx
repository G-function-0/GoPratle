import { useForm } from "react-hook-form";


const HireType = ({onNext}) => {
    const {register, handleSubmit} = useForm();

    const onSubmit = (data) => {
        onNext(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Who do you want to Hire?</label>
            
            <select {...register("hireType",{required : true})}>
                <option value="">Select an Option</option>
                <option value="planner">Event Planner</option>
                <option value="performer">Performer</option>
                <option value="crew">Crew</option>
            </select>

            <button type="submit">Next</button>
        </form>
    )
}

export default HireType;