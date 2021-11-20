import { Box, Theme, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectYoutubeList, youtubeActions } from './homeSlice';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '80%',
    margin: 'auto',
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  box: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '70%',
    boxShadow:
      '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)',
    minHeight: 300,
    marginBottom: 10
  },
  left: {
    flex: 1,
  },
  right: {
    flex: 1,
    padding: 10,
  },
  des: {
    fontStyle: 'italic',
  },
  text: {
    fontStyle: 'italic',
  },
}));

export function Home() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const listYoutube = useSelector(selectYoutubeList);

  useEffect(() => {
    dispatch(youtubeActions.fetchYoutubeList());
  }, [dispatch]);

  return (
    <Box className={classes.root}>
      <Box className={classes.main}>
        {listYoutube
          ? listYoutube.map((item, idx) => (
              <Box className={classes.box} key={idx}>
                <Box className={classes.left}>
                  <iframe
                    width='100%'
                    height='100%'
                    src={item.source}
                    title='YouTube video player'
                    frameBorder='0'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                    allowFullScreen
                  ></iframe>
                </Box>
                <Box className={classes.right}>
                  <Typography variant='h6'>Title {idx + 1}</Typography>
                  <Typography className={classes.des} variant='body2'>
                    Discription:
                  </Typography>
                  <Typography className={classes.text} variant='body2'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque, similique
                    saepe? Libero numquam sequi voluptatem commodi expedita, ratione non sint,
                    dignissimos quaerat explicabo porro nemo aperiam, omnis ipsum tempora debitis!
                  </Typography>
                </Box>
              </Box>
            ))
          : null}
      </Box>
    </Box>
  );
}
