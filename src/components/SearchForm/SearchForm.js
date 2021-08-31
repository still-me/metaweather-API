import { useState } from 'react';

import styles from './SearchForm.module.css';

export default function SearchForm({ onSubmit }) {
  const [searchQuery, setSearchQuery] = useState('');

  const onInputChange = ({ target }) => {
    const query = target.value;
    setSearchQuery(query);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (searchQuery === '') {
      return;
    }
    onSubmit(searchQuery);
    setSearchQuery('');
  };
  return (
    <div className={styles.SearchBar}>
      <form className={styles.SearchForm} onSubmit={handleSubmit}>
        <input
          className={styles.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          value={searchQuery}
          onChange={onInputChange}
        />
        <button className={styles.SearchFormButton} type="submit">
          Search
        </button>
      </form>
    </div>
  );
}
