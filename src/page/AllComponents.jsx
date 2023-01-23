import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import { Alert, Box, ButtonGroup, Chip, Pagination, PaginationItem, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import DatePicker from './DatePicker';
import ButtonComponents from './ButtonComponents';
import opnToken from "../theme.json"
import ComboBox from './ComboBox';
import TypographyEng from './TypographyEng';
import TypographyTH from './TypographyTH';
import Checkboxes from './Checkboxes';
import RadioButtonsGroup from './RadioButtonsGroup';
import BasicSwitches from './BasicSwitches';
import SelectVariants from './SelectVariants';

import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'


export default function AllComponents() {
    const opnColor = opnToken.palette



    return (

        <Stack
            direction="row"
            spacing={4}
            fontFamily="fontFamilyEng">

            <Box p={4} >
                <Box >
                    <Typography variant="h4" gutterBottom>Palette</Typography>
                    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)' }}>
                        {Object.entries(opnColor).map(([name, entry], i) => <Box >
                            <Typography variant="h6">{name}</Typography>
                            {Object.entries(entry).map(([type, obj], i2) => {
                                if (type.length > 1) {
                                    return <Box sx={{
                                        width: "80%",
                                        height: 24,
                                        backgroundColor: `${name}.${type}`
                                    }}>
                                        <Typography variant="body2">{name}.{type}</Typography>
                                    </Box>
                                } else {
                                    return <Box sx={{
                                        width: "80%",
                                        height: 24,
                                        backgroundColor: `${name}`
                                    }}>
                                        <Typography variant="body2">{name} {entry}</Typography>
                                    </Box>
                                }
                            }
                            )}
                        </Box>)
                        }
                    </Box>

                    <Stack direction="row" spacing={1}>
                        <Chip label="primary" color="primary" />
                        <Chip label="success" color="success" />
                        <Chip label="error" color="error" />
                        <Chip label="secondary" color="secondary" />
                    </Stack>
                    <Stack direction="row" spacing={1}>
                        <Chip label="primary" color="primary" variant="outlined" />
                        <Chip label="success" color="success" variant="outlined" />
                    </Stack>

                    <Box mt={4} sx={{ '& div': { mb: 4 } }}>
                        <Box width={120} height={120} backgroundColor="primary.lightest" boxShadow={0}>shadow 0</Box>
                        <Box width={120} height={120} backgroundColor="primary.lightest" boxShadow={1}>shadow 1</Box>
                        <Box width={120} height={120} backgroundColor="primary.lightest" boxShadow={2}>shadow 2</Box>
                        <Box width={120} height={120} backgroundColor="primary.lightest" boxShadow={3}>shadow 3</Box>
                        <Box width={120} height={120} backgroundColor="primary.lightest" boxShadow={4}>shadow 4</Box>
                        <Box width={120} height={120} backgroundColor="primary.lightest" boxShadow={5}>shadow 5</Box>
                        <Box width={120} height={120} backgroundColor="primary.lightest" boxShadow={6}>shadow 6</Box>
                        <Box width={120} height={120} backgroundColor="primary.lightest" boxShadow={7}>shadow 7</Box>
                    </Box>

                </Box>
                <Box id="input" mt={4}>
                    <Typography variant="h4" gutterBottom>Input</Typography>
                    <Box mb={2}>
                        <ComboBox />
                    </Box>
                    <DatePicker />
                </Box>
                <Box id="button" mt={4}>
                    <ButtonComponents />
                </Box>
                <Box id="ButtonGroup" mt={4}>
                    <Typography variant="h4" gutterBottom>ButtonGroup</Typography>
                    <ButtonGroup sx={{ margin: "20px" }} variant="contained" aria-label="outlined primary button group">
                        <Button>One</Button>
                        <Button>Two</Button>
                        <Button>Three</Button>
                    </ButtonGroup>
                    <ButtonGroup sx={{ margin: "20px" }} variant="outlined" aria-label="outlined button group">
                        <Button>One</Button>
                        <Button>Two</Button>
                        <Button>Three</Button>
                    </ButtonGroup>
                    <ButtonGroup sx={{ margin: "20px" }} variant="text" aria-label="text button group">
                        <Button>One</Button>
                        <Button>Two</Button>
                        <Button>Three</Button>
                    </ButtonGroup>
                </Box>

                <Box id="Checkboxes" mt={4}>
                    <Typography variant="h4" gutterBottom>Checkboxes</Typography>
                    <Checkboxes />
                </Box>
                <Box id="RadioButtonsGroup" mt={4}>
                    <Typography variant="h4" gutterBottom>RadioButtonsGroup</Typography>
                    <RadioButtonsGroup />
                </Box>
                <Box id="BasicSwitches" mt={4}>
                    <Typography variant="h4" gutterBottom>BasicSwitches</Typography>
                    <BasicSwitches />
                </Box>
                <Box id="SelectVariants" mt={4}>
                    <Typography variant="h4" gutterBottom>SelectVariants</Typography>
                    <SelectVariants />
                </Box>
                <Box id="alert" mt={4}>
                    <Typography variant="h4" gutterBottom>Alert</Typography>
                    <Stack sx={{ width: '100%' }} spacing={2}>
                        <Alert severity="error">This is an error alert — check it out!</Alert>
                        <Alert severity="warning">This is a warning alert — check it out!</Alert>
                        <Alert severity="info">This is an info alert — check it out!</Alert>
                        <Alert severity="success">This is a success alert — check it out!</Alert>
                    </Stack>
                </Box>

                <Box id="Typography" mt={4}>
                    <Typography variant="h4" gutterBottom>Typography</Typography>
                    <TypographyEng />
                </Box>
                <Box id="Typography" mt={4}>
                    <Typography variant="h4" gutterBottom>Typography</Typography>
                    <TypographyTH />
                </Box>
                <Pagination color="primary" variant="outlined" count={10} />outline
                <Pagination color="error" variant="outlined" count={10} />outline
                <Pagination color="warning" variant="outlined" count={10} />outline
                <Pagination count={10} color="primary" />
                <Pagination count={10} color="secondary" />
                <Pagination count={10} disabled />
            </Box >
        </Stack >

    )
}
