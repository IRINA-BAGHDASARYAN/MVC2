const ribbonInventory = {
    totalLength: 100, // օրինակ՝ 100 մետր
    pricePerMeter: 5,

    async sellRibbon(requestedLength) {
        try {
            if (requestedLength > this.totalLength) {
                throw new Error("Ներողություն, պահեստում այդքան ժապավեն չկա։");
            }
            const cost = requestedLength * this.pricePerMeter;
            this.totalLength -= requestedLength;
            return cost;
        } catch (error) {
            console.error(error.message);
            return 0;
        }
    }
};

// Օրինակ օգտագործում
(async () => {
    const cost = await ribbonInventory.sellRibbon(10);
    console.log(`Արժեքը ${cost} դրամ է։`);
})();

// Fetch example to call the server-side sellRibbon endpoint
async function sellRibbonFromApi(requestedLength) {
  const response = await fetch("http://localhost:3000/V1/sellRibbon", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ requestedLength }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Fetch failed: ${errorText}`);
  }

  return response.json();
}

(async () => {
  const result = await sellRibbonFromApi(10);
  console.log(`Արժեքը ${result.cost} դրամ է, մնացել է ${result.remainingLength} մետր։`);
})();
