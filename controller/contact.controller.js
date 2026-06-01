import Contact from "../models/contact.models.js";

// ---------------- GET ALL CONTACTS ----------------
const getRouter = async (req, res) => {
  try {
    const contacts = await Contact.find();

    res.render("contacts", {
      layout: "layout",
      title: "All Contacts",
      contacts,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

// ---------------- ADD PAGE ----------------
const getContact = (req, res) => {
  res.render("Components/add_contact", {
    layout: "layout",
    title: "Add Contact",
  });
};

// ---------------- CREATE CONTACT ----------------
const postContact = async (req, res) => {
  try {
    await Contact.create(req.body);
    res.redirect("/");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error creating contact");
  }
};

// ---------------- SHOW CONTACT ----------------
const showContact = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);

    if (!contact) return res.status(404).send("Contact not found");

    res.render("Components/show_contact", {
      layout: "layout",
      title: "Contact Details",
      contact,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

// ---------------- EDIT PAGE ----------------
const editContact = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);

    res.render("edit_contact", {
      layout: "layout",
      title: "Edit Contact",
      contact,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

// ---------------- UPDATE PAGE (FORM VIEW) ----------------
const updateContact = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);

    res.render("Components/update_contact", {
      layout: "layout",
      title: "Update Contact",
      contact,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

// ---------------- UPDATE DB ----------------
const postupdateContact = async (req, res) => {
  try {
    await Contact.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error updating contact");
  }
};

// ---------------- DELETE CONTACT ----------------
const deleteContact = async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.redirect("/");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error deleting contact");
  }
};

// ---------------- ABOUT PAGE ----------------
const aboutBar = (req, res) => {
  res.render("Link_nav/about", {
    layout: "layout",
    title: "About",
  });
};

// ---------------- CONTACT PAGE ----------------
const MaincontactRouter = (req, res) => {
  res.render("Link_nav/contact", {
    layout: "layout",
    title: "Contact",
  });
};

// ---------------- CONTACT SUBMIT ----------------
const submitContact = (req, res) => {
  const { name } = req.body;

  res.render("Link_nav/contact", {
    layout: "layout",
    title: "Contact",
    success: `Hello ${name}, form submitted successfully!`,
  });
};

// ---------------- SERVICES ----------------
const searchServices = (req, res) => {
  const servicesList = [
    { name: "Web Development", description: "Responsive websites" },
    { name: "Mobile Apps", description: "Android/iOS apps" },
    { name: "SEO", description: "Ranking improvement" },
  ];

  res.render("Link_nav/services", {
    layout: "layout",
    title: "Services",
    services: servicesList,
  });
};

// ---------------- NODE PAGE ----------------
const nodejsBar = (req, res) => {
  res.render("Link_nav/nodejs", {
    layout: "layout",
    title: "NodeJS",
  });
};

// ---------------- EXPORT ----------------
export {
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
};
