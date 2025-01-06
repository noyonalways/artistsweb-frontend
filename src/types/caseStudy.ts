import { TService } from "./service";

export type TCaseStudy = {
  _id: string;
  service: TService;
  name: string;
  slug: string;
  image: string;
  brief: string;
  isLatest: boolean;
};
