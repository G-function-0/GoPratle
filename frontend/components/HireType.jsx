import { useForm } from "react-hook-form";

const HireType = ({onNext}) => {
    const {register, handleSubmit} = useForm();

    const onSubmit = (data) => {
        onNext(data);
    }

    return (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="min-h-screen flex flex-col justify-center max-w-md mx-auto"
        >
            <h2 className="text-lg font-semibold">Who do you want to Hire?</h2>

            <label htmlFor="hireType">Hire Type : </label>

            <select
              id="hireType"
              {...register("hireType",{required : true})}
              className="border"
            >
                <option value="">Select Hireing Type</option>
                <option value="planner">Event Planner</option>
                <option value="performer">Performer</option>
                <option value="crew">Crew</option>
            </select>

            <button type="submit" className="border">
              Next
            </button>
        </form>
    )
}

export default HireType;
