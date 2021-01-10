import { React, useEffect, useState } from 'react';
import ApiService from '../../services/api';
import Video from '../../components/video';

const Home = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    async function fetchVideos() {
      const result = await ApiService.get('https://www.globalcyclingnetwork.com/api/devtask', {
        stubbedLocation: '../resources/videos',
      });
      setVideos(result);
    }

    fetchVideos();
  }, []);
  return (
    <>
      {videos.map(({ _id }) => (
        // eslint-disable-next-line no-underscore-dangle
        <Video key={_id} id={_id} />
      ))}
    </>
  );
};

export default Home;
