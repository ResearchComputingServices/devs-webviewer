import React from 'react';
import { useState } from 'react';
import { Box, Typography, makeStyles } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

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
        position: "absolute",
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
}));

const Viewer = () => {
    const classes = useStyles();
    const [jsonData, uploadJson] = useState(undefined);
    const [category, setCategory] = useState('');
    const [fileName, setFileName] = useState('');
    const handleChange = (value) => {
        setCategory(value);
    };
    return (
        <Box
            className={classes.root}
            flexDirection='row'
        >
            <Box
                className={classes.jsonViewer}
            >   
                {jsonData ? (
                    <div
                        style={{
                            marginTop: "10%",
                            marginLeft: "5%",
                            height: "80%",
                            display: "grid",
                            gridTemplateColumns: "33% 35% 35%",
                            gridAutoRows: "20% 20% 20% 20%",
                            rowGap: "2%",
                    }}
                    >
                        <div style={{ gridColumn: '1/4' }}>
                            <FormControl style={{width: "100px" }}>
                                <InputLabel id = 'demo-simple-select-label'>Nodes</InputLabel>
                                <Select
                                    labelId = "demo-simple-select-label"
                                    id = "demo-simple-select"
                                    value={category}
                                    onChange={handleChange}
                                >
                                    <MenuItem value={10}>Ports</MenuItem>
                                    <MenuItem value={20}>Links</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <Button color="primary">TOP Coupled</Button>
                        <Button color="primary">input_reader atomic</Button>
                        <Button color="primary">ABP Coupled</Button>
                        <Button color="primary">serder1 atomic</Button>
                        <Button color="primary">receiver1 atomic</Button>
                        <Button color="primary">network coupled</Button>
                        <Button color="primary">subnet1 atomic</Button>
                        <Button color="primary">subnet2 atomic</Button>
                    </div>
                ) : (
                    ''
                )}
                {}
                <Typography className={classes.fileName}>{fileName}</Typography>
                <FileUploader
                    setFileName={setFileName}
                    className={classes.loadButton}
                    acceptedFiles={['application/json']}
                    textShown='load json'
                    onSave={files => {
                        uploadJson(files[0]);
                    }}
                />
            </Box>
            <Box
                className={classes.svgViewer}
            >
                <Button
                    className={classes.loadButton}
                    color = 'primary'
                    >
                        load svg
                </Button>

                <Button
                    className={classes.assignButton}
                    color='primary'
                    endIcon={<CheckCircleIcon></CheckCircleIcon>}
                    variant='contained'
                    >
                        assign
                </Button>
                <IconButton
                    className={classes.downloadButton}
                    color = 'primary'
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