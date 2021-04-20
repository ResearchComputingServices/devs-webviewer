import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
//import * as d3 from 'd3';
//import { ReactComponent as SVGDiagram } from '../../assets/images/diagram.svg';

export const useStyles = makeStyles(() => ({ root: { padding: 10, height: '58vh' }, inner: {padding:10, border: 'solid'} }));

const Diagram = () => {
    const classes = useStyles();

    React.useEffect(() => {

    }, []);

    return (
        <Box
            className={classes.root}
            display='flex'
            flexDirection='row'
            justifyContent = 'space-between'
        >
            <Box
                color = '"secondary.main"'
                className={classes.inner}
                alignItems='left'
                width = {0.49}
                >   
            </Box>
            <Box
                color = '"secondary.main"'
                className={classes.inner}
                alignItems='right'
                width = {0.49}
            >
            </Box>
        </Box>
    );
};

Diagram.propTypes = {};

Diagram.defaultProps = {};

export default Diagram;
