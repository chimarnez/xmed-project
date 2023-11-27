

exports.getFiles = async (req, res) => {
  console.log("exito")
  res.send('Successfully uploaded ' + "req.files.length" + ' files!')
}
