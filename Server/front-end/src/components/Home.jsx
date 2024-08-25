import React, { useState, useEffect, useContext } from 'react';
import {
  Container,
  Box,
  CardMedia,
  Typography,
  Button,
  Paper
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { DataContext } from '../context/DataProvider'; 

const HomePage = () => {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const { account } = useContext(DataContext); 
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('');
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error('Error ing blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  const handleBlogClick = (blog) => {
    setSelectedBlog(blog);
  };

  const handleUpdate = () => {
    navigate(`/update/${selectedBlog._id}`);
  };

  const handleDelete = async () => {
    try {
      await fetch(`/posts/${selectedBlog._id}`, {
        method: 'DELETE',
      });
      setSelectedBlog(null);
      setBlogs(blogs.filter((blog) => blog._id !== selectedBlog._id));
    } catch (error) {
      console.error('Error deleting blog:', error);
    }
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ marginTop: 4 }}>
        {selectedBlog ? (
          <Box>
            <Typography variant="h4" gutterBottom>
              {selectedBlog.title}
            </Typography>
            <CardMedia
              component="img"
              height="300"
              image={`${selectedBlog.imageUrl}`}
              alt={selectedBlog.title}
            />
            <Typography variant="body1" sx={{ marginTop: 2 }}>
              {selectedBlog.content}
            </Typography>
            {account.username && (  // Show buttons only if the user is logged in (username is set)
              <Box sx={{ marginTop: 2 }}>
                <Button
                  variant="contained"
                  sx={{ marginRight: 1 }}
                  onClick={handleUpdate}
                >
                  Update
                </Button>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={handleDelete}
                >
                  Delete
                </Button>
              </Box>
            )}
            <Button
              variant="contained"
              sx={{ marginTop: 2 }}
              onClick={() => setSelectedBlog(null)}
            >
              Back to Blogs
            </Button>
          </Box>
        ) : (
          <Box>
            {blogs.map((blog) => (
              <Paper
                key={blog._id}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: 2,
                  marginBottom: 2,
                  boxShadow: 2
                }}
              >
                <CardMedia
                  component="img"
                  sx={{ width: 150, height: 100, objectFit: 'cover' }}
                  image={`${blog.imageUrl}`}
                  alt={blog.title}
                />
                <Box sx={{ marginLeft: 2, flex: 1 }}>
                  <Typography variant="h6" gutterBottom>
                    {blog.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {blog.summary}
                  </Typography>
                  <Button
                    variant="outlined"
                    sx={{ marginTop: 1 }}
                    onClick={() => handleBlogClick(blog)}
                  >
                    Read More
                  </Button>
                </Box>
              </Paper>
            ))}
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default HomePage;
