"use client";

import EventDetails from "@/components/EventDetails";
import FinalDetails from "@/components/FinalDetails";
import HireType from "@/components/HireType";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Requirements = () => {
    const [step,setStep] = useState(1);
    const [formData,setFormData] = useState({});
    const router = useRouter();


    const handleNext = (data) => {
        setFormData((prev) => ({...prev,...data}));
        setStep(step + 1);
    };

    const handleFinalSubmit = async (data) => {
        const payload = {
            ...formData,
            details : data,
        }   

        await fetch("https://gopratle-txai.onrender.com/api/requirements",{
            method : "POST",
            headers : { "Content-Type": "application/json" },
            body : JSON.stringify(payload),
        })

        setFormData({});
        setStep(1);
        router.push("/");
    }

    return (<div>
        {step === 1 && <EventDetails onNext={handleNext} />}
        {step === 2 && <HireType onNext={handleNext} />}
        {step === 3 && <FinalDetails submitHandler={handleFinalSubmit} hireType={formData.hireType} />}
    </div>)
}

export default Requirements;