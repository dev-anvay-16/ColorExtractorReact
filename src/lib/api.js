const BASE_URL = "http://localhost:8000";

export async function getColors(dataset) {
  const response = await fetch(`${BASE_URL}/colors`, {
    method: "POST",
    body: JSON.stringify({
      dataset: dataset,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not create quote.");
  }
  return data;
}
