import { Box, Typography } from '@mui/material';

const NotFound = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#000',
      }}
    >
      <Typography variant="h1" sx={{ color: '#fff', fontWeight: 'bold' }}>
        404
      </Typography>
    </Box>
  );
};

export { NotFound };
