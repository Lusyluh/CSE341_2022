displayName = (req, res) => {
    const data =
      'Zanele Magadla Mamtolo';
    res.status(200).send(data);
  };
  
  module.exports = {
    displayName,
  };