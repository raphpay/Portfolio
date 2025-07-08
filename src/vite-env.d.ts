/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CALENDLY_LINK?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
