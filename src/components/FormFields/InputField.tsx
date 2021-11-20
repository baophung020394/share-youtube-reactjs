import { createStyles, makeStyles, TextField, Theme } from '@material-ui/core';
import React, { InputHTMLAttributes } from 'react';
import { useController } from 'react-hook-form';
import { Control } from 'react-hook-form';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: '#ffffff',
    },
    inputform: {
      maxWidth: 200,
      minWidth: 200,
      // minHeight: 60,
      background: '#ffffff',
      margin: '0 20px 0 0',
    },
  })
);

export interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  control: Control<any>;
  label?: string;
}

export function InputField({ name, control, label, ...inputProps }: InputFieldProps) {
  const classes = useStyles();
  const {
    field: { value, onChange, onBlur, ref },
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
  });

  return (
    <TextField
      className={classes.inputform}
      size='small'
      margin='normal'
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      label={label}
      variant='outlined'
      inputRef={ref}
      error={invalid}
      helperText={error?.message}
      inputProps={inputProps}
    />
  );
}
