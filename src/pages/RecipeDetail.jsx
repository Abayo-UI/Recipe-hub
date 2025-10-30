import { useParams, Link, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Badge, Button, ListGroup } from 'react-bootstrap';
import { recipes } from '../data/recipes';
import { useContext } from 'react';
import { GlobalContext } from '../components/context';

const RecipeDetail = () => {
  const { id } = useParams();
  const recipe = recipes.find(r => r.id === parseInt(id));
  const navigate = useNavigate();
  const { searchTerm, setSearchTerm } = useContext( GlobalContext )

  const handleClick = ( category ) => {
   navigate("/recipes");
   setSearchTerm( category )
  }

  if (!recipe) { 
    return (
      <Container className="py-5">
        <Row>
          <Col className="text-center">
            <h2>Recipe not found</h2>
            <Link to="/recipes" className="btn btn-primary-custom">
              Back to Recipes
            </Link>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <div className="py-5">
      <Container>
        {/* Back Button */}
        <Row className="mb-4">
          <Col>
            <Link to="/recipes" className="btn btn-outline-secondary">
              ← Back to Recipes
            </Link>
          </Col>
        </Row>

        {/* Recipe Header */}
        <Row className="mb-5">
          <Col lg={6}>
            <img 
              src={recipe.image} 
              alt={recipe.title}
              className="img-fluid rounded-3 shadow"
              style={{width: '100%', height: '400px', objectFit: 'cover'}}
            />
          </Col>
          <Col lg={6}>
            <div className="ps-lg-4">
              <Badge className="category-badge mb-3">
                {recipe.category.charAt(0).toUpperCase() + recipe.category.slice(1)}
              </Badge>
              <h1 className="recipe-title display-5 mb-3">{recipe.title}</h1>
              <p className="lead text-muted mb-4">{recipe.description}</p>
              
              <Row className="mb-4">
                <Col sm={4} className="mb-2">
                  <div className="text-center p-3 bg-light rounded">
                    <div className="h5 mb-1">⏱️</div>
                    <small className="text-muted">Cook Time</small>
                    <div className="fw-bold">{recipe.cookTime}</div>
                  </div>
                </Col>
                <Col sm={4} className="mb-2">
                  <div className="text-center p-3 bg-light rounded">
                    <div className="h5 mb-1">👥</div>
                    <small className="text-muted">Servings</small>
                    <div className="fw-bold">{recipe.servings}</div>
                  </div>
                </Col>
                <Col sm={4} className="mb-2">
                  <div className="text-center p-3 bg-light rounded">
                    <div className="h5 mb-1">📊</div>
                    <small className="text-muted">Difficulty</small>
                    <div className="fw-bold">{recipe.difficulty}</div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        {/* Ingredients and Instructions */}
        <Row>
          <Col lg={5}>
            <Card className="ingredient-list">
              <Card.Body>
                <h3 className="h4 mb-4" style={{color: 'var(--dark-brown)'}}>
                  🛒 Ingredients
                </h3>
                <ListGroup variant="flush">
                  {recipe.ingredients.map((ingredient, index) => (
                    <ListGroup.Item 
                      key={index} 
                      className="px-0 py-2 border-0"
                      style={{backgroundColor: 'transparent'}}
                    >
                      <div className="d-flex align-items-center">
                        <span className="me-3" style={{color: 'var(--primary-orange)'}}>
                          •
                        </span>
                        {ingredient}
                      </div>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
          
          <Col lg={7}>
            <div className="ps-lg-4">
              <h3 className="h4 mb-4" style={{color: 'var(--dark-brown)'}}>
                👨‍🍳 Instructions
              </h3>
              {recipe.instructions.map((instruction, index) => (
                <div key={index} className="instruction-step">
                  <div className="d-flex">
                    <div 
                      className="flex-shrink-0 rounded-circle d-flex align-items-center justify-content-center me-3"
                      style={{
                        width: '30px',
                        height: '30px',
                        backgroundColor: 'var(--primary-orange)',
                        color: 'white',
                        fontSize: '0.9rem',
                        fontWeight: 'bold'
                      }}
                    >
                      {index + 1}
                    </div>
                    <div className="flex-grow-1">
                      {instruction}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>

        {/* Related Recipes */}
        <Row className="mt-5">
          <Col>
            <button style={{ border:"3px solid #ff8c42"}} className='px-3 pt-3 rounded-5' onClick={ () => { handleClick( recipe.category) }}>
              <h3 className="h4 mb-4 text-center" style={{color: 'var(--dark-brown)'}}>
              More {recipe.category.charAt(0).toUpperCase() + recipe.category.slice(1)} Recipes
            </h3>
            </button>
            <div className="text-center">
              <Link 
                to={`/recipes`} 
                className="btn btn-primary-custom"
              >
                Browse All Recipes
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RecipeDetail;
