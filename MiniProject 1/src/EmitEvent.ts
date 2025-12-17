const EmitEvent = (eventName: string) => {
    fetch("http://localhost:8081/producer/event", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ event: eventName }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to emit event");
        }
      })
      .catch((error) => {
        console.error("Error emitting event:", error);
      });
  };
export default EmitEvent;