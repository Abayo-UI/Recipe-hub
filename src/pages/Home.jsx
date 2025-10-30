import { useContext, useState } from 'react';
import { Container, Row, Col, Form, InputGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import RecipeCard from '../components/RecipeCard';
import { recipes } from '../data/recipes';
import { GlobalContext } from '../components/context';

const Home = () => {
  const { searchTerm, setSearchTerm } = useContext( GlobalContext )
  const [ filteredRecipes, setFilteredRecipes ] = useState(recipes.slice(0, 3));

  const handleSearch = (e) => {
    e.preventDefault();
    const filtered = recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.ingredients.some(ingredient => 
        ingredient.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setFilteredRecipes(filtered.slice(0, 6));
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto">
              <h1 className="display-4 fw-bold mb-4">
                Discover Delicious Recipes
              </h1>
              <p className="lead mb-4">
                From quick breakfast ideas to gourmet dinners, find the perfect recipe for every occasion.
              </p>
              <Link to="/recipes" className="btn btn-light btn-lg rounded-pill px-4">
                Explore All Recipes
              </Link>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Search Section */}
      <section className="search-section">
        <Container>
          <Row>
            <Col lg={6} className="mx-auto">
              <Form onSubmit={handleSearch}>
                <InputGroup size="lg">
                  <Form.Control
                    type="text"
                    placeholder="Search for recipes, ingredients, or categories..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="rounded-start-pill"
                  />
                  <Button 
                    variant="outline-secondary" 
                    type="submit"
                    className="rounded-end-pill"
                  >
                    🔍 Search
                  </Button>
                </InputGroup>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Featured Recipes */}
      <section className="py-5">
        <Container>
          <Row>
            <Col>
              <h2 className="text-center mb-5" style={{color: 'var(--dark-brown)'}}>
                {searchTerm ? 'Search Results' : 'Featured Recipes'}
              </h2>
            </Col>
          </Row>
          <Row>
            {filteredRecipes.map(recipe => (
              <Col md={6} lg={4} key={recipe.id} className="mb-4">
                <RecipeCard recipe={recipe} />
              </Col>
            ))}
          </Row>
          {!searchTerm && (
            <Row>
              <Col className="text-center mt-4">
                <Link to="/recipes" className="btn btn-primary-custom">
                  View All Recipes
                </Link>
              </Col>
            </Row>
          )}
        </Container>
      </section>

      {/* Categories Preview */}
      <section className="py-5" style={{backgroundColor: '#f8f9fa'}}>
        <Container>
          <Row>
            <Col>
              <h2 className="text-center mb-5" style={{color: 'var(--dark-brown)'}}>
                Recipe Categories
              </h2>
            </Col>
          </Row>
          <Row className="text-center">
            <Col md={3} className="mb-3">
              <div className="p-4">
                <div className="display-1 mb-3">🥞</div>
                <h4>Breakfast</h4>
                <p className="text-muted">Start your day right</p>
              </div>
            </Col>
            <Col md={3} className="mb-3">
              <div className="p-4">
                <div className="display-1 mb-3">🥗</div>
                <h4>Lunch</h4>
                <p className="text-muted">Midday favorites</p>
              </div>
            </Col>
            <Col md={3} className="mb-3">
              <div className="p-4">
                <div className="display-1 mb-3">🍝</div>
                <h4>Dinner</h4>
                <p className="text-muted">Evening delights</p>
              </div>
            </Col>
            <Col md={3} className="mb-3">
              <div className="p-4">
                <div className="display-1 mb-3">🍪</div>
                <h4>Desserts</h4>
                <p className="text-muted">Sweet endings</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;
