export function convertedNumber(value: any) {
  let newValue = value;
  const suffixes = ["", "K", "M", "B", "T"];
  let suffixNum = 0;
  while (newValue >= 1000) {
    newValue /= 1000;
    suffixNum++;
  }
  if (!newValue) {
    return "∞";
  }
  newValue = newValue.toPrecision(4);

  newValue += suffixes[suffixNum];
  return newValue;
}
