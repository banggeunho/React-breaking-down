import * as React from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import finalPropsSelectorFactory from 'react-redux/es/connect/selectorFactory';

export default function VideoCard(props) {
  return (
      <Card component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
        <CardCover>
          <video
            autoPlay
            loop
            muted
            poster={props.poster} 
          >
            <source
              src={props.videoSrc} 
              type="video/mp4"
            />
          </video>
        </CardCover>
        <CardContent sx={{ justifyContent: 'flex-end' }}>
          <Typography
            level="h2" fontSize="lg" textColor="#fff" mb={1}
          >
            {props.title}
          </Typography>
          <Typography
        //   startDecorator={<LocationOnRoundedIcon />}
          textColor="neutral.300"
        >
          {props.desc} 
        </Typography>
        </CardContent>
      </Card>
  );
}