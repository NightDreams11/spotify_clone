import mangoose from "mongoose"

const albumSchema = new mangoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    artist: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    releaseYear: { type: Number, required: true },
    songs: [{ type: mangoose.Schema.Types.ObjectId, ref: "Song" }],
  },
  { timestamps: true }
)

export const Album = mangoose.model("Album", albumSchema)
