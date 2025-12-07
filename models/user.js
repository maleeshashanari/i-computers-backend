import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    // Meken kiyanne document ekak save karanakota role field eke value ekak awashyai  kiyala..//
    required: true,

    //Meken kiyanne database eke anith siyalu documents athara email field eke value eka  unique wenna one kiyala. Ekama email address eka dekata wadi warayak save karanna baha.//
    unique: true,
  },

  firstName: {
    type: String,
    required: true,
  },

  lastName: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

  role: {
    type: String,
    required: true,
    //!Meka wadagath! Meken kiyanne role field eke value eka me array eke (["admin", "customer"]) thiyena dewalin ekakma wenna one kiyala. Wenath kisi value ekak (udaharana: "manager" or "guest") baha. Meka validation ekak//
    enum: ["admin", "customer"],
    //Meken kiyanne role field ekata kisima value ekak nodunnoth, eya swabhawika (default) lesa "customer" kiyana value eka ganan gannawa kiyala//
    default: "customer",
  },

  isBlocked: {
    type: Boolean,
    default: false,
    required: true,
  },

  isEmailVerified: {
    type: Boolean,
    default: false,
    required: true,
  },

  image: {
    type: String,
    default: "/images/default-profile.png",
    required: true,
  },
});

const User = mongoose.model("User", userSchema);

// Import karanna oni mongoose model ekata dena nama first letter capital walin thiyana eka
export default User;
