const Footer = () => {
  return (
    <div>  
        <footer className="bg-dark text-light py-4">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <h5>🍳 RecipeHub</h5>
                    <p className="mb-0">Discover & share amazing recipes from around the world.</p>
                  </div>
                  <div className="col-md-6 text-md-end">
                    <p className="mb-0">&copy; 2023 - { new Date().getFullYear() } RecipeHub.</p>
                  </div>
                </div>
              </div>
        </footer>
    </div>
  )
}

export default Footer