import express from "express";
import {
  getRouter,
  getContact,
  postContact,
  showContact,
  editContact,
  updateContact,
  postupdateContact,
  deleteContact,
  aboutBar,
  MaincontactRouter,
  submitContact,
  searchServices,
  nodejsBar,
} from "../controller/contact.controller.js";

const router = express.Router();

router.get("/", getRouter);
router.get("/add", getContact);
router.post("/add", postContact);

router.get("/contact/:id", showContact);
router.get("/edit/:id", editContact);
router.post("/update/:id", postupdateContact);
router.get("/delete/:id", deleteContact);

router.get("/about", aboutBar);
router.get("/contact", MaincontactRouter);
router.post("/contact", submitContact);
router.get("/services", searchServices);
router.get("/node", nodejsBar);

export default router;
