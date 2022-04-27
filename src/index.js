const { slice } = require("./slicer")

async function main() {
  await slice("./sample/emoji_2x2.png", "./output/emoji_1", { x: 2, y : 2 }, { x: 128, y: 128 }, "emoji_*.png")
  await slice("./sample/emoji_4x1.png", "./output/emoji_2", { x: 4, y : 1 }, { x: 128, y: 128 }, "emoji_*.png")
}

main()
