

const DisplayAllRequirements = ({req}) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "8px", marginBottom: "8px" }}>
            <p><strong>{req.eventName}</strong></p>
            <p>Type: {req.eventType}</p>
            <p>Hire: {req.hireType}</p>
            <pre>{JSON.stringify(req.details, null, 2)}</pre>
    </div>
  )
}

export default DisplayAllRequirements