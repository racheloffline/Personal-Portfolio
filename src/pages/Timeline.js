import React, { useEffect } from "react";
import { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import {
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../Firebase";

export default function Timeline() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    content: "",
  });

  const [timelinePosts, setTimelinePosts] = useState([]);

  useEffect(() => {
    getDocs(query(collection(db, "timeline"), orderBy("timestamp"))).then(
      (querySnapshot) => {
        const newData = querySnapshot.docs.map((doc) => doc.data());
        setTimelinePosts(newData);
      }
    );
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      addDoc(collection(db, "timeline"), {
        name: formData.name,
        email: formData.email,
        content: formData.content,
        timestamp: serverTimestamp(),
      }).then(console.log("Success"));
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <Box>
      <Box height={80} />

      <Box
        bgcolor={"neutral.main"}
        padding={5}
        justifyContent={"center"}
        display={"flex"}
      >
        <Typography variant="h1" color={"neutral.contrastText"}>
          Our Timeline
        </Typography>
      </Box>

      <Typography
        variant="h2"
        padding={5}
        color={"neutral.contrastText"}
        textAlign={"center"}
      >
        Add a Post
      </Typography>

      <Box paddingX={20}>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </Box>

      <Box
        padding={5}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <Typography
          variant="h2"
          paddingBottom={10}
          color={"neutral.contrastText"}
        >
          All Posts
        </Typography>
        {timelinePosts.map((post) => (
          <Box display={"flex"} paddingX={10} paddingY={5}>
            <Box flexDirection={"column"}>
              <Typography variant="h2" color={"neutral.contrastText"}>
                {post.name}
              </Typography>
              <Typography
                variant="body1"
                fontSize={30}
                color={"neutral.contrastText"}
              >
                {post.email}
              </Typography>
              <Box height={30}></Box>
            </Box>
            <Typography variant="body1" paddingLeft={15}>
              {post.content}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
