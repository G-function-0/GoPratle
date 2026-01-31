"use client";
import DisplayAllRequirements from "@/components/DisplayAllRequirements";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {

  const [requirements, setRequirements] = useState([]);
  const [loading,setLoading] = useState(false);

  const fetchRequirements = async () => {
    try {
      setLoading(true);
      const result = await fetch("http://localhost:1001/api/requirements")
      const data = await result.json();
      setRequirements(data.allRequirements);
    } catch (error) {
        console.log(error.message);
    }
    finally{
      setLoading(false);
    }
  }

  useEffect(()=>{
    fetchRequirements()
  },[])

  return (
    <>
      <div className="max-w-3xl mx-auto p-4">
        {requirements.length != 0 ?  (<>
            <h2>All Requirements</h2>
            
            {loading && <p>Loading...</p>}

            {requirements.map((req) => (
              <DisplayAllRequirements key={req._id} req={req}/>
            ))}
        </>) : (
          <div>No Requirements Created Yet</div>
        )}

        <div className="mt-4">
          <Link
            href="/requirements"
            className="border px-3 py-1 rounded"
          >
            Create Requirements
          </Link>
        </div>
      </div>
    </>
  )
}
