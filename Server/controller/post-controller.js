import Post from '../model/post.js';
import multer from 'multer';


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/'); // Save files to an 'uploads' folder
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + '-' + file.originalname); // Use unique filenames
    },
  });
  
  const upload = multer({ storage });

  export const uploadImage = upload.single('image');




export const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Error while fetching posts' });
  }
};


export const getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ error: 'Error while fetching post' });
  }
};

export const createPost = async (req, res) => {
    try {
      const { title, content, author } = req.body;
      const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;
  
      const newPost = new Post({ title, content, author, imageUrl });
      await newPost.save();
  
      return res.status(201).json(newPost);
    } catch (error) {
      return res.status(500).json({ msg: 'Error while creating post', error });
    }
  };



  
export const updatePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ error: 'Error while updating post' });
  }
};

// Delete a post
export const deletePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }
    res.status(200).json({ message: 'Post deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error while deleting post' });
  }
};



