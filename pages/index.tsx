import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { getSortedPostsData } from '../lib/post';
import homeStyles from '../styles/Home.module.css';

const Home = ({
	allPostData,
}: {
	allPostData: {
		date: string;
		title: string;
		id: string;
	}[];
}) => {
	return (
		<div>
			<Head>
				<title>Next blog</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<section className={homeStyles.haedingMd}>
				<p>[Your Self Introduction]</p>
				<p>(This is a websitr)</p>
			</section>
			<section className={`${homeStyles.headingMd} ${homeStyles.padding1px}`}>
				<h2 className={homeStyles.headingLg}> Blog</h2>
				<ul className={homeStyles.list}></ul>
				{allPostData.map(({ id, title, date }) => (
					<li className={homeStyles.listItem} key={id}>
						<a>{title}</a>
						<br />
						<small className={homeStyles.lightText}>{date}</small>
					</li>
				))}
			</section>
		</div>
	);
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
	const allPostData = getSortedPostsData();
	return {
		props: {
			allPostData,
		},
	};
};
