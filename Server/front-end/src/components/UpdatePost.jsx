import React, { useState, useEffect } from 'react';
import {
  Container,
  TextField,
  Button,
  Box,
  Typography
} from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';

const UpdatePost = () => {
  const { id } = useParams();  // Get the blog ID from the route params
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
   
    const fetchBlog = async () => {
      try {
        const response = await fetch(`/posts/${id}`);
        const data = await response.json();
        setTitle(data.title);
        setContent(data.content);
        setImageUrl(data.imageUrl);
      } catch (error) {
        console.error('Error fetching blog:', error);
      }
    };

    fetchBlog();
  }, [id]);

  const handleUpdate = async () => {
    try {
      const updatedPost = { title, content, imageUrl };

      await fetch(`/posts/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedPost)
      });

      navigate('/');  
    } catch (error) {
      console.error('Error updating blog:', error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ marginTop: 4 }}>
        <Typography variant="h4" gutterBottom>
          Update Blog Post
        </Typography>
        <form>
          <TextField
            label="Title"
            fullWidth
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Content"
            fullWidth
            multiline
            rows={4}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Image URL"
            fullWidth
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            sx={{ marginBottom: 2 }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleUpdate}
            sx={{ marginTop: 2 }}
          >
            Update Post
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default UpdatePost;
