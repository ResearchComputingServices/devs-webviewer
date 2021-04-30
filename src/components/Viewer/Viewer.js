import React, { useState } from 'react';
import { Box, Typography, makeStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import GetAppIcon from '@material-ui/icons/GetApp';
import ReplayIcon from '@material-ui/icons/Replay';
import Button from '../Button';
import FileUploader from '../FileUploader';

export const useStyles = makeStyles(() => ({
    root: {
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    jsonViewer: {
        position: 'relative',
        border: 'solid black',
        height: '100%',
        width: '100%',
        margin: 5,
        minWidth: 450,
    },
    fileName: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        margin: 5,
    },
    svgViewer: {
        position: 'relative',
        border: 'solid black',
        height: '100%',
        width: '100%',
        margin: 5,
        minWidth: 450,
    },
    loadButton: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        margin: 5,
    },
    assignButton: {
        position: 'absolute',
        margin: 5,
    },
    downloadButton: {
        position: 'absolute',
        right: 0,
        margin: 5,
    },
    replayButton: {
        position: 'absolute',
        right: 35,
        margin: 5,
    },
    mainCards: {
        position: 'relative',
        height: '86%',
        width: '98%',
        margin: 10,
        minWidth: 450,
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'flex-start',
        overflow: 'auto',
    },
    cardContentJson: {
        minWidth: 180,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        cursor: 'pointer',
        border: 'solid',
    },

}));

const Viewer = () => {
    const classes = useStyles();
    const [jsonData, setJson] = useState();
    const [selectionName, setSelection] = useState('');

    const handleChange = event => {
        const e = event.target.value;
        setSelection(e);
    };

    const saveJSON = async file => {
        const text = await file.text();
        setJson(JSON.parse(text));
    };

    return (
        <Box
            className={classes.root}
            flexDirection='row'
        >
            <Box
                className={classes.jsonViewer}
            >
                <Select
                    defaultValue=''
                    disabled={!(jsonData && Object.keys(jsonData).length)}
                    onChange={handleChange}
                    variant='outlined'
                >
                    {jsonData && Object.keys(jsonData).length && Object.keys(jsonData).map(item => (
                        <MenuItem
                            key={item}
                            value={item}
                        >
                            {item}
                        </MenuItem>
                    ))}
                </Select>
                <Box
                    className={classes.mainCards}
                >
                    {selectionName && Array.isArray(jsonData[selectionName]) && jsonData[selectionName].map((card, index) => (
                        <Card
                            key={index}
                            className={classes.cardContentJson}
                        >
                            <CardContent>
                                {Object.entries(card).map((row, indexrow) => (
                                    <Typography
                                        key={indexrow}
                                        variant='body2'
                                    >
                                        <b>{row[0]}</b>
                                        {`: ${row[1]}`}
                                    </Typography>
                                ))}
                            </CardContent>
                        </Card>
                    ))}
                    {selectionName && !Array.isArray(jsonData[selectionName]) && (
                        <Card
                            className={classes.cardContentJson}
                        >
                            <CardContent>
                                {Object.entries(jsonData[selectionName]).map((row, indexrow) => (
                                    <Typography
                                        key={indexrow}
                                        variant='body'
                                    >
                                        <b>{row[0]}</b>
                                        {`: ${row[1]}`}
                                    </Typography>
                                ))}
                            </CardContent>
                        </Card>
                    )}
                </Box>

                <FileUploader
                    acceptedFiles={[
                        'application/json',
                    ]}
                    className={classes.loadButton}
                    onSave={files => {
                        saveJSON(files[0]);
                    }}
                    textShown='load json'
                />
            </Box>
            <Box className={classes.svgViewer}>
                <Button
                    className={classes.loadButton}
                    color='primary'
                >
                    load svg
                </Button>

                <Button
                    className={classes.assignButton}
                    color='primary'
                    endIcon={<CheckCircleIcon />}
                    variant='contained'
                >
                    assign
                </Button>
                <IconButton
                    className={classes.downloadButton}
                    color='primary'
                >
                    <GetAppIcon />
                </IconButton>
                <IconButton
                    className={classes.replayButton}
                    color='primary'
                >
                    <ReplayIcon />
                </IconButton>
            </Box>
        </Box>
    );
};

Viewer.propTypes = {};

Viewer.defaultProps = {};

export default Viewer;
