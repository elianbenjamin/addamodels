interface ImageMap {
  [key: string]: string;
}

const images: Record<string, { default: string }> = import.meta.glob(
  "./*.{png,jpg,jpeg,svg}",
  { eager: true }
);

const imagePaths: ImageMap = Object.keys(images).reduce(
  (acc: ImageMap, path: string) => {
    const imageName: string = path.replace("./", "");

    acc[imageName] = images[path].default;
    return acc;
  },
  {}
);

export default imagePaths;
