import React, { useState, useEffect } from "react";
import ReactCardCarousel from "react-card-carousel";
import SimpleCard from "../Card/Card";
import { db } from "../firebase";

const Home = () => {
  const [tasks, setTasks] = useState();
  useEffect(() => {
    db.collection("tasks").onSnapshot(snapshot => {
      setTasks(
        snapshot.docs.map(doc => ({
          id: doc.id,
          task: doc.data(),
        }))
      );
    });
  }, []);
  if (!tasks) {
    return null;
  }
  return (
    <ReactCardCarousel autoplay={false}>
      <SimpleCard name={tasks[0].task.name} />
      <SimpleCard name="Second" />
    </ReactCardCarousel>
  );
};

export default Home;
