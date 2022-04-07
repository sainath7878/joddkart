import { v4 as uuid } from "uuid";
import { fps, fifa, openWorld, racing, fifa22, fortnite, nfs, rdr2 } from "../../assets/images/index";


/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
    {
        _id: uuid(),
        name: "PUBG",
        imgSrc: fps,
        description:
            "Land on strategic locations, loot weapons and supplies, and survive to become the last team standing across various Battlegrounds.",
        price: {
            original: 1499,
            discounted: 999,
        },
        discount: 34,
        category: "FPS",
        inStock: false,
        rating: 1.8,
        badge: true,
    },
    {
        _id: uuid(),
        name: "FIFA 19",
        imgSrc: fifa,
        description:
            "In FIFA 19, you play existing teams or build your dream team and play various real-world or envisioned football situations or campaigns.",
        price: {
            original: 2499,
            discounted: 1299,
        },
        discount: 40,
        category: "FIFA",
        inStock: true,
        rating: 3.9,
        badge: false,

    },
    {
        _id: uuid(),
        name: "Watch Dogs 2",
        imgSrc: openWorld,
        description:
            "Hack your way through the vibrant neighborhoods of the Bay Area: San Francisco, Marin County, Oakland, and Silicon Valley.",
        price: {
            original: 3099,
            discounted: 3000,
        },
        discount: 45,
        category: "OPEN WORLD",
        inStock: false,
        rating: 3.8,
        badge: true,
    },
    {
        _id: uuid(),
        name: "Forza Horizon 4",
        imgSrc: racing,
        description:
            "Forza Horizon 3 allows players to race in a fictional representation of Australia.",
        price: {
            original: 1299,
            discounted: 699,
        },
        discount: 45,
        category: "RACING",
        inStock: true,
        rating: 2.1,
        badge: true,
    },
    {
        _id: uuid(),
        name: "Fortnite",
        imgSrc: fortnite,
        description:
            "A multiplayer game where you compete in Battle Royale, collaborate to create your private island in Creative, or quest in Save the World.",
        price: {
            original: 2399,
            discounted: 399,
        },
        discount: 80,
        category: "FPS",
        inStock: true,
        rating: 3.2,
        badge: false,
    },
    {
        _id: uuid(),
        name: "FIFA 22",
        imgSrc: fifa22,
        description:
            "FIFA 22 brings the game even closer to the real thing with fundamental gameplay advances and a new season of innovation across every mode.",
        price: {
            original: 3899,
            discounted: 3499,
        },
        discount: 10,
        category: "FIFA",
        inStock: true,
        rating: 4.7,
        badge: false,
    },
    {
        _id: uuid(),
        name: "Read Dead Redemption 2",
        imgSrc: rdr2,
        description:
            "America, 1899. The end of the Wild West era has begun as lawmen hunt down the last remaining outlaw gangs. Those who will not surrender or succumb are killed.",
        price: {
            original: 4099,
            discounted: 2899,
        },
        discount: 35,
        category: "OPEN WORLD",
        inStock: true,
        rating: 3.0,
        badge: true,
    },
    {
        _id: uuid(),
        name: "Need For Speed Heat",
        imgSrc: nfs,
        description:
            "Hustle by day and risk it all at night in Need for Speed™ Heat, a thrilling street race experience that pits you against a city's rogue police force.",
        price: {
            original: 2299,
            discounted: 1799,
        },
        discount: 45,
        category: "RACING",
        inStock: true,
        rating: 3.1,
        badge: false,
    },
];
