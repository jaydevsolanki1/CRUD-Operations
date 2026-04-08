// import mongoose library
import mongoose from "mongoose";

// define schema for contact
const contactSchema = new mongoose.Schema({
  // _id: {
  //   type: Number,
  //   required: true,
  // },
  first: {
    type: String,
    required: true,
  },
  last: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
    default: "No address given",
  },
});

// create model from schema
// 'Contact' is the name of the model and will correspond to the 'contacts' collection in MongoDB
const Contact = mongoose.model("Contact", contactSchema);

// export the model to use it in other files
export default Contact;

// ---------------------------------------------------------------------------
// sort cut is schems to direct bolier plate code for mongoose model
// ---------------------------------------------------------------------------
