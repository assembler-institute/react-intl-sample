const api = {};

api.login = async (values) => {
  const res = await new Promise((res, rej) => {
    setTimeout(() => {
      res({
        data: { ...values }
      });
    }, 1500);
  });
  return res;
};

api.signUp = async (values) => {
  const res = await new Promise((res, rej) => {
    setTimeout(() => {
      res({
        data: { ...values }
      });
    }, 1500);
  });
  return res;
};

export default api;
