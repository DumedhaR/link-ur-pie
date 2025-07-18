/* eslint-disable react/react-in-jsx-scope */
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { useNavigate } from 'react-router-dom';

interface FeatureCardProps {
  CoverImg: string;
  Heading: string;
  Desc: string;
  Route: string;
}

const FeatureCard = ({CoverImg, Heading, Desc, Route}: FeatureCardProps) => {
   const navigate = useNavigate();

  const handleClick = () => {
    navigate(Route);
  };
  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardActionArea onClick={handleClick}>
        <CardMedia
          component="img"
          sx={{
            height: '400px', // explicitly setting height // ensures the image scales to fill the area
          }}
          image={CoverImg}
          alt={Heading}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {Heading}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {Desc}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default FeatureCard;