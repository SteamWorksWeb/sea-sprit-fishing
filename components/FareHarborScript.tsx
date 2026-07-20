"use client";

import { useEffect } from "react";
import {
  FAREHARBOR_READY_EVENT,
  type FareHarborWindow,
} from "@/lib/fareharbor";

const FAREHARBOR_SCRIPT_ID = "fareharbor-lightframe";
const FAREHARBOR_SCRIPT_SRC = "https://fareharbor.com/embeds/api/v1/";

export default function FareHarborScript() {
  useEffect(() => {
    const notifyReady = () => {
      window.dispatchEvent(new Event(FAREHARBOR_READY_EVENT));
    };

    if (typeof (window as FareHarborWindow).FH?.autoLightframe === "function") {
      notifyReady();
      return;
    }

    const existingScript = document.getElementById(FAREHARBOR_SCRIPT_ID);

    if (existingScript instanceof HTMLScriptElement) {
      existingScript.addEventListener("load", notifyReady, { once: true });

      return () => {
        existingScript.removeEventListener("load", notifyReady);
      };
    }

    const script = document.createElement("script");
    script.id = FAREHARBOR_SCRIPT_ID;
    script.src = FAREHARBOR_SCRIPT_SRC;
    script.async = true;
    script.addEventListener("load", notifyReady, { once: true });
    document.body.appendChild(script);

    return () => {
      script.removeEventListener("load", notifyReady);
    };
  }, []);

  return null;
}
