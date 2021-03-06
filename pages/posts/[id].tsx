import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import { getAllPostIds, getPostData } from '../../lib/post';
import homeStyle from '../../styles/Home.module.css';
import postStyle from '../../styles/Post.module.css';

export default function Post({
	postData,
}: {
	postData: {
		title: string;
		date: string;
		contentHtml: string;
	};
}) {
	return (
		<div className={postStyle.container}>
			<Head>
				<title>{postData.title}</title>
			</Head>
			<article>
				<h1 className={homeStyle.headingXl}>{postData.title}</h1>
				<div className={homeStyle.lightText}>{postData.date}</div>
				<div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
			</article>
		</div>
	);
}

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = getAllPostIds();

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const postData = await getPostData(params.id as string);
	return {
		props: {
			postData,
		},
	};
};
