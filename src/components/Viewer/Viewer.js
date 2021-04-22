import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import GetAppIcon from '@material-ui/icons/GetApp';
import ReplayIcon from '@material-ui/icons/Replay';
import Button from '../Button';


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
        margin: 5
    }
}));

const Viewer = () => {
    const classes = useStyles();

    return (
        <Box
            className={classes.root}
            flexDirection='row'
        >
            <Box
                className={classes.jsonViewer}
            >
                <Button
                    className={classes.loadButton}
                    color = 'primary'
                >
                    load json
                </Button>
                
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