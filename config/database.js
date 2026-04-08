import express from "express";
import mongoose from "mongoose";
import Contact from "../models/contact.models.js";

export const connectDB = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/Contact_data")
    .then(() => {
      console.log("MongoDB Connected");
      insertSampleData();
    })
    .catch((err) => console.log(err));

  async function insertSampleData() {
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
  }
};
