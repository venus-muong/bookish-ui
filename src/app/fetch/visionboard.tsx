const get = async () => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}app/visionboard/`;
  const options = {
    method: 'GET',
  };
  const response = await fetch(url, options);
  const json = await response.json();
  return json;
};

const post = async (data: { title: string; images: string[] }) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}app/visionboard/`;
  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };
  const response = await fetch(url, options);
  const json = await response.json();
  return json;
};

const put = async (data: { id: number; title: string; images: string[] }) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}app/visionboard/`;
  const options = {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };
  const response = await fetch(url, options);
  const json = await response.json();
  return json;
};

module.exports = {
  get,
  post,
  put,
};
