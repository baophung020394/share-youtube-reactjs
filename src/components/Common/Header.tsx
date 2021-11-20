import { Box, CircularProgress, IconButton } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Alert } from '@material-ui/lab';
import authApi from 'api/authApi';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { InputField } from 'components/FormFields';
import {
  authActions,
  selectCurrentUser,
  selectIsLoggedIn,
  selectIsRegister,
} from 'features/auth/authSlice';
import { User } from 'models/user';
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: '#ffffff',
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      background: '#ffffff',
      boxShadow:
        '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)',
      minHeight: 100,
    },
    title: {
      fontSize: 24,
      color: '#000',
      cursor: 'pointer',
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
    groupsInput: {
      display: 'flex',
      alignItems: 'center',
      ' &> .MuiInputBase-root': {
        background: 'red',
      },
    },
    formContainer: {
      display: 'flex',
      alignItems: 'center',
    },
    name: {
      color: '#000',
      marginRight: 15,
    },
    boxName: {
      display: 'flex',
      alignItems: 'center',
    },
  })
);
export interface LoginFormProps {
  initialValues?: User;
  onSubmit?: (formValues: User) => void;
}

export function Header({ initialValues, onSubmit }: LoginFormProps) {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const isLogged = useAppSelector(selectIsLoggedIn);
  const currentUser = useAppSelector(selectCurrentUser);
  const isRegister = useAppSelector(selectIsRegister);
  const [userProfile, setUserProfile] = useState<any>({});
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState<any>(localStorage.getItem('user'));
  const [userName, setUserName] = useState<any>(localStorage.getItem('username'));
  const history = useHistory();
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<User>({
    defaultValues: initialValues,
  });

  const handleFormSubmit = async (formValues: User) => {
    try {
      setUserProfile(formValues);
      dispatch(
        authActions.login({
          username: formValues.username,
          password: formValues.password,
        })
      );
    } catch (error) {
      console.log('Login fail', error);
    }
  };

  const handleLogoutClick = () => {
    dispatch(authActions.logout());
    localStorage.removeItem('user');
    localStorage.removeItem('username');
    window.location.replace('/');
  };

  const handleShare = () => {
    history.push('/share');
  };

  useEffect(() => {
    if (currentUser?.error || isRegister) {
      localStorage.removeItem('token');
      dispatch(
        authActions.register({
          username: userProfile.username,
          password: userProfile.password,
        })
      );
      setOpen(true);
      setTimeout(() => {
        window.location.replace('/');
      }, 1000);
    }
    if (isLogged && currentUser) {
      localStorage.setItem('user', currentUser?.token);
      localStorage.setItem('username', currentUser?.name);
      setTimeout(() => {
        window.location.replace('/');
      }, 1000);
    }
    if (isRegister && currentUser) {
      localStorage.setItem('user', currentUser?.token);
      localStorage.setItem('username', currentUser?.name);
      setTimeout(() => {
        window.location.replace('/');
      }, 1000);
    }
  }, [dispatch, isLogged, currentUser, isRegister]);

  return (
    <div className={classes.root}>
      {open ? (
        <Alert
          action={
            <IconButton
              aria-label='close'
              color='inherit'
              size='small'
              onClick={() => setOpen(false)}
            >
              X
            </IconButton>
          }
          variant='outlined'
          severity='success'
        >
          Register Success
        </Alert>
      ) : null}
      <AppBar position='static'>
        <Toolbar className={classes.header}>
          <Typography variant='h6' className={classes.title} onClick={() => history.push('/')}>
            Funny Movie
          </Typography>
          <Box className={classes.formContainer}>
            {user === null || user === undefined ? (
              <Box>
                <form onSubmit={handleSubmit(handleFormSubmit)}>
                  <Box className={classes.groupsInput}>
                    <InputField label='Username' control={control} type='text' name='username' />
                    <InputField
                      label='Password'
                      control={control}
                      type='password'
                      name='password'
                    />
                    <Button
                      className={classes.button}
                      type='submit'
                      variant='contained'
                      color='primary'
                      disabled={isSubmitting}
                    >
                      {isSubmitting && <CircularProgress size={16} color='primary' />} Login
                    </Button>
                  </Box>
                </form>
              </Box>
            ) : null}
            <Box className={classes.boxName}>
              {user ? (
                <>
                  <Typography className={classes.name}>Hi {userName && userName}!</Typography>
                  <Button
                    onClick={handleShare}
                    className={classes.button}
                    variant='contained'
                    color='primary'
                  >
                    Share
                  </Button>
                </>
              ) : null}
            </Box>
            <Box>
              {user !== null ? (
                <Button
                  onClick={handleLogoutClick}
                  className={classes.button}
                  variant='contained'
                  color='primary'
                >
                  Logout
                </Button>
              ) : null}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}
