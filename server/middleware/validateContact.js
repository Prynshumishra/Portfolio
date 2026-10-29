const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactPayload({ name, email, subject, message }) {
  if (!name || name.trim().length < 2 || name.trim().length > 100)
    return "Name must be between 2 and 100 characters.";
  if (!email || !EMAIL_RE.test(email) || email.length > 200)
    return "Please provide a valid email address.";
  if (!subject || subject.trim().length < 2 || subject.trim().length > 200)
    return "Subject is required.";
  if (!message || message.trim().length < 10 || message.trim().length > 500)
    return "Message must be between 10 and 500 characters.";
  return null;
}

export const validateContactMiddleware = (req, res, next) => {
  const { name, email, subject, message } = req.body ?? {};
  const error = validateContactPayload({ name, email, subject, message });
  if (error) {
    return res.status(400).json({ error });
  }
  next();
};
