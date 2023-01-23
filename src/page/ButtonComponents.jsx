import Button from '@mui/material/Button';
import { Box, Typography } from '@mui/material';
import { Stack } from '@mui/system';



export default function ButtonComponents() {
  const size = ["large", "medium", "small"]
  const color = ["primary", "secondary", "error", "warning", "info", "success"]
  const state = ["enabled", "hovered", "focused", "disabled", "loading"]
  const variant = ["contained", "outlined", "text"]

  return (
    <Box mt={4} sx={{ '& div': { mb: 4 } }}>
      <Typography>variant</Typography>
      {variant.map(__variant => (
        color.map(__color => state.map(__state =>
          <Button size="large" color={__color} state={__state} variant={__variant} >Button</Button>
        )
        )
      ))}
    </Box>
  )
}
