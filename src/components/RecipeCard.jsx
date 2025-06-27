
import React from 'react';
import { Card, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const RecipeCard = ({ recipe }) => {
  return (
    <Card className="recipe-card h-100">
      <Card.Img 
        variant="top" 
        src={recipe.image} 
        className="recipe-image"
        alt={recipe.title}
      />
      <Card.Body className="d-flex flex-column">
        <div className="mb-2">
          <Badge className="category-badge">
            {recipe.category.charAt(0).toUpperCase() + recipe.category.slice(1)}
          </Badge>
        </div>
        <Card.Title className="recipe-title">{recipe.title}</Card.Title>
        <Card.Text className="text-muted mb-3 flex-grow-1">
          {recipe.description}
        </Card.Text>
        <div className="recipe-meta mb-3">
          <small>
            ⏱️ {recipe.cookTime} • 👥 {recipe.servings} servings • 📊 {recipe.difficulty}
          </small>
        </div>
        <Link 
          to={`/recipe/${recipe.id}`} 
          className="btn btn-primary-custom mt-auto"
        >
          View Recipe
        </Link>
      </Card.Body>
    </Card>
  );
};

export default RecipeCard;
