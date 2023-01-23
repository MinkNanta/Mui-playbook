import { Grid, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import opnToken from "../theme.json"

export default function Palette() {

  const opnColor = opnToken.palette

  const mapColor = ["main", "dark", "darker", "darkest"]

  return <>
    <Typography variant="h4" gutterBottom>Palette</Typography>
    {Object.entries(opnColor).map(([name, entry], i) => {
      if (name !== "divider") {
        return <Box >
          <Typography variant="h6" gutterBottom mt={8} mb={2}>{name} </Typography>
          <Box>
            {Object.entries(entry).map(([type, obj], i2) => {
              if (isNaN(type) && type.length > 1) {
                return <Box sx={{
                  padding: 2,
                  backgroundColor: `${name}.${type}`,
                  color: mapColor.find(e => e === type) ? `${name}.contrast` : ""
                }}>
                  <Typography variant="body2" >{name}.{type}</Typography>
                  <Typography variant="body2" >{obj}</Typography>
                </Box>
              }
            }
            )}
          </Box>
          <Box sx={{ display: "flex", width: "100%" }}>
            {Object.entries(entry).map(([type, obj], i2) => {
              if (!isNaN(type) && type.length > 1) {
                return <Box sx={{
                  padding: 2,
                  backgroundColor: `${name}.${type}`,
                  color: type * 1 >= 600 ? `${name}.contrast` : "",
                }
                }>
                  <p >{name}.{type}</p>
                  <p>{obj}</p>
                </Box>
              }
            }
            )}
          </Box>
        </Box >
      } else {
        return (
          <Box>
            <Typography variant="h6" gutterBottom mt={8} mb={2}>{name}</Typography>
            <Box sx={{
              padding: 2,
              backgroundColor: `${name}`
            }}>{name} {entry}</Box>
          </Box>
        )
      }
    }
    )}
    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)' }}>

    </Box>
  </>
}
