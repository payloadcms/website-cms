import { RichTextElement } from "payload/dist/fields/config/types";
import largeBody from "./largeBody";
import label from "./label";
import video from "./video";

const elements: RichTextElement[] = [
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "link",
  largeBody,
  label,
  video,
  "ul",
  "ol"
];

export default elements;
