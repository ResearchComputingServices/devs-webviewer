import React from 'react';
import PropTypes from 'prop-types';
import { Box, makeStyles, Typography } from '@material-ui/core';
import { DropzoneDialog } from 'material-ui-dropzone';
import Button from '../Button';

export const useStyles = makeStyles(theme => ({ error: { color: theme.palette.error.main } }));

const FileUploader = ({
    className,
    style,
    onSave,
    error,
    acceptedFiles,
    textShown,
}) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleSave = files => {
        setOpen(false);
        onSave(files);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <Box
            alignItems='center'
            className={className}
            display='flex'
            flexDirection='row'
            style={style}
        >
            <Button
                className={classes.button}
                color='primary'
                onClick={handleOpen}
            >
                {textShown}
            </Button>
            <DropzoneDialog
                acceptedFiles={acceptedFiles}
                filesLimit={1}
                maxFileSize={Infinity}
                onClose={handleClose}
                onSave={handleSave}
                open={open}
                showPreviews
            />
            {error && (
                <Typography className={classes.error}>{error.message}</Typography>
            )}
        </Box>
    );
};

FileUploader.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    onSave: PropTypes.func.isRequired,
    acceptedFiles: PropTypes.array,
    textShown: PropTypes.string,
    error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

FileUploader.defaultProps = {
    className: '',
    style: {},
    error: undefined,
    acceptedFiles: [],
};

export default FileUploader;
