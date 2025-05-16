import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";


const FeatureList = [
	{
		title: "Easy to Use",
		// Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
		description: (
			<>
				Designed around the needs of the elderly, hOSe will aim to be simple,
				self explanatory, and accessible to all.
			</>
		),
	},
	{
		title: "Fast and Reliable",
		// Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
		description: (
			<>
				hOSe will built on top of a Linux Mint (MATE) base, making it super stable, fast, and resource-efficient, even on older machines.
			</>
		),
	},
	{
		title: "Simple Setup",
		// Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
		description: (
			<>
				With a straightforward and easy to understand setup experience, hOSe can be tailored specially for the personal apps each user needs.
			</>
		),
	},
];

function Feature({ title, description }) {
	return (
		<div className={clsx("col col--4")}>
			<div className="text--center">
				{/* <Svg className={styles.featureSvg} role="img" /> */}
			</div>
			<div className="text--center padding-horiz--md">
				<Heading as="h3">{title}</Heading>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default function HomepageFeatures() {
	return (
		<section className={styles.features}>
			<div className="container">
				<div className="row">
					{FeatureList.map((props, idx) => (
						<Feature key={idx} {...props} />
					))}
				</div>
			</div>
		</section>
	);
}
