const config = {
  screens: {
    // activity: {
    //   path: 'activity',
    // },
    // accountDetail: {
    //   path: 'accountDetail',
    // },

    tab: {
      screens: {
          activityStack: {
            screens:{
              ActivityStack:'activity'
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