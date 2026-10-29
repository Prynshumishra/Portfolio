import crypto from "crypto";

const TOKEN_TTL_MS = 2 * 60 * 60 * 1000; // 2 hours

export const getAdminKey = () => process.env.ADMIN_KEY;

/**
 * Constant-time comparison to prevent timing attacks on the admin key.
 */
export function verifyAdminKey(candidate) {
  const secret = getAdminKey();
  if (!secret || typeof candidate !== "string") return false;

  const secretHash = crypto.createHash("sha256").update(secret).digest();
  const candidateHash = crypto.createHash("sha256").update(candidate).digest();

  return crypto.timingSafeEqual(secretHash, candidateHash);
}

/**
 * Issues a signed HMAC-SHA256 stateless session token with expiration.
 */
export function createAdminSessionToken() {
  const secret = getAdminKey();
  const expiresAt = Date.now() + TOKEN_TTL_MS;
  const nonce = crypto.randomBytes(16).toString("hex");
  const payload = `${expiresAt}.${nonce}`;
  const signature = crypto
    .createHmac("sha256", secret)
    .update(payload)
    .digest("hex");

  return {
    token: `${payload}.${signature}`,
    expiresAt,
  };
}

/**
 * Verifies the signed HMAC-SHA256 session token and its expiration.
 */
export function verifyAdminSessionToken(token) {
  const secret = getAdminKey();
  if (!secret || typeof token !== "string") return false;

  const parts = token.split(".");
  if (parts.length !== 3) return false;

  const [expiresAtStr, nonce, signature] = parts;
  const expiresAt = Number(expiresAtStr);
  if (!Number.isFinite(expiresAt) || Date.now() > expiresAt) {
    return false;
  }

  const payload = `${expiresAtStr}.${nonce}`;
  const expectedSig = crypto
    .createHmac("sha256", secret)
    .update(payload)
    .digest("hex");

  const sigBuf = Buffer.from(signature, "utf8");
  const expectedBuf = Buffer.from(expectedSig, "utf8");
  if (sigBuf.length !== expectedBuf.length) return false;

  return crypto.timingSafeEqual(sigBuf, expectedBuf);
}

export const requireAdmin = (req, res, next) => {
  if (!getAdminKey()) {
    return res
      .status(500)
      .json({ error: "Server configuration error: ADMIN_KEY is not set." });
  }

  const authHeader = req.headers.authorization || "";
  const token = authHeader.startsWith("Bearer ")
    ? authHeader.slice(7).trim()
    : "";

  if (!token || !verifyAdminSessionToken(token)) {
    return res
      .status(401)
      .json({ error: "Unauthorized: Invalid or expired admin session." });
  }
  next();
};
