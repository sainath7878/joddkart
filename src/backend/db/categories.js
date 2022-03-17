import { v4 as uuid } from "uuid";
import { fps, fifa, openWorld, racing } from "../../assets/images/index";


/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  { key: uuid(), name: "FPS", imgSrc: fps },
  { key: uuid(), name: "RACING", imgSrc: racing },
  { key: uuid(), name: "OPEN WORLD", imgSrc: openWorld },
  { key: uuid(), name: "FIFA", imgSrc: fifa },
];
