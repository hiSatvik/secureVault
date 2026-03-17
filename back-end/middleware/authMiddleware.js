import { body, validationResult } from "express-validator";
import jwt from "jsonwebtoken";

export const validateSignup = [
  body("email")
    .isEmail()
    .withMessage("Invalid email format"),

  body("name")
    .isLength({ min: 2 })
    .withMessage("Name must be at least 2 characters"),

  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters"),

  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array()
      });
    }

    next();
  }
];

export const validateToken = (req, res, next) => {
  const token = req.cookies.token;

  if(!token)
    return res.status(401).json({error: "Access denied!"});

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.userId = decoded.userId;

    next();
  } catch(err) {
    return res.status(403).json({
      error: "Invalid token"
    });
  }
}