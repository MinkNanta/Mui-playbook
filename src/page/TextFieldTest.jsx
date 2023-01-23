import { Box, TextField, Typography } from '@mui/material'
import Button from '@mui/material/Button';
import React from 'react'

export default function TextFieldTest() {
    const id = ["outlined-basic", "filled-basic", "standard-basic"]
    const color = ["primary", "secondary", "error", "warning", "info", "success"]
    const state = ["enabled", "disabled",]
    const variant = ["outlined", "filled", "standard"]

    return (<Box>
        <Typography variant="h4" gutterBottom>All Text Field</Typography>
        {variant.map(__variant => (
            color.map(__color => state.map(__state => id.map(__id =>
                <TextField sx={{ margin: "6px" }}
                    id={__id}
                    label={__id}
                    color={__color}
                    disabled={__state === "disabled"}
                    variant={__variant} >
                    TextField : {__variant} {__color} {__state}
                </TextField>
            )
            )
            )
        ))
        }

    </Box >
    )
}
