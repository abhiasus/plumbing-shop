const files = import.meta.glob("../assets/image/*.{jpg,jpeg,png,webp}", {
  eager: true,
  import: "default",
});

// finds a saved image by filename prefix (works even for long names)
const img = (prefix) =>
  Object.entries(files).find(([path]) =>
    path.split("/").pop().startsWith(prefix)
  )?.[1];

export const products = [
  { id: 1, name: "Basin Mixer Tap", category: "Taps", price: 1850, image: img("product-chrome-mixer-tap") },
  { id: 2, name: "Rain Shower Head", category: "Showers", price: 2450, image: img("product-rain-shower-head") },
  { id: 3, name: "Ceramic Wash Basin", category: "Basins", price: 3200, image: img("product-ceramic-wash-basi") },
  { id: 4, name: "Health Faucet", category: "Accessories", price: 850, image: img("product-health-faucet") },
  { id: 5, name: "Kitchen Sink", category: "Basins", price: 4500, image: img("product-kitchen-sink") },
  { id: 6, name: "Wall Mixer", category: "Taps", price: 2900, image: img("product-wall-mixer") },
  { id: 7, name: "Toilet Flush Tank", category: "Accessories", price: 1750, image: img("product-toilet-flush-tank") },
  { id: 8, name: "Bathroom Accessory Set", category: "Accessories", price: 1250, image: img("product-accessory-set") },
  { id: 9, name: "PVC Plumbing Pipe", category: "Pipes & Fittings", price: 180, image: img("product-pvc-pipe") },
  { id: 10, name: "Brass Ball Valve", category: "Pipes & Fittings", price: 650, image: img("product-brass-ball-valve") },
  { id: 11, name: "Pipe Wrench", category: "Pipes & Fittings", price: 780, image: img("product-pipe-wrench") },
  { id: 12, name: "Water Heater", category: "Accessories", price: 6500, image: img("product-water-heater") },
];