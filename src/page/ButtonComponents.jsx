import Button from '@mui/material/Button';
import { Box, Typography } from '@mui/material';
import { Stack } from '@mui/system';



export default function ButtonComponents() {
  return (
    <Box mt={4} sx={{ '& div': { mb: 4 } }}>
      <Typography variant="h4" gutterBottom>Button</Typography>
      <Typography variant="h6" gutterBottom>Basic button</Typography>
      <Box>
        <Stack spacing={2} direction="row">
          <Button variant="text">Text</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
        </Stack>
      </Box>
      <Box>
        <Typography variant="h6" gutterBottom>Text button</Typography>
        <Stack direction="row" spacing={2}>
          <Button>Primary</Button>
          <Button disabled>Disabled</Button>
          <Button href="#text-buttons">Link</Button>
        </Stack>
      </Box>
      <Box>
        <Typography variant="h6" gutterBottom>Contained button</Typography>
        <Stack direction="row" spacing={2}>
          <Button variant="contained">Contained</Button>
          <Button variant="contained" disabled>
            Disabled
          </Button>
          <Button variant="contained" href="#contained-buttons">
            Link
          </Button>
        </Stack>
      </Box>
      <Box>
        <Typography variant="h6" gutterBottom>disableElevation</Typography>
        <Stack direction="row" spacing={2}>
          <Button variant="contained" disableElevation>
            Disable elevation
          </Button>
        </Stack>
      </Box>
      <Box>
        <Typography variant="h6" gutterBottom>Outlined button</Typography>
        <Stack direction="row" spacing={2}>
          <Button variant="outlined">Primary</Button>
          <Button variant="outlined" disabled>
            Disabled
          </Button>
          <Button variant="outlined" href="#outlined-buttons">
            Link
          </Button>
        </Stack>
      </Box>
      <Box>
        <Typography variant="h6" gutterBottom>Color button</Typography>
        <Box sx={{ '& button': { m: 1 } }}>
          <Box>
            <Button size="small">Small</Button>
            <Button size="medium">Medium</Button>
            <Button size="large">Large</Button>
          </Box>
          <Box>
            <Button variant="outlined" size="small">
              Small
            </Button>
            <Button variant="outlined" size="medium">
              Medium
            </Button>
            <Button variant="outlined" size="large">
              Large
            </Button>
          </Box>
          <Box>
            <Button variant="contained" size="small">
              Small
            </Button>
            <Button variant="contained" size="medium">
              Medium
            </Button>
            <Button variant="contained" size="large">
              Large
            </Button>
          </Box>
        </Box>
      </Box>
      <Box>
        <Typography variant="h6" gutterBottom>Color button</Typography>
        <Stack direction="row" spacing={2}>
          <Button color="secondary">Secondary</Button>
          <Button variant="contained" color="success">
            Success
          </Button>
          <Button variant="outlined" color="error">
            Error
          </Button>
        </Stack>
      </Box>
    </Box>
  )
}
