declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: string;
      RDS_HOST: string;
      RDS_PORT: number;
      RDS_DB: string;
      RDS_USER: string;
      RDS_PASSWORD: string;
      BCRYPT_PASSWORD: string;
      SALT_ROUNDS: string;
      JWT_SECRET: string;
    }
  }
}

export {};
