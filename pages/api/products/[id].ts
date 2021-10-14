import type { NextApiRequest, NextApiResponse } from 'next';
import type Data from 'pages/api/products/[id].interface';

import mockData from 'pages/api/products/[id].mock';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const id = Number(req.query.id);

  res.status(200).json({
    id,
    ...mockData,
  });
}
