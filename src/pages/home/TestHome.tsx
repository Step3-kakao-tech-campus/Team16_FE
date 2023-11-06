import { useInfiniteQuery } from '@tanstack/react-query';
import { useState, useEffect, useRef } from 'react';
import HomeVideo from './HomeVideo';

const TestHome = () => {
  const [muted, setMuted] = useState(true);
  const nextPageRef = useRef(null);
  const { data, isLoading, fetchNextPage } = useInfiniteQuery(
    ['home', 1],
    ({ pageParam = 1 }) => {
      const apiUrl = `${process.env.REACT_APP_URI}/short-forms/home?page=${pageParam}&size=5`;
      return fetch(apiUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((res) => res.json());
    },
    {
      getNextPageParam: (lastPage) => {
        return lastPage.response.hasNext ? lastPage.response.nextPage : false;
      },
      suspense: true,
    },
  );

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        fetchNextPage();
      }
    });
  });
  useEffect(() => {
    if (nextPageRef.current) {
      io.observe(nextPageRef.current);
    }
    return () => {
      io.disconnect();
    };
  });

  return (
    <>
      {data?.pages.map((page) =>
        page.response.shortForms.map((shortForm: any, index: number) => (
          <div key={shortForm.profileShortFormUrl + index}>
            <HomeVideo
              url={shortForm.profileShortFormUrl}
              muted={muted}
              setMuted={setMuted}
            />
          </div>
        )),
      )}
      <div ref={nextPageRef}></div>
    </>
  );
};

export default TestHome;
