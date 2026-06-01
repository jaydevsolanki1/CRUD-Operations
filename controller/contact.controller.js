import Contact from "../models/contact.models.js";

// ------------------ GET ALL CONTACTS ------------------
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

// ------------------ ADD CONTACT PAGE ------------------
const getContact = (req, res) => {
  res.render("Components/add_contact", {
    layout: "layout",
    title: "Add Contact",
  });
};

// ------------------ CREATE CONTACT ------------------
const postContact = async (req, res) => {
  try {
    await Contact.create({
      first: req.body.first,
      last: req.body.last,
      email: req.body.email,
      phone: req.body.phone,
      address: req.body.address,
    });

    res.redirect("/");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error creating contact");
  }
};

// ------------------ SHOW SINGLE CONTACT ------------------
const showContact = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);

    if (!contact) {
      return res.status(404).send("Contact not found");
    }

    res.render("Components/show_contact", {
      layout: "layout",
      title: "Contact Details",
      contact,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Invalid ID or Server Error");
  }
};

// ------------------ EDIT PAGE ------------------
const editContact = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);

    if (!contact) {
      return res.status(404).send("Contact not found");
    }

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

// ------------------ UPDATE PAGE (FORM VIEW) ------------------
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

// ------------------ UPDATE CONTACT (DB UPDATE) ------------------
const postupdateContact = async (req, res) => {
  try {
    await Contact.findByIdAndUpdate(req.params.id, {
      first: req.body.first,
      last: req.body.last,
      email: req.body.email,
      phone: req.body.phone,
      address: req.body.address,
    });

    res.redirect("/");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error updating contact");
  }
};

// ------------------ DELETE CONTACT ------------------
const deleteContact = async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.redirect("/");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error deleting contact");
  }
};

// ------------------ ABOUT PAGE ------------------
const aboutBar = (req, res) => {
  res.render("Link_nav/about", {
    layout: "layout",
    title: "About",
    missionText: "Custom mission text here",
    visionText: "Custom vision text here",
    team: [
      {
        name: "Ace",
        role: "CEO",
        bio: "Leader and visionary",
        photo: "/images/alice.jpg",
      },
      {
        name: "Zoro",
        role: "CTO",
        bio: "Tech guru",
        photo: "/images/bob.jpg",
      },
    ],
  });
};

// ------------------ NODE PAGE ------------------
const nodejsBar = (req, res) => {
  res.render("Link_nav/nodejs", {
    layout: "layout",
    title: "Nodejs",
  });
};

// ------------------ CONTACT PAGE ------------------
const MaincontactRouter = (req, res) => {
  res.render("Link_nav/contact", {
    layout: "layout",
    title: "Contact",
    name: null,
    email: null,
    message: null,
    success: null,
  });
};

// ------------------ CONTACT FORM SUBMIT ------------------
const submitContact = (req, res) => {
  const { name, email, message } = req.body;

  res.render("Link_nav/contact", {
    layout: "layout",
    title: "Contact",
    name,
    email,
    message,
    success: `Hello ${name}, your form has been submitted successfully!`,
  });
};

// ------------------ SERVICES PAGE ------------------
const searchServices = (req, res) => {
  const servicesList = [
    { name: "Web Development", description: "Responsive and modern websites" },
    { name: "Mobile Apps", description: "iOS and Android applications" },
    { name: "SEO Optimization", description: "Boost your search rankings" },
    {
      name: "UI/UX Design",
      description: "Beautiful and user-friendly designs",
    },
    { name: "Video Editing", description: "Capture motion professionally" },
    { name: "Graphic Design", description: "Creative visual branding" },
  ];

  res.render("Link_nav/services", {
    layout: "layout",
    title: "Services",
    services: servicesList,
  });
};

// ------------------ EXPORT ------------------
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
  nodejsBar,
  searchServices,
};
