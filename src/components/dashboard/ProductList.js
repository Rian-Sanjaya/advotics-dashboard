function ProductList({ bestSKU }) {
  return (
    <div>
      {bestSKU && bestSKU.length > 0 && 
        bestSKU.map((item, i) => (
          <div key={item.id} style={{ display: "flex", border: "1px solid #C5C5C59C", borderRadius: 4, marginBottom: 6, background: i === 0 ? "#FFE7BD" : null }}>
            <div style={{ marginRight: 8 }}><img src={item.image} alt={item.name} /></div>
            <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", paddingRight: 8 }}>
              <div style={{ fontSize: "1.1rem", fontWeight: 700 }}>{ item.name }</div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>{ item.price }</div>
                <div>{ item.soldQty }</div>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  );
}

export default ProductList;