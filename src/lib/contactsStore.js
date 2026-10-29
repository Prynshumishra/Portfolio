const STORAGE_KEY = "portfolio_contacts_store_v1";

export function getLocalContacts() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    const cleaned = parsed.filter(
      (c) => c?.email !== "aarav.mehta@enterprise-tech.io"
    );
    if (cleaned.length !== parsed.length) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cleaned));
    }
    return cleaned;
  } catch {
    return [];
  }
}

export function saveLocalContact(contact) {
  try {
    const existing = getLocalContacts();
    const record = {
      _id: contact._id || `local_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
      name: contact.name?.trim() || "",
      email: contact.email?.trim().toLowerCase() || "",
      subject: contact.subject?.trim() || "",
      message: contact.message?.trim() || "",
      status: contact.status || "unread",
      createdAt: contact.createdAt || new Date().toISOString(),
      source: contact._id && !String(contact._id).startsWith("local_") ? "cloud" : "local",
    };
    const filtered = existing.filter((c) => c._id !== record._id);
    const updated = [record, ...filtered];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    return record;
  } catch {
    return null;
  }
}

export function updateLocalContactStatus(id, status) {
  try {
    const existing = getLocalContacts();
    const updated = existing.map((c) => (c._id === id ? { ...c, status } : c));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    return updated.find((c) => c._id === id) || null;
  } catch {
    return null;
  }
}

export function deleteLocalContact(id) {
  try {
    const existing = getLocalContacts();
    const updated = existing.filter((c) => c._id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    return true;
  } catch {
    return false;
  }
}

export function mergeContacts(remoteContacts = [], localContacts = []) {
  const map = new Map();

  for (const item of remoteContacts) {
    if (!item) continue;
    const key = item._id || `${item.email}_${item.createdAt}`;
    map.set(String(key), {
      ...item,
      status: item.status || "unread",
      source: "mongodb",
    });
  }

  for (const local of localContacts) {
    if (!local) continue;
    const idKey = String(local._id);
    const isDuplicateByContent = remoteContacts.some(
      (r) =>
        r.email?.toLowerCase() === local.email?.toLowerCase() &&
        r.subject === local.subject &&
        r.message === local.message &&
        Math.abs(new Date(r.createdAt).getTime() - new Date(local.createdAt).getTime()) < 60000
    );
    if (!map.has(idKey) && !isDuplicateByContent) {
      map.set(idKey, {
        ...local,
        status: local.status || "unread",
        source: local.source || "local",
      });
    }
  }

  return Array.from(map.values()).sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}
