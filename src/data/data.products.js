import { fps, fifa, openWorld, racing } from "../assets/images/index";
import uuid from "react-uuid";


const trendingProducts = [
    {
        key: uuid(),
        name: "PUBG",
        imgSrc: fps,
        description:
            "Land on strategic locations, loot weapons and supplies, and survive to become the last team standing across various Battlegrounds.",
        price: {
            original: 1499,
            discounted: 999,
        },
        discount: 34,
    },
    {
        key: uuid(),
        name: "FIFA",
        imgSrc: fifa,
        description:
            "In FIFA 19, you play existing teams or build your dream team and play various real-world or envisioned football situations or campaigns.",
        price: {
            original: 2499,
            discounted: 1299,
        },
        discount: 40,
    },
    {
        key: uuid(),
        name: "Watch Dogs 2",
        imgSrc: openWorld,
        description:
            "Hack your way through the vibrant neighborhoods of the Bay Area: San Francisco, Marin County, Oakland, and Silicon Valley.",
        price: {
            original: 3099,
            discounted: 1499,
        },
        discount: 45,
    },
    {
        key: uuid(),
        name: "Forza Horizon 3",
        imgSrc: racing,
        description:
            "Forza Horizon 3 allows players to race in a fictional representation of Australia.",
        price: {
            original: 1299,
            discounted: 699,
        },
        discount: 45,
    },
];

export { trendingProducts };