import { v4 as uuid } from "uuid";


/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  { key: uuid(), name: "FPS", imgSrc: "https://res.cloudinary.com/duy47nrum/image/upload/v1654030436/joddkart/fps_nb2wfa.jpg" },
  { key: uuid(), name: "RACING", imgSrc: "https://res.cloudinary.com/duy47nrum/image/upload/v1654030437/joddkart/racing_l4lgrv.jpg" },
  { key: uuid(), name: "OPEN WORLD", imgSrc: "https://res.cloudinary.com/duy47nrum/image/upload/v1654030438/joddkart/openworld_xzekhx.jpg" },
  { key: uuid(), name: "FIFA", imgSrc: "https://res.cloudinary.com/duy47nrum/image/upload/v1654030436/joddkart/fifa_jmf5xl.jpg" },
];
