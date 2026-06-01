import express from "express";
// import Contact from "../models/contact.models.js";
const router = express.Router();
import {
  getContact,
  postContact,
  showContact,
  getRouter,
  editContact,
  updateContact,
  postupdateContact,
  deleteContact,
  aboutBar,
  MaincontactRouter,
  submitContact,
  serachServices,
  nodejsBar,
} from "../controller/contact.controller.js";

// ---------------- ROUTES -----------------
router.get("/", getRouter);

router.get("/add_contact", getContact);

router.post("/add_contact", postContact);

router.get("/show_contact/:id", showContact);

router.get("/edit_contact/:id", editContact);

router.get("/update_contact/:id", updateContact);

router.post("/update_contact/:id", postupdateContact);

router.get("/delete_contact/:id", deleteContact);

// ----------------------------------------------------------------------

// ✔ Correct About route
router.get("/about", aboutBar);

// ✔ Correct Contact route
router.get("/contact", MaincontactRouter);

// ✔ Correct Submit Contact Form
router.post("/submit", submitContact);

// ✔ Correct Services route
router.get("/services", serachServices);

// ✔ Correct Nodejs route
router.get("/nodejs", nodejsBar);

// ----------------------------------------------------------------------

export default router;

// module.exports = router;

// _____________________________________________________________________________________________________________
// this fix code with chatgpt
// _____________________________________________________________________________________________________________

// import express from "express";
// import Contact from "../models/contact.models.js";
// const router = express.Router();

// // ---------------- ROUTES -----------------

// // ✔ Show All Contacts
// router.get("/", async (req, res) => {
//   try {
//     const contacts = await Contact.find();
//     res.render("contacts", {
//       layout: "layout",
//       title: "All Contacts",
//       contacts,
//     });
//   } catch (err) {
//     res.send("Error fetching contacts: " + err.message);
//   }
//   // res.send(json(contacts)); // to send json data
// });

// // ✔ Add Contact Page
// router.get("/add_contact", (req, res) => {
//   res.render("add_contact", { layout: "layout", title: "Add Contact" });
// });

// // ✔ Add Contact (POST)
// router.post("/add_contact", async (req, res) => {
//   try {
//     await Contact.create({
//       first: req.body.first,
//       last: req.body.last,
//       email: req.body.email,
//       phone: req.body.phone,
//       address: req.body.address,
//     });
//     res.redirect("/");
//   } catch (err) {
//     res.send(err.message);
//     // res.send(req.body);
//   }
// });

// // ✔ Show Single Contact
// router.get("/show_contact/:id", async (req, res) => {
//   try {
//     const contact = await Contact.findById(req.params.id);

//     if (!contact) return res.send("❌ Contact not found");

//     res.render("show_contact", {
//       layout: "layout",
//       title: "Contact Details",
//       contact,
//     });
//   } catch (err) {
//     res.send("❌ Invalid ID format");
//   }
// });

// // ✔ Edit Contact Page
// router.get("/edit_contact/:id", async (req, res) => {
//   try {
//     const contact = await Contact.findById(req.params.id);
//     if (!contact) return res.send("❌ Contact not found");

//     res.render("edit_contact", {
//       layout: "layout",
//       title: "Edit Contact",
//       contact,
//     });
//   } catch (err) {
//     res.send("❌ Invalid ID");
//   }
// });

// // ✔ Update Contact Page
// router.get("/update_contact/:id", async (req, res) => {
//   try {
//     const contact = await Contact.findById(req.params.id);
//     if (!contact) return res.send("❌ Contact not found");

//     res.render("update_contact", {
//       layout: "layout",
//       title: "Update Contact",
//       contact,
//     });
//   } catch (err) {
//     res.send("❌ Invalid ID");
//   }
// });

// // ✔ Update Contact (POST)
// router.post("/update_contact/:id", async (req, res) => {
//   try {
//     await Contact.findByIdAndUpdate(req.params.id, {
//       first: req.body.first,
//       last: req.body.last,
//       email: req.body.email,
//       phone: req.body.phone,
//       address: req.body.address,
//     });
//     res.redirect("/");
//   } catch (err) {
//     res.send("❌ Failed to update contact: " + err.message);
//   }
// });

// // ✔ Delete Contact
// router.get("/delete_contact/:id", async (req, res) => {
//   try {
//     await Contact.findByIdAndDelete(req.params.id);
//     res.redirect("/");
//   } catch (err) {
//     res.send("❌ Failed to delete: " + err.message);
//   }
// });

// // ✔ About Page
// router.get("/about", (req, res) => {
//   res.render("Link_nav/about", {
//     layout: "layout",
//     title: "About",
//     missionText: "Custom mission text here",
//     visionText: "Custom vision text here",
//     team: [
//       {
//         name: "Ace",
//         role: "CEO",
//         bio: "Leader and visionary",
//         photo: "/images/alice.jpg",
//       },
//       {
//         name: "Zoro",
//         role: "CTO",
//         bio: "Tech guru",
//         photo: "/images/bob.jpg",
//       },
//     ],
//   });
// });

// // ✔ Contact Page
// router.get("/contact", (req, res) => {
//   res.render("Link_nav/contact", {
//     layout: "layout",
//     title: "Contact",
//     name: null,
//     email: null,
//     message: null,
//     success: null,
//   });
// });

// // ✔ Submit Contact Form
// router.post("/submit", (req, res) => {
//   const { name, email, message } = req.body;
//   res.render("Link_nav/contact", {
//     layout: "layout",
//     title: "Contact",
//     name,
//     email,
//     message,
//     success: `Hello ${name}, your form has been submitted successfully!`,
//   });
// });

// // ✔ Services Page
// router.get("/services", (req, res) => {
//   const servicesList = [
//     { name: "Web Development", description: "Responsive and modern websites" },
//     {
//       name: "Mobile Apps",
//       description: "iOS and Android mobile applications",
//     },
//     { name: "SEO Optimization", description: "Boost your search rankings" },
//     { name: "UI/UX Design", description: "Beautiful and user-friendly designs" },
//     { name: "Video Editing", description: "Capture the moment with style" },
//     { name: "Graphic Design", description: "Creative and colorful designs" },
//   ];

//   res.render("Link_nav/services", {
//     layout: "layout",
//     title: "Services",
//     services: servicesList,
//   });
// });

// export default router;
// // module.exports = router; // your learning comment stays here
