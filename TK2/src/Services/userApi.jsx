export const getUsers = async () => {
    const res = await fetch('/data/user.json');
    return res.json();
  };
  