import apiClient from '../../../services/apiClient';

export const fetchProducts = async () => {
  try {
    const response = await apiClient.get('/products', {
      headers: {
        domain: 'donguston',   // Aquí especifica el valor del campo Domain que necesites
      },
    });
    return response.data.products;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const createProduct = async (productData: any) => {
  try {
    const response = await apiClient.post('/products', productData, {
      headers: {
        domain: 'donguston',  // Aquí especifica el valor del campo Domain que necesites
      },
    });
   
    return response.data.products;
  } catch (error) {
    console.error('Error creating product:', error);
    throw error;
  }
};

// Otros métodos relacionados con productos...
