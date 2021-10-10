import React from 'react';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import CardDisplay from '../components/CardDisplay/CardDisplay';
import { useQuery, gql } from '@apollo/client';

const FETCH_CATEGORY = gql`
  query Query($slug: String!) {
    category(slug: $slug) {
      id
      slug
      animals {
        id
        title
        price
        image
      }
    }
  }
`;

function CategoryPage() {
  const { slug } = useParams();
  const { loading, error, data } = useQuery(FETCH_CATEGORY, {
    variables: {
      slug,
    },
  });
  if (loading) return <div> </div>;
  if (error) return <div>error</div>;

  return (
    <div className="py-5">
      <Container>
        <h1 className="text-capitalize">
          {data.category.slug}
          <CardDisplay animals={data.category.animals} />
        </h1>
      </Container>
    </div>
  );
}

export default CategoryPage;
