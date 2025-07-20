declare global {
  interface Window {
    GetWaitlist: {
      init: () => void;
    };
  }
}

export {}; 