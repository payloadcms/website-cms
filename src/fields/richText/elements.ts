import { RichTextElement } from "payload/dist/fields/config/types";
import largeBody from "./largeBody";
import label from "./label";

const elements: RichTextElement[] = [
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "link",
  largeBody,
  label,
  "ul",
  "ol"
];

export default elements;
