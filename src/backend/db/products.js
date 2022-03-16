import { v4 as uuid } from "uuid";
import { fps, fifa, openWorld, racing } from "../../assets/images/index";


/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    key: uuid(),
    name: "PUBG",
    imgSrc: fps,
    description:
        "Land on strategic locations, loot weapons and supplies, and survive to become the last team standing across various Battlegrounds.",
    price: {
        originalPrice: 1499,
        discountedPrice: 999,
    },
    discount: 34,
    category: "FPS",
    inStock: false,
    rating: 1.8 ,
    badge: true
},
{
    key: uuid(),
    name: "FIFA",
    imgSrc: fifa,
    description:
        "In FIFA 19, you play existing teams or build your dream team and play various real-world or envisioned football situations or campaigns.",
    price: {
        originalPrice: 2499,
        discountedPrice: 1299,
    },
    discount: 40,
    category: "FIFA",
    inStock: false,
    rating: 4 ,
    badge: false
},
{
    key: uuid(),
    name: "Watch Dogs 2",
    imgSrc: openWorld,
    description:
        "Hack your way through the vibrant neighborhoods of the Bay Area: San Francisco, Marin County, Oakland, and Silicon Valley.",
    price: {
        originalPrice: 3099,
        discountedPrice: 3000,
    },
    discount: 45,
    category: "openWorld",
    inStock: false,
    rating: 3.8 ,
    badge: true
},
{
    key: uuid(),
    name: "Forza Horizon 3",
    imgSrc: racing,
    description:
        "Forza Horizon 3 allows players to race in a fictional representation of Australia.",
    price: {
        originalPrice: 1299,
        discountedPrice: 699,
    },
    discount: 45,
    category: "RACING",
    inStock: true,
    rating: 2.1 ,
    badge: true
},
{
  key: uuid(),
  name: "PUBG",
  imgSrc: fps,
  description:
      "Land on strategic locations, loot weapons and supplies, and survive to become the last team standing across various Battlegrounds.",
  price: {
      originalPrice: 4499,
      discountedPrice: 3999,
  },
  discount: 34,
  category: "FPS",
  inStock: true,
  rating:  3.2,
  badge: false
},
{
  key: uuid(),
  name: "FIFA",
  imgSrc: fifa,
  description:
      "In FIFA 19, you play existing teams or build your dream team and play various real-world or envisioned football situations or campaigns.",
  price: {
      originalPrice: 2499,
      discountedPrice: 1299,
  },
  discount: 40,
  category: "FIFA",
  inStock: false,
  rating: 4.5 ,
  badge: false
},
{
  key: uuid(),
  name: "Watch Dogs 2",
  imgSrc: openWorld,
  description:
      "Hack your way through the vibrant neighborhoods of the Bay Area: San Francisco, Marin County, Oakland, and Silicon Valley.",
  price: {
      originalPrice: 3099,
      discountedPrice: 1499,
  },
  discount: 45,
  category: "openWorld",
  inStock: true,
  rating: 4.1 ,
  badge: true
},
{
  key: uuid(),
  name: "Forza Horizon 3",
  imgSrc: racing,
  description:
      "Forza Horizon 3 allows players to race in a fictional representation of Australia.",
  price: {
      originalPrice: 1299,
      discountedPrice: 699,
  },
  discount: 45,
  category: "RACING",
  inStock: true,
  rating: 3.5 ,
  badge: false
},
];