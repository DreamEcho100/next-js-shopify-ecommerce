import { Product } from '@common/types/product';
import { ImageEdge, Product as ShopifyProduct } from '@frameworks/schema';

const normalizeProductImages = ({ edges }: { edges: Array<ImageEdge> }) =>
	edges.map(({ node: { originalSrc: url, ...rest } }) => ({
		url: `/images/${url}`,
		...rest,
	}));

export const normalizeProduct = (productNode: ShopifyProduct): Product => {
	const {
		id,
		title: name,
		handle,
		vendor,
		description,
		images: imageConnection,
		...rest
	} = productNode;

	// const product = {
	//   id,
	//   name,
	//   vendor,
	//   description,
	//   path: `/${handle}`,
	//   slug: handle.replace(/^\/+|\/+$/g, ""),
	// images: normalizeProductImages(imageConnection),
	//   ...rest
	// }

	// return product

	return {
		id,
		name,
		vendor,
		description,
		path: `/${handle}`,
		slug: handle.replace(/^\/+|\/+$/g, ''),
		images: normalizeProductImages(imageConnection),
		...rest,
	};
};
