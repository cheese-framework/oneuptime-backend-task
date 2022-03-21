const assert = require("assert");
const fs = require("fs");
const download = require("download");

describe("File Thumbnail", function () {
  it("should return true", async function () {
    const data = await download(
      "https://metro.co.uk/wp-content/uploads/2019/12/PRI_112340119-e1576846729393.jpg"
    );
    fs.writeFileSync("file.jpg", data);
    assert.equal(fs.existsSync("file.jpg"), true);
  });
});
