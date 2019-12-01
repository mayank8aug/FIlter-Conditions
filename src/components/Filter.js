import React from "react";

const options = [
  {
    type: 'number',
    label: 'Number'
  },
  {
    type: 'tel',
    label: 'Telephone'
  },
  {
    type: 'email',
    label: 'Email'
  },
  {
    type: 'date',
    label: 'Date'
  }
];

function Filter(props) {
  const { filter, updateTypeValue } = props;
  const { id, type, value } = filter;
  return (
    <div class="display-flex">
      <select class="filter-type" onChange={ev => updateTypeValue(id, ev.target.value, null)} value={type}>
        {
          options.map(opt => {
            return <option key={opt.type} value={opt.type}>{opt.label}</option>
          })
        }
      </select>
      {type === 'tel' ?
        <input class="filter-value" onChange={ev => updateTypeValue(id, null, ev.target.value)} required type={type} value={value} name={`${type}-${id}`} placeholer="Enter Value" pattern="[789][0-9]{9}" title="Please enter a 10 digit number starting with 7/8/9"/> :
        <input class="filter-value" onChange={ev => updateTypeValue(id, null, ev.target.value)} required type={type} value={value} name={`${type}-${id}`} placeholer="Enter Value"/>
      }
    </div>
  );
}

export default Filter;
