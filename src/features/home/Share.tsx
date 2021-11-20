import { Box, Button, CircularProgress, makeStyles, Theme, Typography } from '@material-ui/core';
import authApi from 'api/authApi';
import youtubeApi from 'api/youtubeApi';
import { InputField } from 'components/FormFields';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '80%',
    margin: 'auto',
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px 0',
  },
  box: {
    display: 'flex',
    justifyContent: 'center',
    width: '50%',
    boxShadow:
      '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)',
    minHeight: 300,
    marginBottom: 10,
    alignItems: 'center',
  },
  groupsInput: {
    display: 'flex',
    alignItems: 'center',
    ' &> .MuiInputBase-root': {
      background: 'red',
    },
    justifyContent: 'center'
  },
  button: {
    backgroundColor: '#ffffff',
    color: '#000',
    padding: '6px 16px',
    marginRight: 10,
    '&:hover': {
      background: '#ffffff',
    },
  },
  hint: {
    fontSize: 14,
    fontStyle: 'italic',
    color: 'grey',
    marginBottom: 10
  }
}));

export interface ShareFormProps {
  initialValues?: any;
  onSubmit?: (formValues: any) => void;
}

export default function Share({ initialValues, onSubmit }: ShareFormProps) {
  const classes = useStyles();
  const history = useHistory();
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<any>({
    defaultValues: initialValues,
  });

  const handleFormSubmit = async (formValues: any) => {
    console.log('formValues', formValues);
    try {
      await youtubeApi.share(formValues);
      history.push('/');
    } catch (error) {
      console.log('Failed to share', error);
    }
  };

  return (
    <Box className={classes.root}>
      <Box className={classes.main}>
        <Box className={classes.box}>
          <form onSubmit={handleSubmit(handleFormSubmit)}>
            <Typography className={classes.hint}>Please input like format *https://www.youtube.com/embed/-_X6PhkjpzU</Typography>
            <Box className={classes.groupsInput}>
              <InputField label='Youtube Url' control={control} type='text' name='source' />
              <Button
                className={classes.button}
                type='submit'
                variant='contained'
                color='primary'
                disabled={isSubmitting}
              >
                {isSubmitting && <CircularProgress size={16} color='primary' />} Share
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
    </Box>
  );
}
