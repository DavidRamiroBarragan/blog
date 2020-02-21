import React from 'react';
export const state = {
  skills: [
    {
      id: 1,
      name: 'ReactJS',
    },
  ],
};

export const MyContext = React.createContext(state);
