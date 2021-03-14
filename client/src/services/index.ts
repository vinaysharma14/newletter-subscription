type Method = 'GET' | 'POST';
type Body = BodyInit | null | undefined;

export const call = async (method: Method, endpoint: string, body: Body): Promise<Response['json']> => {
  const baseUrl = process.env.REACT_APP_SERVER_BASEURL;

  try {
    const response = await fetch(`${baseUrl}/${endpoint}`, {
      body,
      method,
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.status > 200) {
      throw new Error(`${response.status}`);
    }

    return await response.json();
  } catch (error) {
    throw new Error(error);
  }
};
