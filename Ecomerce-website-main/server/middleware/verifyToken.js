import jwt from "jsonwebtoken";
import { createError } from "../error.js";

export const verifyToken = async (req, res, next) => {
  try {
    // Check if Authorization header exists
    if (!req.headers.authorization) {
      return next(createError(401, "Authorization header missing. You are not authenticated!"));
    }

    // Split the Authorization header to get the token
    const token = req.headers.authorization.split(" ")[1];

    // Check if the token exists
    if (!token) {
      return next(createError(401, "Token missing. You are not authenticated!"));
    }

    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Ensure the secret key is correctly set in .env

    // Attach the decoded token (user information) to req.user
    req.user = decoded;

    // Continue to the next middleware
    next();
  } catch (err) {
    // Handle specific JWT errors for better clarity
    if (err.name === "TokenExpiredError") {
      return next(createError(403, "Token expired! Please log in again."));
    } else if (err.name === "JsonWebTokenError") {
      return next(createError(403, "Invalid token! Please log in again."));
    } else {
      return next(createError(500, "An error occurred during token verification."));
    }
  }
};

