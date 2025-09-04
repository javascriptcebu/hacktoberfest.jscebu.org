export const logtoConfig = {
  endpoint: "https://auth.gocebby.com/",
  appId: "rmhlf82hqpjtk5a162399",
  appSecret: process.env.LOGTO_APP_SECRET,
  baseUrl: process.env.LOGTO_BASE_URL || "http://localhost:3000", // Change to your own base URL
  cookieSecret: "ea3we2RR7GPyUIdwx411TBtet2rawCpe", // Auto-generated 32 digit secret
  cookieSecure: process.env.NODE_ENV === "production",
};
