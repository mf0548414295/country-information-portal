export interface Country {
  id:string;
  name: {
    common: string;
  };
  capital: string[];
  region: string;
  subRegion: string;
  population: number;
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
}
