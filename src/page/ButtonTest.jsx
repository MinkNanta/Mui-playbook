import { Box, Typography } from '@mui/material'
import Button from '@mui/material/Button';
import React from 'react'

export default function ButtonTest() {
    const size = ["large", "medium", "small"]
    const color = ["primary", "secondary", "error", "warning", "info", "success"]
    const state = ["enabled", "disabled",]
    const variant = ["contained", "outlined", "text"]

    return (<Box>
        <Typography variant="h4" gutterBottom>All Button</Typography>
        {variant.map(__variant => (
            color.map(__color => state.map(__state => size.map(__size =>
                <Button sx={{ margin: "6px" }}
                    loading
                    size={__size}
                    color={__color}
                    disabled={__state === "disabled"}
                    variant={__variant} >{__size} Button : {__variant} {__color} {__state} </Button>
            )
            )
            )
        ))
        }

    </Box >
    )
}
