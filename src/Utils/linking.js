const config = {
  screens: {
    tab: {
      screens: {
        activityStack: {
          screens: {
            ActivityStack: 'activity'
          }
        },
      },
    },
  },
};

const linking = {
  prefixes: ['mychat://'],
  config,
};

export default linking;