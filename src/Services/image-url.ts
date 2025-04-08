import noImage from '../assets/no_images.webp';

const getCroppedImageUrl = (URL: string) => {
  if (!URL) return noImage;
  const target = "media/";
  const index = URL.indexOf(target) + target.length;
  return URL.slice(0, index) + "crop/600/400" + URL.slice(index);
};
export default getCroppedImageUrl;
