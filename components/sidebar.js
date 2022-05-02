function sidebar() {
  // return your html component here
  //Make sure to give input search box id as "searchbar"

  return ` <h2>Country</h2>
  <h3 id="in">india</h3>
  <h3 id="ch">China</h3>
  <h3 id="us">Usa</h3>
  <h3 id="uk">United Knigdom</h3>
  <h3 id="nz">New Zeland</h3>
  
   
  
`
}

function searchbar() {
  // return your html component here
  //Make sure to give input search box id as "searchbar"

  return ` <h2>News</h2>
  
  
  <input type="text" name="" id="searchbar" placeholder="Search news">
  
`
}
export {sidebar,searchbar};
