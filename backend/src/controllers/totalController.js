const ResultModel = require('../models/ResultModel')
const getTotal = (req, res) => {
  const total = async () => {
    const totalDocuments = await ResultModel.countDocuments({});
    res.send(`Total Documents: ${totalDocuments}`);
    console.log(totalDocuments);

  };

  total();
};
module.exports = getTotal;