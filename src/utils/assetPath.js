const assetPath = (relativePath = '') => {
  const publicUrl = process.env.PUBLIC_URL || '';
  if (!relativePath) {
    return publicUrl;
  }
  return relativePath.startsWith('/')
    ? `${publicUrl}${relativePath}`
    : `${publicUrl}/${relativePath}`;
};

export default assetPath;
