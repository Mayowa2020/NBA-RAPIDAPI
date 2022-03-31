const ResultModel = require('../models/ResultModel');

const getTotal = (req, res) => {
  const total = async () => {
    const documents = await ResultModel.countDocuments({});
    res.status(200).json(documents);
    // console.log(documents);
  };

  total();
};
module.exports = getTotal;
