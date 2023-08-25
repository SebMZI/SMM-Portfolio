const User = require("../model/User");

const bcrypt = require("bcrypt");

const register = async (req, res) => {
  if (
    !req?.body?.username ||
    !req?.body?.firstname ||
    !req?.body?.lastname ||
    !req?.body?.email ||
    !req?.body?.password
  ) {
    return res.status(400).json({
      message:
        "Username, firstname, lastname, email and password are required!",
    });
  }

  const duplicate = await User.findOne({ email: req.body.email }).exec();

  if (duplicate) {
    return res.status(409).json({ conflict: "email is already used!" });
  }

  const hashedPwd = await bcrypt.hash(req.body.password, 10);
  try {
    const result = await User.create({
      username: req.body.username,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: hashedPwd,
    });

    res.status(201).json({
      message: `User: ${req.body.username} has been successfully created!`,
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { register };
