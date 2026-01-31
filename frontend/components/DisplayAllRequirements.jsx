

const DisplayAllRequirements = ({req}) => {
  return (
    <div
      style={{ border: "1px solid #ccc", padding: "8px", marginBottom: "8px" }}
      className="rounded"
    >
      <p className="font-semibold">{req.eventName}</p>
      <p className="text-sm">Type: {req.eventType}</p>
      <p className="text-sm">Hire: {req.hireType}</p>
      <pre className="text-xs mt-2">{JSON.stringify(req.details, null, 2)}</pre>
    </div>
  )
}

export default DisplayAllRequirements
