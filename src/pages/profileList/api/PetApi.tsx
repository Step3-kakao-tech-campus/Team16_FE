const getPetProfiles = async () => {
  const response = await fetch(`${process.env.REACT_APP_URI}/pet/profiles`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const json = await response.json();
  return json.response;
};

export default getPetProfiles;
