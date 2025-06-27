
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import RecipeCard from '../components/RecipeCard';
import { recipes, categories } from '../data/recipes';

const Recipes = () => {
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const handleCategoryFilter = (categoryId) => {
    setActiveCategory(categoryId);
    if (categoryId === 'all') {
      setFilteredRecipes(recipes);
    } else {
      const filtered = recipes.filter(recipe => recipe.category === categoryId);
      setFilteredRecipes(filtered);
    }
    setSearchTerm('');
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const filtered = recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.ingredients.some(ingredient => 
        ingredient.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setFilteredRecipes(filtered);
    setActiveCategory('all');
  };

  return (
    <div className="py-5">
      <Container>
        {/* Header */}
        <Row className="mb-5">
          <Col>
            <h1 className="text-center mb-4" style={{color: 'var(--dark-brown)'}}>
              All Recipes
            </h1>
            <p className="text-center text-muted">
              Discover our complete collection of delicious recipes
            </p>
          </Col>
        </Row>

        {/* Search Bar */}
        <Row className="mb-4">
          <Col lg={6} className="mx-auto">
            <Form onSubmit={handleSearch}>
              <InputGroup>
                <Form.Control
                  type="text"
                  placeholder="Search recipes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="rounded-start-pill"
                />
                <Button 
                  variant="outline-secondary" 
                  type="submit"
                  className="rounded-end-pill"
                >
                  🔍
                </Button>
              </InputGroup>
            </Form>
          </Col>
        </Row>

        {/* Category Filters */}
        <Row className="mb-5">
          <Col>
            <div className="text-center">
              {categories.map(category => (
                <Button
                  key={category.id}
                  className={`category-filter ${activeCategory === category.id ? 'active' : ''}`}
                  onClick={() => handleCategoryFilter(category.id)}
                >
                  {category.name} ({category.count})
                </Button>
              ))}
            </div>
          </Col>
        </Row>

        {/* Results */}
        <Row className="mb-4">
          <Col>
            <h5 className="text-muted">
              {filteredRecipes.length} recipe{filteredRecipes.length !== 1 ? 's' : ''} found
            </h5>
          </Col>
        </Row>

        {/* Recipe Grid */}
        <Row>
          {filteredRecipes.map(recipe => (
            <Col md={6} lg={4} key={recipe.id} className="mb-4">
              <RecipeCard recipe={recipe} />
            </Col>
          ))}
        </Row>

        {filteredRecipes.length === 0 && (
          <Row>
            <Col className="text-center py-5">
              <h4 className="text-muted">No recipes found</h4>
              <p className="text-muted">Try adjusting your search or category filters</p>
              <Button 
                className="btn-primary-custom"
                onClick={() => {
                  setFilteredRecipes(recipes);
                  setActiveCategory('all');
                  setSearchTerm('');
                }}
              >
                Show All Recipes
              </Button>
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
};

export default Recipes;
