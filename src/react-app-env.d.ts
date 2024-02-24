/// <reference types="react-scripts" />
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_SERVICE_ID: string;
      REACT_APP_TEMPLATE_ID: string;
      REACT_APP_USER_ID: string;
      REACT_APP_GOOGLE_ID: string;
    }
  }

  interface Window {
    grecaptcha: ReCaptchaInstance;
    captchaOnLoad: () => void;
    reset: () => void;
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
