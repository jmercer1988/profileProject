// app/page.tsx
'use client'; // This allows you to use client-side components 

import Image from 'next/image';
import { Button, Typography, Container, Grid, Box } from '@mui/material';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      {/* Hero Section */}
      <div className="text-center">
        <Typography variant="h2" component="h1" gutterBottom sx={{ color: 'primary.main', fontWeight: 'bold' }}> 
          Welcome to the Esports Hub
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          Your one-stop shop for esports news, stats, and more!
        </Typography>
        <Button variant="contained" color="primary" size="large" component={Link} href="/news" sx={{ backgroundColor: 'secondary.main', '&:hover': { backgroundColor: 'secondary.dark' } }}>
          Explore Now
        </Button>
      </div>

      {/* Featured Match Section */}
      <Container maxWidth="lg" sx={{ py: 8 }} className="text-center"> 
        <Typography variant="h4" component="h2" gutterBottom>
          Featured Match
        </Typography>
        <Box>
          {/* Add content for featured match here (e.g., MatchCard component) */}
        </Box>
      </Container>

      {/* Top Players/Teams Section */}
      <Container maxWidth="lg" sx={{ mt: 8 }} className="text-center">
        <Typography variant="h4" component="h2" gutterBottom>
          Top Players & Teams
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>{/* Content */}</Grid>
          <Grid item xs={12} sm={6}>{/* Content */}</Grid>
        </Grid>
      </Container>

      {/* Call to Action Section */}
      <Container maxWidth="sm" sx={{ mt: 8 }} className="text-center">
        <Typography variant="h6" component="h3" gutterBottom>
          Ready to Dive In?
        </Typography>
        <Button variant="outlined" color="secondary" size="large" component={Link} href="/signup">
          Sign Up Now
        </Button>
      </Container>
    </main>
  );
}
