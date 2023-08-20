import {z} from 'zod';

export const navigations = {
  MainBottomTab: {
    name: 'MainBottomTab',
    params: z.object({}),
  },
  HomeStack: {
    name: 'HomeStack',
    params: z.object({}),
  },
} as const;

export const screens = {
  Home: {
    name: 'HomeScreen',
    params: z.object({}),
  },
} as const;
