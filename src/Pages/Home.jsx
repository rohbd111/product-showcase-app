import React, { useEffect, useState } from 'react';
import Header from './Header';
import ProductCard from './ProductCard';
import FilterSidebar from './FilterSidebar';
import SortOptions from './SortOptions';
import Pagination from './Pagination';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filters, setFilters] = useState({ category: '', priceRange: [0, 1000] });
  const [sort, setSort] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 10;

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setFiltered(data);
      });

    fetch('https://fakestoreapi.com/products/categories')
      .then(res => res.json())
      .then(setCategories);
  }, []);

  useEffect(() => {
    let temp = [...products];
    const { category, priceRange } = filters;

    if (category) {
      temp = temp.filter(p => p.category === category);
    }

    temp = temp.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    switch (sort) {
      case 'price-asc': temp.sort((a, b) => a.price - b.price); break;
      case 'price-desc': temp.sort((a, b) => b.price - a.price); break;
      case 'name-asc': temp.sort((a, b) => a.title.localeCompare(b.title)); break;
      case 'name-desc': temp.sort((a, b) => b.title.localeCompare(a.title)); break;
      default: break;
    }

    setFiltered(temp);
    setCurrentPage(1); 
  }, [filters, sort, products]);

  const startIndex = (currentPage - 1) * perPage;
  const paginated = filtered.slice(startIndex, startIndex + perPage);

  return (
    <>
      <Header />
      <div className="container" style={{ display: 'flex' }}>
        <FilterSidebar categories={categories} filters={filters} setFilters={setFilters} />
        <main className="main">
          <SortOptions sort={sort} setSort={setSort} />
          <div className="product-grid">
            {paginated.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <Pagination
            current={currentPage}
            total={filtered.length}
            perPage={perPage}
            onChange={setCurrentPage}
          />
        </main>
      </div>
    </>
  );
}
