import React, { useState, useEffect } from 'react';
import {
  Grid,
  CircularProgress,
  Tabs,
  Tab,
  Grow,
  TextField as Input,
  Typography,
  Box,
  Alert,
  FormControlLabel,
  Switch,
  Divider,
} from '@mui/material';
import { withRouter } from 'react-router-dom';
import classnames from 'classnames';
import SupportIcon from '@mui/icons-material/Support';
import LanguageIcon from '@mui/icons-material/Language';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

// styles
import useStyles from './styles';

// logo
import logo from './logo.svg';
import google from '../../images/google.svg';

// context
import {
  useUserDispatch,
  loginUser,
  registerUser,
  sendPasswordResetEmail,
} from '../../context/UserContext';
import { receiveToken, doInit } from '../../context/UserContext';

//components
import { Button } from '../../components/Wrappers';
import Widget from '../../components/Widget';
import config from '../../config';

// Update greeting to be more supportive for recovery context
const getGreeting = () => {
  const d = new Date();
  if (d.getHours() >= 4 && d.getHours() <= 12) {
    return 'Good Morning';
  } else if (d.getHours() >= 13 && d.getHours() <= 16) {
    return 'Good Afternoon';
  } else if (d.getHours() >= 17 && d.getHours() <= 23) {
    return 'Good Evening';
  } else {
    return 'Hello There';
  }
};

// Emergency Support Button Component
const EmergencySupport = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  
  return (
    <Box className={classes.emergencyContainer}>
      <Button 
        variant="contained" 
        color="error" 
        fullWidth
        size="large"
        startIcon={<SupportIcon />}
        className={classes.emergencyButton}
        onClick={() => setOpen(!open)}
      >
        Need Immediate Support?
      </Button>
      
      {open && (
        <Box className={classes.emergencyContent}>
          <Typography variant="h6" gutterBottom>
            Support Resources:
          </Typography>
          <Typography variant="body1" gutterBottom>
            • National Addiction Hotline: <strong>0800-123-456</strong>
          </Typography>
          <Typography variant="body1" gutterBottom>
            • Campus Counseling: <strong>0772-789-012</strong>
          </Typography>
          <Button 
            variant="contained" 
            color="primary" 
            fullWidth
            onClick={() => window.location.href = '/app/emergency-chat'}
          >
            Start Emergency Chat
          </Button>
        </Box>
      )}
    </Box>
  );
};

