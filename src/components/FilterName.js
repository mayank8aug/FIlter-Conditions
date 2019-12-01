import React from 'react';

function FilterName(props) {
  const { setFilterName, filterName } = props;
  return (
    <input id="filter-name" type="text" placeholder="Filter Name" name="filter-name" value={filterName} onChange={ev => setFilterName(ev.target.value)} />
  );
}

export default FilterName;