import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import {
  TextField,
  Button,
  Typography,
  Card,
  CardContent,
  CardActions,
  Grid,
  Box,
} from '@mui/material';
import { DataContext } from '../context/DataProvider';
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
  const [post, setPost] = useState({
    title: '',
    content: '',
    author: '',
    image: null,
  });

  const [errors, setErrors] = useState({
    title: '',
    content: '',
    author: '',
    image: '',
  });

  const { account } = useContext(DataContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!account.username) {
      navigate('/auth');
    }
  }, [account, navigate]);

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setPost({ ...post, image: e.target.files[0] });
  };

  const validate = () => {
    let valid = true;
    let newErrors = { title: '', content: '', author: '', image: '' };

    if (!post.title) {
      newErrors.title = 'Title is required';
      valid = false;
    }
    if (!post.content) {
      newErrors.content = 'Content is required';
      valid = false;
    }
    if (!post.author) {
      newErrors.author = 'Author is required';
      valid = false;
    }
    if (!post.image) {
      newErrors.image = 'Image is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      return; 
    }

    const formData = new FormData();
    formData.append('title', post.title);
    formData.append('content', post.content);
    formData.append('author', post.author);
    formData.append('image', post.image);

    try {
      const response = await axios.post('/create', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      console.log('Post created:', response.data);
      navigate('/');
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <Grid container justifyContent="center" style={{ marginTop: '2rem' }}>
      <Grid item xs={12} md={8} lg={6}>
        <Card>
          <CardContent>
            <Typography variant="h4" gutterBottom>
              Create New Post
            </Typography>
            <form onSubmit={handleSubmit} noValidate>
              <TextField
                label="Title"
                name="title"
                value={post.title}
                onChange={handleChange}
                fullWidth
                margin="normal"
                variant="outlined"
                required
                error={!!errors.title}
                helperText={errors.title}
              />
              <TextField
                label="Content"
                name="content"
                value={post.content}
                onChange={handleChange}
                fullWidth
                margin="normal"
                variant="outlined"
                required
                multiline
                rows={4}
                error={!!errors.content}
                helperText={errors.content}
              />
              <TextField
                label="Author"
                name="author"
                value={post.author}
                onChange={handleChange}
                fullWidth
                margin="normal"
                variant="outlined"
                required
                error={!!errors.author}
                helperText={errors.author}
              />
              <Box mt={2}>
                <input
                  accept="image/*"
                  style={{ display: 'none' }}
                  id="raised-button-file"
                  type="file"
                  onChange={handleFileChange}
                />
                <label htmlFor="raised-button-file">
                  <Button variant="contained" color="primary" component="span">
                    Upload Image
                  </Button>
                </label>
                {post.image && (
                  <Typography variant="body2" style={{ marginTop: '10px' }}>
                    Selected file: {post.image.name}
                  </Typography>
                )}
                {errors.image && (
                  <Typography color="error" style={{ marginTop: '10px' }}>
                    {errors.image}
                  </Typography>
                )}
              </Box>
            </form>
          </CardContent>
          <CardActions>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleSubmit}
              style={{ margin: '0.5rem' }}
            >
              Create Post
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default CreatePost;
