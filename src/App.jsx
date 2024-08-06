import { Footer, PopularProducts } from "./sections";
import Nav from "./Components/Nav";

const App = () => (
  <main className="relative">
    <Nav />

    <section className="padding">
      <PopularProducts />
    </section>

    <section className="bg-black padding-x padding-t pb-8">
      <Footer />
    </section>
  </main>
);

export default App;
