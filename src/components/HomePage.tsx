import { useContext, useState } from "react";
import UserContext from "./UserProvider";
import { Alert, Box, Button, Divider, IconButton, InputBase, Modal, Paper, TextField, Typography } from "@mui/material";
import PostCard from "./posts/PostCard";
import SearchIcon from '@mui/icons-material/Search';
import { Height } from "@mui/icons-material";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  height: 600,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default function Home() {
  const { user } = useContext(UserContext);
  const [displayCreatePost, setDisplayCreatePost] = useState(false)
  const [error, setError] = useState("")

  // This is just for testing
  const [allPosts, setAllPosts] = useState(postCardsData)

  // This is to be moved into the CreateNewPost component
  const [modalInput, setModalInput] = useState("")

  return (
    <>
      <div style={{
          maxWidth: "500px",
          margin: "0px auto",
      }}>
          <Button
            sx={{
              width: "100%",
              textAlign: "left",
              textTransform: "none"
            }}
            variant="outlined"
            onClick={() => setDisplayCreatePost(true)}
          >Start a post</Button>
          <Paper
              sx={{
                  height: "calc(100vh - 210px)", // Adjust '64px' to your navbar height
                  maxWidth: "500px",
                  margin: "0 auto",
                  marginBottom: "50px",
                  overflowY: "auto", // Add scrollbar when content overflows
              }}
              elevation={0}
          >
              
              {allPosts.map((post, index) => (
              <PostCard key={index} text={post.text} pic={post.pic} />
              ))}
          </Paper>
      </div>
      <Modal
        open={displayCreatePost}
        onClose={() => {
          setDisplayCreatePost(!displayCreatePost)
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {/* This is to be moved into the CreateNewPost component */}
        <Box sx={style}>
          
            <Typography id="modal-modal-title" variant="h6" component="h2">
              New Post
            </Typography>
            <textarea 
              style={{
                width: "100%",
                height: "70%", 
                marginTop: "10px", 
                padding: "10px 0px",
                outline: "none",
                borderColor: "lightgray"
              }} 
              required
              value={modalInput} 
              onChange={e => {
                if(error!=="") {
                  setError("")
                }
                setModalInput(e.target.value)
              }}
            />
            {error && (
              <Alert variant="outlined" severity="error">
                {error}
              </Alert>
            )}
            <Divider sx={{margin: "10px 0px"}}/>
            <Button 
              sx={{
                marginLeft: "auto",
                textTransform: "none"
              }}
              variant="outlined" 
              type="submit" 
              onClick={() => {
                if(modalInput==="") {
                  setError("Text input cannot be empty")
                  return
                }
                setAllPosts((old) => {
                  console.log(old)
                  return [
                  ...old,
                  {
                    text: modalInput,
                    pic: old.length / 2 == 0 ? false : true
                  }
                ]})
                setModalInput("")
                setDisplayCreatePost(false)
              }}
            >Post</Button>
            
        </Box>
      </Modal>
    </>
    
  );
}

const postCardsData = [
    {
      text: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica.",
      pic: true,
    },
    {
      text: "Reptiles are cold-blooded, air-breathing vertebrates with scales or bony plates.",
      pic: false,
    },
    {
      text: "Some lizards can detach their tails to escape predators and then regenerate them later.",
      pic: true,
    },
    {
      text: "Lizards use body language, like head bobbing and tail waving, to communicate.",
      pic: false,
    },
    {
      text: "The Komodo dragon is the largest lizard in the world, reaching up to 10 feet in length.",
      pic: true,
    },
    {
      text: "Lizards have a third eye called the parietal eye, which is used to detect changes in light and dark.",
      pic: true,
    },
    {
      text: "Geckos are known for their unique vocalizations, including clicks, chirps, and barks.",
      pic: false,
    },
    {
      text: "Chameleons can change color for communication and temperature regulation, not just for camouflage.",
      pic: true,
    },
    {
      text: "Iguanas have a long lifespan and can live up to 20 years in captivity with proper care.",
      pic: false,
    },
    {
      text: "Monitor lizards are known for their intelligence and can recognize their human keepers.",
      pic: true,
    },
  ];

  