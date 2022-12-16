declare global {
  namespace NodeJS {
    interface ProcessEnv {
      ENV: string;
      PORT: string;
      POSTGRES_HOST_DEV: string;
      POSTGRES_DB_DEV: string;
      POSTGRES_USER_DEV: string;
      POSTGRES_PASSWORD_DEV: string;
      POSTGRES_HOST: string;
      POSTGRES_DB: string;
      POSTGRES_USER: string;
      POSTGRES_PASSWORD: string;
      BCRYPT_PASSWORD: string;
      SALT_ROUNDS: string;
      JWT_SECRET: string;
    }
  }
}

export {};
