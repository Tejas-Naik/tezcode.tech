
try {
  const response = await fetch('http://localhost:3000/api/orders', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      product: {
        description: "Verification Test",
        cost: "1.00"
      }
    })
  });

  const data = await response.json();
  
  if (response.ok) {
    console.log("SUCCESS: Order created. ID:", data.id);
  } else {
    console.error("FAILURE: Server returned error:", data);
    process.exit(1);
  }
} catch (error) {
  console.error("FAILURE: Could not connect to server or other error.");
  console.error(error.message);
  process.exit(1);
}
