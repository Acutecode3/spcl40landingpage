export const getDistricts = async (state: string) => {
  if (state === "") return [];
  if (state === "Kerala")
    return [
      "Alappuzha",
      "Ernakulam",
      "Idukki",
      "Kannur",
      "Kasaragod",
      "Kollam",
      "Kottayam",
      "Kozhikode",
      "Malappuram",
      "Palakkad",
      "Pathanamthitta",
      "Thiruvananthapuram",
      "Thrissur",
      "Wayanad",
    ];
  try {
    const res = await fetch(`/api/districts/${state}`);
    const data = await res.json();
    if (res.ok && data && data.data.length > 0) return data.data;
  } catch (err) {
    console.log(err);
  }
  return [];
};
