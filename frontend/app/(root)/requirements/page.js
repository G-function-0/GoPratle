"use client";

import EventDetails from "@/components/EventDetails";
import { useState } from "react";

const Requirements = () => {
    const [step,setStep] = useState(1);
    const [formData,setFormData] = useState({});

    const handleNext = (data) => {
        setFormData((prev) => ({...prev,...data}));
        setStep(step + 1);
    };

    const handleFinalSubmit = (data) => {
        setFormData((prev) => ({...prev,...data}));
        setStep(step +1);


    }

    return (<div>
        {step === 1 && <EventDetails onNext={handleNext} />}
        {/* {step === 2 && <EventDetails onNext={handleNext} />}
        {step === 3 && <EventDetails onSubmit={handleSubmit} />} */}
    </div>)
}

export default Requirements;