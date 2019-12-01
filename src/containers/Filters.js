import React, { Component } from "react";
import FilterName from "../components/FilterName";
import Filter from "../components/Filter";
import { debounce } from "../helpers/EventUtils";
import "./Filters.css";

class Filters extends Component {
  constructor(props) {
    super(props);
    this.setFilterName = debounce(this.setFilterName.bind(this), 70);
    this.updateTypeValue = debounce(this.updateTypeValue.bind(this), 70);
    this.addFilter = this.addFilter.bind(this);
    this.saveFilters = this.saveFilters.bind(this);
    this.state = {
      filterName: "",
      filters: [
        {
          id: 1,
          type: "number",
          value: ""
        }
      ]
    };
  }

  setFilterName(filterName) {
    this.setState({ filterName });
  }

  updateTypeValue(id, type, value) {
    const { filters } = this.state;
    const updatedFilters = filters.map(filter => {
      if (filter.id === id) {
        if (type) filter.type = type;
        if (value !== null) filter.value = value;
      }
      return filter;
    });
    this.setState({ filters: updatedFilters });
  }

  addFilter() {
    const { filters } = this.state;
    const lastId = filters[filters.length - 1].id;
    filters.push({
      id: lastId + 1,
      type: "number",
      value: ""
    });
    this.setState({ filters });
  }

  saveFilters(ev) {
    const { filterName: name, filters } = this.state;
    const filterConditions = filters.map(filter => {
      const { type, value } = filter;
      return {
        type,
        value
      };
    });
    const savedFilter = {
      name,
      filterConditions
    };
    console.log(JSON.stringify(savedFilter));
    alert('Data logged on the console');
    ev.preventDefault();
  }

  render() {
    const { filterName, filters } = this.state;
    return (
      <>
        <FilterName
          filterName={filterName}
          setFilterName={this.setFilterName}
        />
        <>
          <div class="filter-head">Filter Conditions</div>
          {filters.length > 0 && (
            <form onSubmit={this.saveFilters}>
              {filters.map(filter => {
                return (
                  <Filter
                    key={filter.id}
                    filter={filter}
                    updateTypeValue={this.updateTypeValue}
                  />
                );
              })}
              <button id="add-btn" class="btn" onClick={this.addFilter}>+ Add Filter</button>
              <button id="save-btn" class="btn" type="submit">Save Filters</button>
            </form>
          )}
        </>
      </>
    );
  }
}

export default Filters;
