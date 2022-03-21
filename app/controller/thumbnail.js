const sharp = require("sharp");
const fs = require("fs");
const download = require("download");
exports.resizeThumb = async (req, res) => {
  const { image } = req.body;
  if (image) {
    const data = await download(image);
    fs.writeFileSync("file.jpg", data);
    sharp("file.jpg")
      .resize({ height: 50, width: 50 })
      .toFile(`public/output.jpg`)
      .then((data) => {
        res.json({ thumbnail: `http://localhost:5000/output.jpg` });
      })
      .catch((err) => {
        res.json({ error: err.message });
      });
  } else {
    res.json({ error: "An image link is required" });
  }
};
