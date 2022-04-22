import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Blogs from './Blogs';

const Blog = props => {
  const { id } = useParams();
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/detailList/${id}`)
      .then(response => response.json())
      .then(res => setState(res.data))
      .catch(err => setHasError(true));
  }, []);

  const Loading = () => {
    return <>loading...</>;
  };
  // const ShowProduct = () => {
  //   return (
  //     <>
  //       <div className="col-md-6">
  //         <h1>{state.title}</h1>
  //         <img src={state.image} alt={state.title} />
  //       </div>
  //     </>
  //   );
  // };
  return (
    <>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            {loading ? <Loading /> : <Blogs state={state} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
