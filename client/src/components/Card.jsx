import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styles from './Card.module.css';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const card = ({person}) => {
    
    return <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom className={styles.card__content}>
        Developer
      </Typography>
      <Typography variant="h5" component="div" gutterBottom className={styles.card__title}>
        {person.name}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {person.age}
      </Typography>
      <Typography variant="body2" className={styles.card__content}>
        {person.description}
       </Typography>
       <Typography variant="body2" style={{color: 'blue'}} className={styles.card__description}>
        {person.quote}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </React.Fragment>
  
};

export default function OutlinedCard(person) {
  return (
    <Box sx={{ minWidth: 275 }} >
      <Card variant="outlined" style={{backgroundColor: '#ffabed'}}>{card(person)}</Card>
    </Box>
  );
}
