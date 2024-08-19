
export function getImagePath(imageName) {
    const isDev = process.env.NODE_ENV === 'development';
    return isDev ? `/${imageName}` : `./${imageName}`;
  }
  