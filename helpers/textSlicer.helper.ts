export const textSlicer = (sliceAmount: number, text: string) => {
  if (text.length > sliceAmount) {
    return text.slice(0, sliceAmount) + "...";
  }
  return text;
};
