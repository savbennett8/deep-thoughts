import React from 'react';
import { useQuery } from "@apollo/client";
import { QUERY_THOUGHTS } from "../utils/queries";
import ThoughtList from "../components/ThoughtList";

const Home = () => {
  //use useQuery hook to make query requests
  //Apollo provides 'loading' property to indicate request isn't done yet
  //when request is done, information is stored in 'data' property
  const { loading, data } = useQuery(QUERY_THOUGHTS);

  //optional chaining (data?.thoughts):
  //negates the need to check if an object even exists before accessing it's properties

  // if data exists, store it in the thoughts constant, 
  //if data is undefined, save an empty array to the 'thoughts' component
  const thoughts = data?.thoughts || [];
  console.log(thoughts);

  return (
    <main>
      <div className='flex-row justify-space-between'>
        <div className='col-12 mb-3'>
          {loading ? (
            <div> Loading...</div>
          ) : (
            <ThoughtList thoughts={thoughts} title="Some Feed for Thought(s)..." />
          )}
        </div>
      </div>
    </main >
  );
};

export default Home;
