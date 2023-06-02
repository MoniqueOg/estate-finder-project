const dynamodb = require("dynamodb");
const { Schema } = dynamodb;

const TermsSchema = new Schema({
  term: {
    type: String,
    required: true,
  },
  definition: {
    type: String,
    required: true,
  },
});

mongoose.model("name of model", TermsSchema);