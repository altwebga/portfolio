import { betterAuth } from "better-auth"
import { Pool } from "pg"

const database = new Pool({
  connectionString: "postgresql://test:test@localhost:5432/seomix",
})

export const auth = betterAuth({
  database: database,
  baseURL: "http://localhost:3000/",
  emailAndPassword: {
    enabled: true,
    sendResetPassword: async ({ user, url }) => {
      console.log(`Password reset link for ${user.email}: ${url}`)
    },
  },
  socialProviders: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    },
  },
})
