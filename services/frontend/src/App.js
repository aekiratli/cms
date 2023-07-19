import { Typography } from "@mui/material";
import { useTranslation } from 'react-i18next';

function App() {

  const { t } = useTranslation();

  return (
    <div>
      <Typography variant="h1" component="div" gutterBottom>
        {t('Welcome to React')}
      </Typography>
    </div>
  );
}

export default App;
