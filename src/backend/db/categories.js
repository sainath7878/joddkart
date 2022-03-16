import { v4 as uuid } from "uuid";
import { fps, fifa, openWorld, racing } from "../../assets/images/index";


/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  { key: uuid(), name: "FPS", imgSrc: fps },
  { key: uuid(), name: "Racing", imgSrc: racing },
  { key: uuid(), name: "Open World", imgSrc: openWorld },
  { key: uuid(), name: "Fifa", imgSrc: fifa },
];
