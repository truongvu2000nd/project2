import React, { useState } from "react";
import axios from "axios";
import "./library.css";

import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, FormHelperText, TextField, Button, CircularProgress} from "@material-ui/core";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import ImageIcon from '@material-ui/icons/Image';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import CloudUploadOutlinedIcon from '@material-ui/icons/CloudUploadOutlined';


function Library()  {
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState("");
    const [genre, setGenre] = useState("");
    const [file, setFile] = useState("");
    const [image, setImage] = useState("");
    const [submitting, setSubmitting] = useState(false);
    const [fileError, setFileError] = useState("");
    const [imageError, setImageError] = useState("");
  
    const handleAudioChange = (event) => {
        const selectedFile = event.target.files[0];
        const fileSizeLimit = 20000000; // 20mb
        if (selectedFile && selectedFile.size > fileSizeLimit) {
            setFileError(`${selectedFile.name}: File Size Too Large`)
        } else {
            setFile(selectedFile);
            setFileError("");
        }
        setFile(selectedFile);
    }
    
    const handleImageChange = (event) => {
        const selectedImage = event.target.files[0];
        const fileSizeLimit = 20000000; // 20mb
        if (selectedImage && selectedImage.size > fileSizeLimit) {
            setImageError(`${selectedImage.name}: File Size Too Large`)
        } else {
            setImage(selectedImage);
            setImageError("");
        }
        setImage(selectedImage);        
    }
  
    const handleSubmit = (event) => { 
        console.log("submit: ", title, genre, file, image);
        setOpen(false); //if no fail
        // call axios
    }
    
    
    
    return (
        <div className="search-page">
            <Button onClick={() => setOpen(true)}
                className="add-button"
                variant={open? "contained":"outlined"}
                color={open? "primary":"default"}
                startIcon={open ?<CloudUploadOutlinedIcon/>:<CloudUploadIcon />}
            >
                Upload song
            </Button>
            
            <Dialog open={open} className="add-dialog">
                <form onSubmit={event => handleSubmit(event)}>
                    <DialogContent>
                        <DialogTitle>Upload Song</DialogTitle>

                        <DialogContentText>
                            Add a Title, Genre, Cover Image & Audio File (Under 20mb)
                        </DialogContentText>

                        <FormControl fullWidth>
                            <TextField
                                label="Title"
                                placeholder="Add Title"
                                onChange={event => setTitle(event.target.value)}
                                value={title}
                            />
                        </FormControl>

                        <FormControl fullWidth>
                            <TextField
                                label="Genre"
                                onChange={event => setGenre(event.target.value)}
                                value={genre}
                                placeholder="Genre"
                            />
                        </FormControl>

                        <FormControl error={Boolean(imageError)} fullWidth>
                            <input className="upload-image-button"
                                id="image"
                                required
                                type="file"
                                onChange={handleImageChange}
                                accept="image/img, image/png, image/jpg, image/jpeg"     // image/* for setting any image type
                            />
                            <label htmlFor="image" >
                                <div > 
                                    <Button variant="outlined" color={image ? "secondary" : "inherit"} component="span" >
                                        Image File
                                        <ImageIcon  />
                                    </Button>
                                    {image&&image.name}
                                    <FormHelperText>{fileError}</FormHelperText>
                                </div>
                                
                            </label>
                        </FormControl>

                        <FormControl error={Boolean(fileError)} fullWidth>
                            <input className="upload-image-button"
                                id="audio"
                                required
                                type="file"
                                onChange={handleAudioChange}
                                accept="audio/mp3, audio/wav"     // audio/* for setting any audio type
                            />
                            <label htmlFor="audio" className="upload-icon">
                                <Button variant="outlined" color={file ? "secondary" : "inherit"} component="span" >
                                    Audio File
                                    <LibraryMusicIcon  />
                                </Button>
                                {file&&file.name}
                                <FormHelperText>{fileError}</FormHelperText>
                            </label>
                        </FormControl>

                    </DialogContent>
                    <DialogActions>
                        <Button disabled={submitting} onClick={() => setOpen(false)} >
                        Cancel
                        </Button>
                        <Button
                            disabled={submitting || !title.trim() || !genre.trim() || !file || !image}
                            onClick={handleSubmit}
                        >
                            {submitting ? (
                                <CircularProgress size={24} />
                                ) : (
                                "Add Song"
                                ) }
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>

        </div>
    ); 
};


export default Library;