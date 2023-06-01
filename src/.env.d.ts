interface ImportMetaEnv {
    readonly VITE_ENV: string;
    readonly VITE_PORT: number;
    readonly VITE_OPEN: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}