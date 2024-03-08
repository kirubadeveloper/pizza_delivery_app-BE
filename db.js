const mongoose = require("mongoose");

module.exports = () => {
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  try {
    mongoose.connect('mongodb+srv://kimukipi97:mongo_1997@kimucluster.zrfa2nh.mongodb.net/');
    console.log("Connected to database successfully");
  } catch (error) {
    console.log(error);
    console.log("Could not connect database");
  }
};
