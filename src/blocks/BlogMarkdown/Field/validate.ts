export const validate = (value: string) => {
  if (typeof value !== 'string' || value?.length === 0) {
    return 'This field is required.';
  }

  return true;
};