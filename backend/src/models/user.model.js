import mangoose from "mongoose"

const userSchema = new mangoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    clerkId: {
      type: String,
      required: true,
      uniqe: true,
    },
  },
  { timestamps: true }
)

export const User = mangoose.model("User", userSchema)
