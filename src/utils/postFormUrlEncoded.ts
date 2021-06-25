const encode = (data: { [key: string]: any }) => {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default async (formName: string, values: any) =>
  fetch('https://galileo-insights.com/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: encode({
      'form-name': formName,
      ...values,
    }),
  });
