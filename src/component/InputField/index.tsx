// @flow
import * as React from 'react';
import { TextField } from '@mui/material';
import { ChangeEventHandler } from 'react';

type Props = {
  onChange: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
};
export const InputField = ({ onChange }: Props) => {
  return <TextField id="standard-basic" label="タスクを追加" variant="outlined" onChange={onChange} />;
};
