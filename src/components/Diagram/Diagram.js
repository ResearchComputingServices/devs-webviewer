import React from 'react';
import { Box, makeStyles } from '@material-ui/core';

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
        margin: 15,
        minWidth: 450,
    },
    svgViewer: {
        position: 'relative',
        border: 'solid black',
        height: '100%',
        width: '100%',
        margin: 15,
        minWidth: 450,
    },
}));

const Diagram = () => {
    const classes = useStyles();


    return (
        <Box
            className={classes.root}
            flexDirection='row'
        >
            <Box
                className={classes.jsonViewer}
                >   
            </Box>
            <Box
                className={classes.svgViewer}
            >
            </Box>
        </Box>
    );
};

Diagram.propTypes = {};

Diagram.defaultProps = {};

export default Diagram;
