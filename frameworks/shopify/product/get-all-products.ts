import { ProductConnection } from '@frameworks/schema';
import { fetchApi, normalizeProduct, getAllProductsQuery } from '../utils';

import { Product } from '@common/types/product';

type ReturnType = {
	products: ProductConnection;
};

const getAllProducts = async (): Promise<Product[]> => {
	const { data } = await fetchApi<ReturnType>({ query: getAllProductsQuery });

	// const products = data.products.edges.map(({ node: product }) => product) ?? [];

	// return products;
	return (
		data.products.edges.map(({ node: product }) => normalizeProduct(product)) ??
		[]
	);
};

export default getAllProducts;
