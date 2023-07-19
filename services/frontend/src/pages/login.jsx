import { styled } from '@mui/system';

const Background = styled('div')(({ theme }) => ({
}));

const CustomDiv = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  marginLeft: '25%',
  minHeight: '460px',
  marginRight: '25%',
  backgroundColor: 'black',
  marginTop: '5%',
});

const LeftColumn = styled('div')({
  width: '50%',
  padding: '20px',
});

const RightColumn = styled('div')({
  width: '50%',
  padding: '20px',
  position: 'relative',
  overflow: 'hidden',
});

const WavesAnimation = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: '0',
  right: '0',
  bottom: '0',
  left: '0',
  background: `url(path/to/waves.gif)`,
  backgroundSize: 'cover',
  animation: 'waves 5s infinite linear',
  '@keyframes waves': {
    '0%': { transform: 'translateX(0)' },
    '100%': { transform: 'translateX(-100%)' },
  },
}));

function Login() {
  return (
    <Background>
      <CustomDiv>
        <LeftColumn>
          <h1>Login</h1>
        </LeftColumn>
        <RightColumn>
          <WavesAnimation />
        </RightColumn>
      </CustomDiv>
    </Background>
  );
}

export default Login;
