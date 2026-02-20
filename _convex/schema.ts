import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  contacts: defineTable({
    name: v.string(),
    email: v.string(),
    organization: v.optional(v.string()),
    service: v.string(),
    budget: v.optional(v.string()),
    message: v.string(),
    status: v.string(), // e.g., "new", "read", "replied"
    createdAt: v.number(),
  }),
});
