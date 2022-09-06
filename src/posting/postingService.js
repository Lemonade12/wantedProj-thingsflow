const postingRepo = require("./postingRepository");
const bcrypt = require("bcrypt");

async function createPosting(postingInfo) {
  postingInfo.password = await encryptPassword(postingInfo.password);
  postingRepo.createPosting(postingInfo);
}

async function encryptPassword(password) {
  const salt = await bcrypt.genSalt(10);
  const result = await bcrypt.hash(password, salt);
  return result;
}

async function updatePosting(postingId, postingInfo, password) {
  const posting = await postingRepo.readPostingById(postingId);
  console.log(posting);
  if (!posting) {
    const error = new Error("POSTING_NOT_FOUND");
    error.statusCode = 404;
    throw error;
  }
  const isValidPassword = await bcrypt.compare(password, posting.password);

  if (isValidPassword) {
    postingRepo.updatePosting(postingId, postingInfo);
  } else {
    const error = new Error("INVALID_PASSWORD");
    error.statusCode = 401;
    throw error;
  }
}

/*
async function updateOpening(req, res) {
    try {
      const opening_id = req.params.id;
      const update = req.body;
      const opening = await openingRepo.readOpeningById(opening_id);
      if(!opening){
        return res.status(404).json({ message : 'OPENING IS NOT FOUND' });
      }
      else if(req.body.company_id){
        return res.status(403).json({ message : 'CAN NOT UPDATE COMPANY_ID' });
      }
      else{
        openingRepo.updateOpening(opening_id, update);
        return res.status(200).json({ message : 'OPENING IS UPDATED' });
      }  
    } catch (err) {
      console.log(err);
      return res.status(err.statusCode || 500).json({ message: err.message });
    }
  }
*/
module.exports = {
  createPosting,
  updatePosting,
};
