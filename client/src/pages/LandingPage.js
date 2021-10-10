import React from 'react';
import MainHero from '../components/MainHero/MainHero';
import CategoryDisplay from '../components/CategoryDisplay/CategoryDisplay';
import CardDisplay from '../components/CardDisplay/CardDisplay';
import { useQuery, gql } from '@apollo/client';

const FETCH_ANIMAL_CARDS = gql`
  {
    animals {
      image
      id
      price
      slug
    }
  }
`;

function LandingPage() {
  const { loading, error, data } = useQuery(FETCH_ANIMAL_CARDS);
  if (loading) return <div> </div>;
  if (error) return <div>error</div>;

  return (
    <div>
      <MainHero />
      <CategoryDisplay />
      <CardDisplay animals={data.animals} />
    </div>
  );
}

export default LandingPage;
