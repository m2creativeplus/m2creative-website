import { mutation } from "./_generated/server";
import { v } from "convex/values";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const submit = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    organization: v.optional(v.string()),
    service: v.string(),
    budget: v.optional(v.string()),
    message: v.string(),
  },
  handler: async (ctx, args) => {
    const name = args.name.trim();
    const email = args.email.trim().toLowerCase();
    const message = args.message.trim();

    if (name.length < 2 || name.length > 200) {
      throw new Error("Please enter a name between 2 and 200 characters.");
    }

    if (!EMAIL_REGEX.test(email)) {
      throw new Error("Please enter a valid email address.");
    }

    if (message.length < 20 || message.length > 5000) {
      throw new Error(
        "Please provide a message between 20 and 5000 characters."
      );
    }

    const contactId = await ctx.db.insert("contacts", {
      name,
      email,
      organization: args.organization?.trim() || undefined,
      service: args.service,
      budget: args.budget?.trim() || undefined,
      message,
      status: "new",
      createdAt: Date.now(),
    });

    return contactId;
  },
});
