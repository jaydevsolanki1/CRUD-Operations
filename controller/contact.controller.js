import Contact from "../models/contact.models.js";

// ------------------ CONTROLLER FUNCTIONS ------------------

const getRouter = async (req, res) => {
  const contacts = await Contact.find();
  res.render("contacts", {
    layout: "layout",
    title: "All Contacts",
    contacts,
  });
};

const getContact = (req, res) => {
  res.render("Components/add_contact", { layout: "layout", title: "Add Contact" });
};

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
    res.send(err.message);
  }
};

const showContact = async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  res.render("Components/show_contact", {
    layout: "layout",
    title: "Contact Details",
    contact,
  });
};

const editContact = async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  res.render("edit_contact", {
    layout: "layout",
    title: "Edit Contact",
    contact,
  });
};

const updateContact = async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  res.render("Components/update_contact", {
    layout: "layout",
    title: "Update Contact",
    contact,
  });
};

const postupdateContact = async (req, res) => {
  await Contact.findByIdAndUpdate(req.params.id, {
    first: req.body.first,
    last: req.body.last,
    email: req.body.email,
    phone: req.body.phone,
    address: req.body.address,
  });
  res.redirect("/");
};

const deleteContact = async (req, res) => {
  await Contact.findByIdAndDelete(req.params.id);
  res.redirect("/");
};

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
      { name: "Zoro", role: "CTO", bio: "Tech guru", photo: "/images/bob.jpg" },
    ],
  });
};
const nodejsBar = (req, res) => {
  res.render("Link_nav/nodejs", {
    layout: "layout",
    title: "Nodejs",
  });
};

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

const serachServices = (req, res) => {
  const servicesList = [
    { name: "Web Development", description: "Responsive and modern websites" },
    { name: "Mobile Apps", description: "iOS and Android applications" },
    { name: "SEO Optimization", description: "Boost your search rankings" },
    {
      name: "UI/UX Design",
      description: "Beautiful and user-friendly designs",
    },
    { name: "Video Editing", description: "Capture the motion in Camera" },
    { name: "Graphic Design", description: "Design makes Colourfull life" },
  ];

  res.render("Link_nav/services", {
    layout: "layout",
    title: "Services",
    services: servicesList,
  });
};

// ------------------ EXPORT ALL FUNCTIONS ------------------

export {
  getRouter,
  getContact,
  postContact,
  updateContact,
  showContact,
  serachServices,
  editContact,
  postupdateContact,
  deleteContact,
  aboutBar,
  MaincontactRouter,
  submitContact,
  nodejsBar
};
