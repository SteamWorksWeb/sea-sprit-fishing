"use client";

import { useEffect } from "react";
import {
  FAREHARBOR_READY_EVENT,
  type FareHarborWindow,
} from "@/lib/fareharbor";

const initializedContainers = new WeakSet<Element>();

/**
 * Binds FareHarbor's Lightframe to the booking links mounted by this route.
 * The API script is loaded globally, but App Router pages need to initialize
 * their own DOM after client-side navigation.
 */
export default function FareHarborInit({
  containerSelector = "[data-fareharbor-lightframe]",
}: {
  containerSelector?: string;
}) {
  useEffect(() => {
    const initLightframe = () => {
      const container = document.querySelector(containerSelector);
      const fareHarbor = (window as FareHarborWindow).FH;

      if (!container || typeof fareHarbor?.autoLightframe !== "function") {
        return false;
      }

      if (!initializedContainers.has(container)) {
        fareHarbor.autoLightframe({ container });
        initializedContainers.add(container);
      }

      return true;
    };

    if (initLightframe()) {
      return;
    }

    const handleFareHarborReady = () => {
      if (initLightframe()) {
        window.removeEventListener(
          FAREHARBOR_READY_EVENT,
          handleFareHarborReady,
        );
      }
    };

    window.addEventListener(FAREHARBOR_READY_EVENT, handleFareHarborReady);

    let attempts = 0;
    const interval = window.setInterval(() => {
      if (initLightframe() || ++attempts >= 50) {
        window.clearInterval(interval);
        window.removeEventListener(
          FAREHARBOR_READY_EVENT,
          handleFareHarborReady,
        );
      }
    }, 200);

    return () => {
      window.clearInterval(interval);
      window.removeEventListener(
        FAREHARBOR_READY_EVENT,
        handleFareHarborReady,
      );
    };
  }, [containerSelector]);

  return null;
}
