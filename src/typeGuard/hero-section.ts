import { THeroSection, THighlight } from "@/types/hereSection";

const isHighlight = (item: unknown): item is THighlight => {
  return (
    typeof item === "object" &&
    item !== null &&
    "title" in item &&
    typeof (item as THighlight).title === "string" &&
    "value" in item &&
    typeof (item as THighlight).value === "string"
  );
};

export const isHeroSection = (data: unknown): data is THeroSection => {
  return (
    typeof data === "object" &&
    data !== null &&
    "_id" in data &&
    typeof (data as THeroSection)._id === "string" &&
    "heading" in data &&
    typeof (data as THeroSection).heading === "string" &&
    "subheading" in data &&
    typeof (data as THeroSection).subheading === "string" &&
    "highlights" in data &&
    Array.isArray((data as THeroSection).highlights) &&
    (data as THeroSection).highlights.every(isHighlight)
  );
};
