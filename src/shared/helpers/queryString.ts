export function queryString(obj?: Record<string, unknown>): string {
  if (!obj) return '';
  const params = new URLSearchParams();

  Object.entries(obj).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      // Handle array values
      value.forEach((item) => {
        if (item !== null && item !== undefined && item !== '') {
          params.append(key, item?.toString());
        }
      });
    } else if (value !== null && value !== undefined && value !== '') {
      // Handle non-array values
      params.append(key, value?.toString());
    }
  });

  return `?${params.toString()}`;
}
