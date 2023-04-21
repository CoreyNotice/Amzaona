
import Product from './componets/Product';
import data from './data';
import './index.css';

function App() {
  return (
    <div className="grid-container">
    <header className="row">
        <div>
            <a className="brand" href="/index">amazona</a>
        </div>
    <div>
        <a href="/cart">Cart</a>
        <a href="/signin">Sign In</a>       
     </div>
    </header>
    <main>
        <div>
          <div className="row center">
            {data.products.map((product) => (
          <Product key={product._id}  product={product}/>
            ))}
          </div>
        </div>
      </main>
 <footer className="row center" >All right reserve</footer>
</div>
  );
}

export default App;
