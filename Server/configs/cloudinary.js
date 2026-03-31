import { v2 as cloudinary } from "cloudinary";
import { envVal } from "../utils/env.js";

export function parseCloudinaryEnvUrl(urlString) {
  try {
    const u = new URL(urlString);

    if (u.protocol !== "cloudinary:") return null;

    return {
      cloud_name: u.hostname,
      api_key: decodeURIComponent(u.username),
      api_secret: decodeURIComponent(u.password),
    };
  } catch {
    return null;
  }
}

const connectCloudinary = async () => {
  const url = process.env.CLOUDINARY_URL;

  // .env commonly stores secrets with quotes (e.g. CLOUDINARY_API_SECRET='...').
  // Those quotes must not be included in Cloudinary's signing secret.
  let cloud_name = envVal(process.env.CLOUDINARY_CLOUD_NAME);
  let api_key = envVal(process.env.CLOUDINARY_API_KEY);
  let api_secret = envVal(process.env.CLOUDINARY_API_SECRET);

  if (url) {
    const parsed = parseCloudinaryEnvUrl(url);

    if (parsed) {
      cloud_name = parsed.cloud_name;
      api_key = parsed.api_key;
      api_secret = parsed.api_secret;
    }
  }

  cloudinary.config({
    cloud_name,
    api_key,
    api_secret,
    secure: true,
  });

  // Debug: Log Cloudinary config (do NOT log secrets in production)
  // console.log("Cloudinary config:", { cloud_name, api_key, api_secret });
  console.log("✅ Cloudinary connected");
};

export default connectCloudinary;
