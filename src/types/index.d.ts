/**
 * Global declarations and type augmentations
 */

import { RootState } from "../store";

// Module augmentations
declare module "react-redux" {
  // Add missing types to useSelector hook
  export interface TypedUseSelectorHook<TState> {
    <TSelected>(selector: (state: TState) => TSelected): TSelected;
  }
}

// Make images and SVGs importable
declare module "*.svg" {
  import React = require("react");
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

declare module "*.png" {
  const src: string;
  export default src;
}

declare module "*.jpg" {
  const src: string;
  export default src;
}

declare module "*.jpeg" {
  const src: string;
  export default src;
}

declare module "*.gif" {
  const src: string;
  export default src;
}

// Add missing types to Window
declare global {
  interface Window {
    ENV: {
      API_URL: string;
    };
  }
} 