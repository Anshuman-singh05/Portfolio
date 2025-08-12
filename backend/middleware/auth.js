import jwt from 'jsonwebtoken';
import 'dotenv/config';

const authMiddleware = (req, res, next) => {
  // 1. Request ke header se token nikalo
  const token = req.header('x-auth-token');

  // 2. Check karo ki token hai ya nahi
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  // 3. Token ko verify karo
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // Agar token valid hai, to user ki info request me add kardo
    req.user = decoded.user;
    next(); // Ab request ko aage route tak jaane do
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};

export default authMiddleware;