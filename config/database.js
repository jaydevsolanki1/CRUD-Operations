// // import express from "express";
// // import mongoose from "mongoose";
// // import Contact from "../models/contact.models.js";

// // export const connectDB = () => {
// //   mongoose
// //     // .connect("mongodb://127.0.0.1:27017/Contact_data")
// //     .Connection(mongoose.connect(process.env.MONGO_URI))
// //     .then(() => {
// //       console.log("MongoDB Connected");
// //       insertSampleData();
// //     })
// //     .catch((err) => console.log(err));

// //   async function insertSampleData() {
// //     const count = await Contact.countDocuments();
// //     if (count === 0) {
// //       await Contact.create({
// //         first: "Jay",
// //         last: "Patel",
// //         email: "jay@example.com",
// //         phone: "9876543210",
// //       });
// //       console.log("Sample Contact Inserted ✔");
// //     }
// //   }
// // };

// import mongoose from "mongoose";
// import Contact from "../models/contact.models.js";

// export const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI);

//     console.log("MongoDB Connected ✅");

//     // insert sample data
//     const count = await Contact.countDocuments();

//     if (count === 0) {
//       await Contact.create({
//         first: "Jay",
//         last: "Patel",
//         email: "jay@example.com",
//         phone: "9876543210",
//       });

//       console.log("Sample Contact Inserted ✔");
//     }
//   } catch (err) {
//     console.log("DB Error ❌:", err.message);
//   }
// };

import mongoose from "mongoose";
import Contact from "../models/contact.models.js";

export const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is not defined in .env");
    }

    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB Connected ✅");

    const count = await Contact.countDocuments();

    if (count === 0) {
      await Contact.create({
        first: "Jay",
        last: "Patel",
        email: "jay@example.com",
        phone: "9876543210",
      });

      console.log("Sample Contact Inserted ✔");
    }
  } catch (err) {
    console.log("DB Error ❌:", err.message);
    process.exit(1);
  }
};
