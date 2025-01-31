import { ColorSpace } from "./types";

export interface LchabSpace extends ColorSpace {
  xyz: (lchab: [number, number, number]) => [number, number, number];
  lab: (lchab: [number, number, number]) => [number, number, number];
}

declare module "./lab" {
  interface LabSpace {
    lchab: (lab: [number, number, number]) => [number, number, number]
  }
}

declare module "./xyz" {
  interface XyzSpace {
    lchab: (xyz: [number, number, number]) => [number, number, number]
  }
}

declare const lchab: LchabSpace;
export default lchab;
