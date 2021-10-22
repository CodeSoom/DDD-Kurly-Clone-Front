/**
 * @typedef { import("pages/api/products/[id].interface").default } Data
 *
 * @typedef { Object } ProductDetailResponse
 * @property { number } status
 * @property { Data | {} } data
 */

/**
 * @param { number } id
 *
 * @returns { Promise<ProductDetailResponse> }
 */
export async function getProductDetail(id) {
  const { status, json } = await fetch(`${process.env.ASSETS_PREFIX}/api/products/${id}`);
  const data = status === 200 ? await json() : {};

  return {
    status,
    data,
  };
}

export const dummy = '';
