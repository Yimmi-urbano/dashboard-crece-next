import { NextApiRequest, NextApiResponse } from 'next';

const products = [
  { id: 1, name: 'Product 1', price: 100 },
  { id: 2, name: 'Product 2', price: 150 },
  { id: 3, name: 'Product 3', price: 200 },
  { id: 7, name: 'Product 5', price: 200 },
];

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(products);
};
