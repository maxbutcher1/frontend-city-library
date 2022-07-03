import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { Container, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <React.Fragment>
      <Container>
        <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Link to="/">
          <Button size="small">Бібліотека</Button>
          </Link>
          <Typography
            component="h2"
            variant="h5"
            color="inherit"
            align="center"
            noWrap
            sx={{ flex: 1 }}
          >

          </Typography>

          <Grid item xs={12}>
            <Link to="/register">
            <Button variant="outlined" size="small" >
              Реєстрація
            </Button></Link>
          </Grid>
          <Grid item xs={12}>
            <Link to="/login">
            <Button variant="outlined" size="small">
              Увійти
            </Button></Link>
          </Grid>
        </Toolbar>
        <Toolbar
          component="nav"
          variant="dense"
          sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
        >

        </Toolbar>
      </Container>
    </React.Fragment>
  )
}
