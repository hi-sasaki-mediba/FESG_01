import React from 'react';
import { useDispatch } from 'react-redux';
import { changeTheme } from '../../slice/themeSlice';
import { MuiSwitch } from './MuiSwitch';

export const ChangeTheme = () => {
  const dispatch = useDispatch();
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isDark = e.target.checked;
    dispatch(changeTheme(isDark ? 'dark' : 'light'));
  };
  return <MuiSwitch onChange={onChange} />;
};
