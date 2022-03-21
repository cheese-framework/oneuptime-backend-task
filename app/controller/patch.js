const jsonPatch = require("jsonpatch");

exports.patchData = async (req, res) => {
  const { data, patch } = req.body;
  try {
    if (data && patch) {
      // we just want to update the user's email and gender
      if (patch.email && patch.gender && data.email && data.gender) {
        thePatch = [
          { op: "replace", path: "/email", value: patch.email },
          { op: "replace", path: "/gender", value: patch.gender },
        ];
        const patched = await jsonPatch.apply_patch(data, thePatch);
        res.json({ data: patched });
      } else {
        res.status(400).json({
          status: 400,
          message: "Gender and email is required",
        });
      }
    } else {
      res.status(400).json({
        status: 400,
        message: "Both Patch and Data is required",
      });
    }
  } catch (e) {
    res.status(500).send(e.message || "An error occured");
  }
};
