import 'dotenv/config'

export const env = {
  httpServer: {
    port: parseInt(process.env.PORT as string, 10) || (3001 as number),
  },
}
