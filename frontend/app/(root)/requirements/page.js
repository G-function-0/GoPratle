"use client";

import EventDetails from "@/components/EventDetails";
import FinalDetails from "@/components/FinalDetails";
import HireType from "@/components/HireType";
import { useState } from "react";

const Requirements = () => {
    const [step,setStep] = useState(1);
    const [formData,setFormData] = useState({});

    const handleNext = (data) => {
        setFormData((prev) => ({...prev,...data}));
        setStep(step + 1);
    };

    const handleFinalSubmit = async (data) => {
        const payload = {
            ...formData,
            details : data,
        }

        console.log(payload);

        await fetch("http://localhost:1001/api/requirements",{
            method : "POST",
            headers : { "Content-Type": "application/json" },
            body : JSON.stringify(payload),
        })

        setFormData({});
        setStep(1);

    }

    return (<div>
        {step === 1 && <EventDetails onNext={handleNext} />}
        {step === 2 && <HireType onNext={handleNext} />}
        {step === 3 && <FinalDetails submitHandler={handleFinalSubmit} hireType={formData.hireType} />}
    </div>)
}

export default Requirements;