type TFile = {
  recordId: string;
  filename: string;
  collectionName: string;
};

export function getPocketBaseFileUrl({
  recordId,
  filename,
  collectionName,
}: TFile): string {
  if (!filename) return "";
  if (filename.startsWith("http://") || filename.startsWith("https://")) {
    return filename;
  }
  return ${import.meta.env.VITE_API_BASE_URL}/api/files///;
}
