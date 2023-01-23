import { Box, Typography } from '@mui/material'
import React from 'react'
import opnToken from "../theme.json"


export default function TypographyTH() {
    const fontFamily = opnToken.typography.fontFamilyTH

    return (
        <Box fontFamily="fontFamilyTH" sx={{ '& span,h1,h2,h3,h4,h5,h6,p': { mb: 6 } }}>
            <Typography variant="h4" gutterBottom>Typography - Thai</Typography>
            <Typography variant="body1" gutterBottom>fontFamily: {fontFamily}</Typography>

            <Typography variant="d1" >
                d1. โซลูชันธุรกิจออนไลน์สำหรับผู้ขายและผู้ซื้อ
            </Typography>
            <Typography variant="d2" gutterBottom>
                d2. โซลูชันธุรกิจออนไลน์สำหรับผู้ขายและผู้ซื้อ
            </Typography>
            <Typography variant="h1" gutterBottom>
                h1. โซลูชันธุรกิจออนไลน์สำหรับผู้ขายและผู้ซื้อ
            </Typography>
            <Typography variant="h2" gutterBottom>
                h2. โซลูชันธุรกิจออนไลน์สำหรับผู้ขายและผู้ซื้อ
            </Typography>
            <Typography variant="h3" gutterBottom>
                h3. โซลูชันธุรกิจออนไลน์สำหรับผู้ขายและผู้ซื้อ
            </Typography>
            <Typography variant="h4" gutterBottom>
                h4. โซลูชันธุรกิจออนไลน์สำหรับผู้ขายและผู้ซื้อ
            </Typography>
            <Typography variant="h5" gutterBottom>
                h5. โซลูชันธุรกิจออนไลน์สำหรับผู้ขายและผู้ซื้อ
            </Typography>
            <Typography variant="h6" gutterBottom>
                h6. โซลูชันธุรกิจออนไลน์สำหรับผู้ขายและผู้ซื้อ
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
                subtitle1 โซลูชันธุรกิจออนไลน์สำหรับผู้ขายและผู้ซื้อ
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
                subtitle2 โซลูชันธุรกิจออนไลน์สำหรับผู้ขายและผู้ซื้อ
            </Typography>
            <Typography variant="body1" gutterBottom>
                body1. โซลูชันธุรกิจออนไลน์สำหรับผู้ขายและผู้ซื้อ
            </Typography>
            <Typography variant="body2" gutterBottom>
                body2. โซลูชันธุรกิจออนไลน์สำหรับผู้ขายและผู้ซื้อ
            </Typography>
            <Typography variant="button" display="block" gutterBottom>
                button กดเลย
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
                caption แคปชั่น
            </Typography>
            <Typography variant="overline" display="block" gutterBottom>
                overline หัวข้อ
            </Typography>
        </Box>
    )
}
