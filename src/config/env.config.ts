export const envConfiguration = () => ({
    environment: process.env.NODE_ENV || 'dev',
    mongodb: process.env.MONGODB,
    port: process.env.PORT || 5050,
    defaultLimit: process.env.DEFAULT_LIMIT || 7
})