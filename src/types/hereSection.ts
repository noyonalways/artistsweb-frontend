export type THighlight = {
  title: string;
  value: string;
  _id: string;
};

export type THeroSection = {
  _id: string;
  heading: string;
  subheading: string;
  highlights: THighlight[];
};
