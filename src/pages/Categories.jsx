
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { categories, recipes } from '../data/recipes';

const Categories = () => {
  const categoryInfo = {
    breakfast: { emoji: '🥞', color: '#ffd700', description: 'Start your day with delicious morning meals' },
    lunch: { emoji: '🥗', color: '#90c695', description: 'Perfect midday meals to keep you energized' },
    dinner: { emoji: '🍝', color: '#ff6b35', description: 'Hearty evening meals for the whole family' },
    dessert: { emoji: '🍪', color: '#ff69b4', description: 'Sweet treats to end your meal perfectly' }
  };

  const getCategoryRecipes = (categoryId) => {
    return recipes.filter(recipe => recipe.category === categoryId);
  };

  return (
    <div className="py-5">
      <Container>
        {/* Header */}
        <Row className="mb-5">
          <Col>
            <h1 className="text-center mb-4" style={{color: 'var(--dark-brown)'}}>
              Recipe Categories
            </h1>
            <p className="text-center text-muted">
              Explore recipes organized by meal type and occasion
            </p>
          </Col>
        </Row>

        {/* Categories Grid */}
        <Row>
          {Object.entries(categoryInfo).map(([categoryId, info]) => {
            const categoryRecipes = getCategoryRecipes(categoryId);
            return (
              <Col md={6} lg={3} key={categoryId} className="mb-4">
                <Card className="recipe-card h-100 text-center">
                  <Card.Body className="d-flex flex-column">
                    <div 
                      className="display-1 mb-3"
                      style={{color: info.color}}
                    >
                      {info.emoji}
                    </div>
                    <Card.Title className="recipe-title">
                      {categoryId.charAt(0).toUpperCase() + categoryId.slice(1)}
                    </Card.Title>
                    <Card.Text className="text-muted mb-3 flex-grow-1">
                      {info.description}
                    </Card.Text>
                    <div className="mb-3">
                      <span className="badge bg-secondary">
                        {categoryRecipes.length} recipe{categoryRecipes.length !== 1 ? 's' : ''}
                      </span>
                    </div>
                    <Link 
                      to={`/recipes?category=${categoryId}`}
                      className="btn btn-primary-custom mt-auto"
                    >
                      View Recipes
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>

        {/* Featured Recipes from Each Category */}
        <Row className="mt-5">
          <Col>
            <h2 className="text-center mb-5" style={{color: 'var(--dark-brown)'}}>
              Featured from Each Category
            </h2>
          </Col>
        </Row>

        {Object.entries(categoryInfo).map(([categoryId, info]) => {
          const categoryRecipes = getCategoryRecipes(categoryId);
          const featuredRecipe = categoryRecipes[0]; // Get first recipe from category
          
          if (!featuredRecipe) return null;

          return (
            <Row key={categoryId} className="mb-5 align-items-center">
              <Col md={6}>
                <img 
                  src={featuredRecipe.image}
                  alt={featuredRecipe.title}
                  className="img-fluid rounded-3 shadow"
                  style={{width: '100%', height: '300px', objectFit: 'cover'}}
                />
              </Col>
              <Col md={6}>
                <div className="ps-md-4">
                  <div className="display-4 mb-3" style={{color: info.color}}>
                    {info.emoji}
                  </div>
                  <h3 className="recipe-title mb-3">{featuredRecipe.title}</h3>
                  <p className="text-muted mb-3">{featuredRecipe.description}</p>
                  <div className="recipe-meta mb-4">
                    <small>
                      ⏱️ {featuredRecipe.cookTime} • 👥 {featuredRecipe.servings} servings • 📊 {featuredRecipe.difficulty}
                    </small>
                  </div>
                  <Link 
                    to={`/recipe/${featuredRecipe.id}`}
                    className="btn btn-primary-custom me-3"
                  >
                    View Recipe
                  </Link>
                  <Link 
                    to={`/recipes?category=${categoryId}`}
                    className="btn btn-outline-secondary"
                  >
                    More {categoryId.charAt(0).toUpperCase() + categoryId.slice(1)}
                  </Link>
                </div>
              </Col>
            </Row>
          );
        })}
      </Container>
    </div>
  );
};

export default Categories;
