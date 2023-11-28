exports.getFiles = async (request, response) => {
  const originalNames = request.files.map(archivo => archivo.originalname);
  response.status(200).json({
    "message":'Successfully uploaded ',
    "files": originalNames
})
}
