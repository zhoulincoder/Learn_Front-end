
function FilterType(state, action) {
  switch(action.type) {
    case 'ACTIVE':
      return 'ACTIVE'
    case 'GONE':
      return 'GONE'
    default:
      return 'ALL'
  }
}
export default FilterType