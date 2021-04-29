import React, { useState } from 'react';
import { Box, Typography, makeStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import FormControl from '@material-ui/core/FormControl';
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
    rootCard: { minWidth: 275 },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
        textAlign: 'center',
    },
    pos: {
        marginBottom: 12,
        textAlign: 'center',
    },
}));

const Viewer = () => {
    const classes = useStyles();
    const [jsonData, uploadJson] = useState(undefined);
    const [category, setCategory] = useState('');
    const [fileName, setFileName] = useState('');
    const handleChange = e => {
        setCategory(e.target.value);
    };
//getJson will be replaced with async func in the future version
    function getJson(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsText(new Blob(file), 'utf-8');

            reader.onload = result => {
                const data = JSON.parse(result.target.result);
                resolve(data);
            };

            reader.onerror = () => {
                reject(null);
            };
        });
    }

    return (
        <Box
            className={classes.root}
            flexDirection='row'
        >
            <Box className={classes.jsonViewer}>
                {jsonData ? (
                    <Box
                        style={{
                            marginTop: '10%',
                            marginLeft: '5%',
                            height: '80%',
                            display: 'grid',
                            gridTemplateColumns: '30% 30% 30%',
                            gridAutoRows: '20% 20% 20% 20%',
                            rowGap: '2%',
                            overflow: 'scroll',
                        }}
                    >
                        <Box style={{ gridColumn: '1/4' }}>
                            <FormControl style={{ width: '100px' }}>
                                <Select
                                    onChange={handleChange}
                                    value={category}
                                >
                                    {Object.keys(jsonData).map(d => (
                                        <MenuItem
                                            key={d}
                                            value={d}
                                        >
                                            {d}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Box>
                        {category
              && jsonData[category].map((d, i) => (
                  <Card
                      key={`key${i}`}
                      style={{ textAlign: 'center', display: 'grid', gridTemplateColumns: '1fr', alignContent: 'center', margin: '4px' }}
                      variant='outlined'
                  >
                      {Object.entries(d).map(v => (
                          <Box >
                              <span
                                  className={classes.title}
                                  color='textSecondary'
                              >
                                  {`${v[0]}:`}
                              </span>
                              <span
                                  className={classes.pos}
                                  color='textSecondary'
                              >
                                  {v[1]}
                              </span>
                          </Box>
                      ))}
                  </Card>
              ))}
                    </Box>
                ) : (
                    ''
                )}
                <Typography className={classes.fileName}>{fileName}</Typography>
                <FileUploader
                    acceptedFiles={['application/json']}
                    className={classes.loadButton}
                    onSave={files => {
                        getJson(files).then(data => {
                            console.log('onsave==>', data);
                            uploadJson(data);
                        });
                    }}
                    setFileName={setFileName}
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