function Login(props) {
  const classes = useStyles();
  const userDispatch = useUserDispatch();

  // State values
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [activeTabId, setActiveTabId] = useState(0);
  const [nameValue, setNameValue] = useState('');
  const [loginValue, setLoginValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [isForgot, setIsForgot] = useState(false);
  const [forgotEmail, setForgotEmail] = useState('');
  const [language, setLanguage] = useState('en'); // Default to English

  // Add demo login credentials option
  const useDemoCredentials = () => {
    // Update with default credentials from config.js
    setLoginValue(config.defaultEmail || "admin@flatlogic.com");
    setPasswordValue(config.defaultPassword || "password");
  };

  // Add your login validation
  const isLoginFormValid = () => {
    return loginValue.length !== 0 && passwordValue.length !== 0;
  };

  const loginOnEnterKey = (e) => {
    if (e.key === 'Enter' && isLoginFormValid()) {
      loginUser(
        userDispatch,
        loginValue,
        passwordValue,
        props.history,
        setIsLoading,
        setError
      );
    }
  };

  return (
    <Grid container className={classes.container}>
      <div className={classes.logotypeContainer}>
        <img src={logo} alt="logo" className={classes.logotypeImage} />
        <Typography className={classes.logotypeText}>
          Recovery System
        </Typography>
        <Typography className={classes.supportText}>
          Your journey to wellness starts here
        </Typography>
      </div>
      <div className={classes.formContainer}>
        <div className={classes.languageToggle}>
          <FormControlLabel
            control={
              <Switch
                checked={language === 'lg'}
                onChange={() => setLanguage(language === 'en' ? 'lg' : 'en')}
                color="primary"
              />
            }
            label={
              <Box display="flex" alignItems="center">
                <LanguageIcon className={classes.languageIcon} />
                <span style={{ marginLeft: 8 }}>
                  {language === 'en' ? 'English' : 'Luganda'}
                </span>
              </Box>
            }
          />
        </div>
        
        <EmergencySupport />
        
        <div className={classes.form}>
          {isForgot ? (
            <>
              <Typography variant="h3" className={classes.greeting}>
                Reset Password
              </Typography>
              <Typography className={classes.supportiveMessage}>
                Enter your email and we'll send you a link to reset your password.
              </Typography>
              {error && <Alert severity="error" className={classes.errorMessage}>{error}</Alert>}
              <Input
                id="email"
                InputProps={{
                  classes: {
                    underline: classes.textFieldUnderline,
                    input: classes.textField,
                  },
                  startAdornment: <EmailOutlinedIcon className={classes.inputIcon} />,
                }}
                value={forgotEmail}
                onChange={e => setForgotEmail(e.target.value)}
                margin="normal"
                placeholder="Email Address"
                type="email"
                fullWidth
              />
              <div className={classes.formButtons}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  onClick={() => {
                    sendPasswordResetEmail(forgotEmail);
                    setIsForgot(false);
                  }}
                  disabled={forgotEmail.length === 0}
                >
                  Send Reset Link
                </Button>
                <Button
                  color="primary"
                  size="large"
                  onClick={() => setIsForgot(false)}
                  className={classes.forgetButton}
                >
                  Back to Login
                </Button>
              </div>
            </>
          ) : (
            <>
              <Typography variant="h2" className={classes.greeting}>
                {getGreeting()},
              </Typography>
              <Typography variant="h3" className={classes.subGreeting}>
                Welcome to Recovery Support
              </Typography>
              <Typography className={classes.supportiveMessage}>
                Taking care of yourself begins with a simple step
              </Typography>
              {error && <Alert severity="error" className={classes.errorMessage}>{error}</Alert>}
              <Tabs
                value={activeTabId}
                onChange={(e, id) => setActiveTabId(id)}
                indicatorColor="primary"
                textColor="primary"
                centered
                className={classes.tabs}
              >
                <Tab
                  label="Login"
                  classes={{ root: classes.tab }}
                />
                <Tab
                  label="Create Account"
                  classes={{ root: classes.tab }}
                />
              </Tabs>
              {activeTabId === 0 && (
                <React.Fragment>
                  <Input
                    id="email"
                    InputProps={{
                      classes: {
                        underline: classes.textFieldUnderline,
                        input: classes.textField,
                      },
                      startAdornment: <EmailOutlinedIcon className={classes.inputIcon} />,
                    }}
                    value={loginValue}
                    onChange={e => setLoginValue(e.target.value)}
                    onKeyDown={loginOnEnterKey}
                    margin="normal"
                    placeholder="Email Address"
                    type="email"
                    fullWidth
                  />
                  <Input
                    id="password"
                    InputProps={{
                      classes: {
                        underline: classes.textFieldUnderline,
                        input: classes.textField,
                      },
                      startAdornment: <LockOutlinedIcon className={classes.inputIcon} />,
                    }}
                    value={passwordValue}
                    onChange={e => setPasswordValue(e.target.value)}
                    onKeyDown={loginOnEnterKey}
                    margin="normal"
                    placeholder="Password"
                    type="password"
                    fullWidth
                  />
                  <div className={classes.formButtons}>
                    {isLoading ? (
                      <CircularProgress size={26} className={classes.loginLoader} />
                    ) : (
                      <Button
                        disabled={!isLoginFormValid()}
                        onClick={() =>
                          loginUser(
                            userDispatch,
                            loginValue,
                            passwordValue,
                            props.history,
                            setIsLoading,
                            setError
                          )
                        }
                        variant="contained"
                        color="primary"
                        size="large"
                      >
                        Login to Recovery System
                      </Button>
                    )}
                    <Button
                      color="primary"
                      size="large"
                      className={classes.forgetButton}
                      onClick={() => setIsForgot(true)}
                    >
                      Forgot Password?
                    </Button>
                  </div>
                  <div className={classes.formDividerContainer}>
                    <div className={classes.formDivider} />
                    <Typography className={classes.formDividerWord}>
                      or
                    </Typography>
                    <div className={classes.formDivider} />
                  </div>
                  <Button
                    size="large"
                    className={classes.googleButton}
                    onClick={() =>
                      loginUser(
                        userDispatch,
                        loginValue,
                        passwordValue,
                        props.history,
                        setIsLoading,
                        setError,
                        'google'
                      )
                    }
                  >
                    <img
                      src={google}
                      alt="google"
                      className={classes.googleIcon}
                    />
                    &nbsp;Sign in with Google
                  </Button>
                </React.Fragment>
              )}
              
              {activeTabId === 1 && (
                <React.Fragment>
                  <Input
                    id="name"
                    InputProps={{
                      classes: {
                        underline: classes.textFieldUnderline,
                        input: classes.textField,
                      },
                      startAdornment: <PersonOutlineOutlinedIcon className={classes.inputIcon} />,
                    }}
                    value={nameValue}
                    onChange={(e) => setNameValue(e.target.value)}
                    margin="normal"
                    placeholder="Full Name"
                    type="text"
                    fullWidth
                  />
                  <Input
                    id="email"
                    InputProps={{
                      classes: {
                        underline: classes.textFieldUnderline,
                        input: classes.textField,
                      },
                      startAdornment: <EmailOutlinedIcon className={classes.inputIcon} />,
                    }}
                    value={loginValue}
                    onChange={(e) => setLoginValue(e.target.value)}
                    margin="normal"
                    placeholder="Email Address"
                    type="email"
                    fullWidth
                  />
                  <Input
                    id="password"
                    InputProps={{
                      classes: {
                        underline: classes.textFieldUnderline,
                        input: classes.textField,
                      },
                      startAdornment: <LockOutlinedIcon className={classes.inputIcon} />,
                    }}
                    value={passwordValue}
                    onChange={(e) => setPasswordValue(e.target.value)}
                    margin="normal"
                    placeholder="Password"
                    type="password"
                    fullWidth
                  />
                  <div className={classes.creatingButtonContainer}>
                    {isLoading ? (
                      <CircularProgress size={26} />
                    ) : (
                      <Button
                        onClick={() =>
                          registerUser(
                            userDispatch,
                            loginValue,
                            passwordValue,
                            props.history,
                            setIsLoading,
                            setError
                          )
                        }
                        disabled={
                          loginValue.length === 0 ||
                          passwordValue.length === 0 ||
                          nameValue.length === 0
                        }
                        size="large"
                        variant="contained"
                        color="primary"
                        fullWidth
                        className={classes.createAccountButton}
                      >
                        Begin Your Recovery Journey
                      </Button>
                    )}
                  </div>
                  <Box mt={2}>
                    <Alert severity="info" className={classes.privacyAlert}>
                      By creating an account, you agree to our privacy policy. Your information is confidential.
                    </Alert>
                  </Box>
                  <div className={classes.formDividerContainer}>
                    <div className={classes.formDivider} />
                    <Typography className={classes.formDividerWord}>
                      or
                    </Typography>
                    <div className={classes.formDivider} />
                  </div>
                  <Button
                    size="large"
                    className={classnames(
                      classes.googleButton,
                      classes.googleButtonCreating,
                    )}
                    onClick={() =>
                      loginUser(
                        userDispatch,
                        loginValue,
                        passwordValue,
                        props.history,
                        setIsLoading,
                        setError,
                        'google'
                      )
                    }
                  >
                    <img
                      src={google}
                      alt="google"
                      className={classes.googleIcon}
                    />
                    &nbsp;Sign in with Google
                  </Button>
                </React.Fragment>
              )}
            </>
          )}
        </div>
        <div className={classes.footerSpace}></div>
        <Typography 
          className={classes.copyright}
          style={{ color: '#6e6e6e' }}
        >
          © {new Date().getFullYear()}{' '}
          <a
            style={{ textDecoration: 'none', color: '#6e6e6e' }}
            href="https://cocis.mak.ac.ug"
            rel="noopener noreferrer"
            target="_blank"
          >
            COCIS
          </a>
          , Makerere University. All rights reserved.
        </Typography>
      </div>
    </Grid>
  );
}

export default withRouter(Login);
