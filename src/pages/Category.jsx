import React, { Component } from 'react';
import Layout from '../components/Layout';
// Avem nevoie de fisierul JSON
import products from '../utils/products.json'

class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: {}
        }
    }

    componentDidMount() {
        // Daca componenta a fost inclusa intr-o componenta de tip "Route"(vezi App.js)
        // => automat in this.props vin 3 atribute: history, location, match
        console.log(this.props);
        // In match gasim parametri rutei
        const { match } = this.props;
        // Parametri primiti in ruta se gasesc in cheia params, sub numele dat in componenta
        // Route corespunzatoare(din App.js).
        const categoryName = match.params.categoryName;
        // Folosindu-ne de categoria venita din URL, extragem din fisierul JSON doar informatiile
        // necesare acesteia, acualizand state-ul
        this.setState({ category: products[categoryName] });
    }

    render() {
        return (
            // Fiecare pagina cu header si footer trebuie sa aiba continutul incadrat de Layout
            <Layout>
                {/* Pentru a nu a avea o dimensiune prea mare si a fi centrat, continutul
                paginii trebuie introdus intr-un div cu cele doua clase de mai jos. */}
                <div className="container-fluid container-min-max-width">
                    {/* Din categoria curenta, afisam numele */}
                    <h2>{ this.state.category.name }</h2>
                </div>
            </Layout>
        );
    }
}

export default Category;