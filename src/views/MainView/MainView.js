import BackgroundImages from "../../components/BackgroundLayouts/PrivatePageBg";
// import SectionTransactions from "../../components/SectionTransactions";
// import TableData from "./../../components/SectionTransactions/TableData/TableData";
// import Summary from "./../../components/Summary/Summary";
import ComposeSection from "../../components/SectionTransactions/ComposeSection";
import BalanceNavigation from "../../components/BalanceNavigationSection/BalanceNavigation";
import TransactionsNav from "../../components/SectionTransactions/TransactionsNav";

export default function MainView() {
  return (
    <>
      <BackgroundImages />           
      {/* <SectionTransactions /> */} {/* УДАЛИТЬ?? */}      
      {/* <TableData /> */} {/* УДАЛИТЬ?? */}
      {/* <Summary /> */} {/* УДАЛИТЬ?? */}
      <BalanceNavigation/>
      <TransactionsNav /> {/* затянуть в SectionTransactions или ComposeSection!? */}
      <ComposeSection /> {/* аналог MovieAddInfo */} 
    </>
  );
}


// import React from 'react';
// import { useState, useEffect } from 'react';
// import { getMovieDetails } from '../services/movies-api';
// import MovieMainInfo from '../components/MovieMainInfo/MovieMainInfo';
// import MovieAddInfo from '../components/MovieAddInfo/MovieAddInfo';
// import GoBackButton from '../components/Buttons/GoBackBtn';
// import PageTitle from '../components/PageTitle/PageTitle';

// function MovieDetailsPage({ match }) {
//   const [movieDetails, setMovieDetails] = useState({});
//   const [genres, setGenres] = useState('');
//   const [titleText, setTitleText] = useState('');

//   const { movieID } = match.params;

//   useEffect(() => {
//     getMovieDetails(movieID).then(res => {
//       setMovieDetails(res);
//       setTitleText(`'${res.title}' details`);
//       setGenres(res.genres.map(({ name }) => name).join(', '));
//     });
//   }, []);

//   const { original_title } = movieDetails;

//   return (
//     <>
//       <PageTitle text={titleText}>
//         <GoBackButton />
//       </PageTitle>
//       <MovieMainInfo movieDetails={movieDetails} genres={genres} />
//       <MovieAddInfo movieTitle={original_title} />
//     </>
//   );
// }

// export default MovieDetailsPage;
