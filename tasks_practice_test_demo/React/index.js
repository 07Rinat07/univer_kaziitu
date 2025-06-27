const filterList = (text)=> {
    const filteredList = props.data.items.filter((item) =>
        item.toLowerCase().search(text.toLowerCase())!== -1
    ); 
    setItems(filteredList);
}