export const areaOfTriangle = (heigth, base) => {
  return (heigth * base) / 2;
};

export const areaOfRectangle = (length, width) => {
  return length * width;
};

export const areaOfCircle = (radius) => {
  const sonuc = Math.pow(radius, 2) * Math.PI;

  return Number(sonuc.toFixed(2));
};
