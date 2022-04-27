const fs = require("fs")
const path = require("path")
const Jimp = require("jimp")
const zeroFill = require("zero-fill")

async function slice(imagePath, outputDir, size, frame, filenameFormat) {
  const spritesheet = await Jimp.read(imagePath)

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true })
  }

  for (let y = 0; y < size.y; y++) {
    for (let x = 0; x < size.x; x++) {
      const index = y * size.x + x
      const filename = filenameFormat.replace("*", zeroFill(4, index))

      const clone = spritesheet.clone()
      const image = clone.crop(x * frame.x, y * frame.y, frame.x, frame.y)
      const buffer = await image.getBufferAsync(Jimp.MIME_PNG)
      
      fs.writeFileSync(path.join(outputDir, filename), buffer)
    }
  }
}

module.exports = {
  slice
}
