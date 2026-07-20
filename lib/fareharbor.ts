export const FAREHARBOR_READY_EVENT = "fareharbor:ready";

type AutoLightframeOptions = {
  container?: Element;
  className?: string;
  callback?: (linkElement: HTMLAnchorElement) => void;
  overrideOnclick?: boolean | "all";
};

export type FareHarborApi = {
  autoLightframe: (options?: AutoLightframeOptions | Element | string) => void;
};

export type FareHarborWindow = Window & {
  FH?: FareHarborApi;
};
