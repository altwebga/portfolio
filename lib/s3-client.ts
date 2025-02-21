import { S3Client } from "@aws-sdk/client-s3";

const s3Client = new S3Client({
  region: process.env.YANDEX_S3_REGION || "ru-central1",
  endpoint: process.env.YANDEX_S3_ENDPOINT || "https://storage.yandexcloud.net",
  credentials: {
    accessKeyId: process.env.YANDEX_ACCESS_KEY_ID || "test",
    secretAccessKey: process.env.YANDEX_SECRET_ACCESS_KEY || "test",
  },
  // forcePathStyle: true, // Это может быть необходимо для Yandex Object Storage
});

export { s3Client };
