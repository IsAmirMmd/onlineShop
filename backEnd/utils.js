import jwt from "jsonwebtoken";

export const generateToken = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    process.env.TOKEN_SECRET || "somethingsecret",
    {
      expiresIn: "30d",
    }
  );
};

export const isAuth = (req, res, next) => {
  const authorization = req.headers.authorization;
  if (!authorization) return res.status(401).send({ message: "No Token" });

  // const token = authorization.slice(7, authorization.length); // Bearer XXXXXX
  const token = authorization.split(" ")[1];
  // console.log(token);
  try {
    const verified = jwt.verify(
      token,
      process.env.TOKEN_SECRET || "somethingsecret"
    );
    req.user = verified;
    // console.log(verified);
    next();
  } catch (error) {
    res.status(401).send({ message: "Invalid Token" });
  }
};

export const isAdmin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401).send({ message: "Invalid Admin Token" });
  }
};
