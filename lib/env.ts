const ENV: "dev" | "prod" | "test" = process.env.NEXT_PUBLIC_ENV as any || 'prod';

// @ts-ignore
export const IS_DEV = ENV == 'dev';

// @ts-ignore
export const IS_TEST = ENV == 'test';

export const IS_LOCAL = process.env.NODE_ENV === "development";
