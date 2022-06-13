const config = {
    screens: {
        activity: {
        path: 'activity',
      },
      accountDetail: {
        path: 'accountDetail',
      },
    //   otp: {
    //     path: 'otp',
    //   },
    //   Drawer: {
    //     screens: {
    //       App: {
    //         screens: {
    //           profile: 'profile',
    //           home: 'home',
    //           copyCategory: 'copyCategory',
    //           plusMinus: 'plusMinus',
    //           copy: 'copy',
    //           profile: 'profile',
    //           allEntriesReport: 'allEntriesReport',
    //           filter: 'filter',
    //           addUser: 'addUser',
    //         },
    //       },
    //     },
    //   },
    },
  };
  
  const linking = {
    prefixes: ['mychat://'],
    config,
  };
  
  export default linking;