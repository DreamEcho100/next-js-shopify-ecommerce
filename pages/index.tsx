// import type { NextPage } from 'next';
import type {
	InferGetStaticPropsType,
	// GetStaticProps
} from 'next';

import styles from '@styles/Home.module.css';

import { getAllProducts } from '@frameworks/shopify/product/get-all-products';

const Home = ({ products }: InferGetStaticPropsType<typeof getStaticProps>) => {
	return (
		<div className={styles.container}>
			<h2>!</h2>
			<p>{products[0]}</p>
		</div>
	);
};

export const getStaticProps = async () => {
	const products = await getAllProducts();

	return {
		props: {
			products,
		},
		revalidate: 4 * 60 * 60,
	};
};

export default Home;
