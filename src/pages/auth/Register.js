import React, { useState } from 'react';
import {
  Grid,
  CircularProgress,
  Typography,
  Button,
  TextField,
  Fade,
  Card,
  CardContent,
  Box,
  FormControlLabel,
  Checkbox,
  MenuItem,
  IconButton,
  InputAdornment,
} from '@mui/material';
import { withRouter } from 'react-router-dom';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import useStyles from './styles';
import { useUserDispatch, loginUser } from '../../context/UserContext';

function Register(props) {
  const classes = useStyles();
  const userDispatch = useUserDispatch();

  // Local state
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [nameValue, setNameValue] = useState('');
  const [loginValue, setLoginValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [confirmPasswordValue, setConfirmPasswordValue] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [language, setLanguage] = useState('english');
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleRegister = () => {
    if (!acceptTerms) {
      setError('Please accept the terms and conditions');
      return;
    }
    if (passwordValue !== confirmPasswordValue) {
      setError('Passwords do not match');
      return;
    }
    setError(null);
    setIsLoading(true);

    // TODO: Implement registration logic with backend
    setTimeout(() => {
      setIsLoading(false);
      props.history.push('/login');
    }, 1500);
  };

  return (
    <Grid container className={classes.container}>
      <div className={classes.formContainer}>
        <Card className={classes.card}>
          <CardContent>
            <div className={classes.form}>
              <Typography variant="h1" className={classes.greeting}>
                Welcome to CoCIS Recovery
              </Typography>
              <Typography variant="h2" className={classes.subGreeting}>
                Create your account
              </Typography>
              <Fade in={error}>
                <Typography color="error" className={classes.errorMessage}>
                  {error}
                </Typography>
              </Fade>
              <TextField
                id="name"
                InputProps={{
                  classes: {
                    underline: classes.textFieldUnderline,
                    input: classes.textField,
                  },
                }}
                value={nameValue}
                onChange={e => setNameValue(e.target.value)}
                margin="normal"
                placeholder="Full Name"
                type="text"
                fullWidth
              />
              <TextField
                id="email"
                InputProps={{
                  classes: {
                    underline: classes.textFieldUnderline,
                    input: classes.textField,
                  },
                }}
                value={loginValue}
                onChange={e => setLoginValue(e.target.value)}
                margin="normal"
                placeholder="Email Address"
                type="email"
                fullWidth
              />
              <TextField
                id="password"
                InputProps={{
                  classes: {
                    underline: classes.textFieldUnderline,
                    input: classes.textField,
                  },
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                value={passwordValue}
                onChange={e => setPasswordValue(e.target.value)}
                margin="normal"
                placeholder="Password"
                type={showPassword ? "text" : "password"}
                fullWidth
              />
              <TextField
                id="confirmPassword"
                InputProps={{
                  classes: {
                    underline: classes.textFieldUnderline,
                    input: classes.textField,
                  },
                }}
                value={confirmPasswordValue}
                onChange={e => setConfirmPasswordValue(e.target.value)}
                margin="normal"
                placeholder="Confirm Password"
                type="password"
                fullWidth
              />
              <TextField
                id="language"
                select
                label="Language"
                value={language}
                onChange={e => setLanguage(e.target.value)}
                fullWidth
                margin="normal"
              >
                <MenuItem value="english">English</MenuItem>
                <MenuItem value="luganda">Luganda</MenuItem>
                <MenuItem value="swahili">Swahili</MenuItem>
              </TextField>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={acceptTerms}
                    onChange={e => setAcceptTerms(e.target.checked)}
                    color="primary"
                  />
                }
                label="I accept the terms and conditions"
              />
              <Box mt={2}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  fullWidth
                  onClick={handleRegister}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <CircularProgress size={26} />
                  ) : (
                    "Create Account"
                  )}
                </Button>
                <Button
                  color="primary"
                  size="large"
                  className={classes.loginLink}
                  onClick={() => props.history.push('/login')}
                >
                  Already have an account? Sign in
                </Button>
              </Box>
            </div>
          </CardContent>
        </Card>
      </div>
    </Grid>
  );
}

export default withRouter(Register); 