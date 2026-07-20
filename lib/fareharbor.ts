export const FAREHARBOR_READY_EVENT = "fareharbor:ready";

type AutoLightframeOptions = {
  container?: Element;
  className?: string;
  callback?: (linkElement: HTMLAnchorElement) => void;
  overrideOnclick?: boolean | "all";
};

type LightframeView =
  | "items"
  | "all-availability"
  | {
      item: number;
      availability?: number;
    };

type OpenLightframeOptions = {
  shortname: string;
  flow?: number;
  asn?: string;
  asnRef?: string;
  ref?: string;
  language?: string;
  items?: number[];
  view?: LightframeView;
};

export type FareHarborApi = {
  autoLightframe: (options?: AutoLightframeOptions | Element | string) => void;
  open?: (options: OpenLightframeOptions) => boolean;
  close?: () => boolean;
};

export type FareHarborWindow = Window & {
  FH?: FareHarborApi;
};
