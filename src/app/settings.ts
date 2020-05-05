const NODE_ENV = process.env.NODE_ENV as string;

const settings = {
  production: {
    api: {}
  },
  staging: {
    api: {}
  },
  development: {
    api: {}
  }
};

export default settings[NODE_ENV];
