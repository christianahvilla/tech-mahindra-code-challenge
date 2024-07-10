import { Card, CardContent, Typography } from '@mui/material';
import './styles.css'

interface GameCardProps {
  text: string;
  keyProp: string;
  completed: boolean;
  clicked: boolean;
  wrong: boolean;
  onClick: (key: string, text: string) => void;
}

export const GameCard  = ({ text, keyProp, completed, clicked, wrong, onClick }: GameCardProps) => {

  const handleClick = () => {
    onClick(keyProp, text);
  };

  return (
    <Card className={`$card ${completed ? 'correct' : ''} ${clicked ? 'selected' : ''} ${wrong ? 'wrong' : ''}`} onClick={handleClick}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
};
