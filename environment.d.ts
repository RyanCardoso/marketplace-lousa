declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_SERVICE_ID_EMAILJS: string;
      NEXT_PUBLIC_TEMPLATE_ID_EMAILJS: string;
      NEXT_PUBLIC_KEY_EMAILJS: string;
    }
  }
}

export {}