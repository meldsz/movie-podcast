import styled from "@emotion/styled";
import Header from "../header/Header";
import Search from "../search/Search";
import MovieRow from "../movieRow/MovieRow";
import { useViewingHistory } from '../../hooks/useViewingHistory'
import { useState, useEffect } from 'react'

const AppStyled = styled.div`
  @media(min-width: 768px) {
    padding: 50px;
  }
`;

const Home = () => {
  const { getViewingHistory } = useViewingHistory()
  const [historyList, setHistoryList] = useState(getViewingHistory())

  useEffect(() => {
    const handleStorage = () => {
      setHistoryList(getViewingHistory())
    }

    window.addEventListener('storage', handleStorage)
    return () => window.removeEventListener('storage', handleStorage)
  }, [])

  return (
    <AppStyled data-testid="home">
      <Header />
      <Search />
      {historyList ? <MovieRow movies={historyList} rowTitle="Viewing History" /> : null}
      {/* <MovieRow movies={viewingHistory.history} rowTitle="Recommended Movies" /> */}
    </AppStyled>
  )
}
export default Home