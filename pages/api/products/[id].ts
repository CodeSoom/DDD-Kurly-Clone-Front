import type { NextApiRequest, NextApiResponse } from 'next';
import type ProductData from 'pages/api/products/[id].interface';

import mockData from 'pages/api/products/[id].mock';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProductData>,
) {
  const id = Number(req.query.id);

  res.status(200).json({
    id,
    ...mockData,
  });
}
