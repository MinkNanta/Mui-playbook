import * as React from 'react';
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function BasicSwitches() {
    return (
        <div>
            <Switch {...label} defaultChecked /> default Checked
            <Switch {...label} /> Normal
            <Switch {...label} disabled defaultChecked /> disabled default Checked
            <Switch {...label} disabled /> disabled
        </div>
    );
}
