import mangoose from "mongoose"

const messageSchema = new mangoose.Schema(
  {
    senderId: {
      type: String,
      required: true,
    }, // Clerk user ID
    receiverId: {
      type: String,
      required: true,
    }, // Clerk user ID
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

export const Message = mangoose.model("Message", messageSchema)
