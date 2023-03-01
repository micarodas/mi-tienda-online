// api.js
const items = [
    { id: '1', name: 'Product 1', description: 'Description of Product 1', category: 'category1', price: 2560 },
    { id: '2', name: 'Product 2', description: 'Description of Product 2', category: 'category1', price: 670 },
    { id: '3', name: 'Product 3', description: 'Description of Product 3', category: 'category2', price: 2500 },
    { id: '4', name: 'Product 4', description: 'Description of Product 4', category: 'category2', price: 350 },
  ];
  
 const getItemsByCategory = async (categoryId) => {
    const filteredItems = items.filter((item) => item.category === categoryId);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(filteredItems);
      }, 1000);
    });
  };
  
  const getItemById = async (itemId) => {
    const item = items.find((item) => item.id === itemId);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(item);
      }, 1000);
    });
  };
  