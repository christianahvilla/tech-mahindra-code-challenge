import { Grid, Typography } from '@mui/material';
import { useGameLogic } from '../hooks/useGameLogic/useGameLogic';
import { GameCard } from '../components/game-card.element';

export const Game = () => {
  const { cards, handleCardClick, errorCount } = useGameLogic();

    return (
      <>
            <Typography variant="h6" component="div" gutterBottom>
        Errors: {errorCount}
      </Typography>
    <Grid container spacing={2}>
      {cards.map(({ text, key, completed, clicked, wrong }) => (
        <Grid item key={`${text}-${key}`} xs={6} sm={3} md={2}>
          <GameCard
            text={text}
            keyProp={key}
            completed={completed}
            clicked={clicked}
            wrong={wrong}
            onClick={handleCardClick}
          />
        </Grid>
      ))}
            </Grid>
      </>
            
  );
};

