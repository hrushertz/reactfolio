import React from "react";

function article_1() {
	return {
		date: "5 August 2024",
		title: "The Impact of Social Engineering in Cyber Attacks",
		description:
			"Social engineering is a manipulation technique used in cyber attacks to exploit human psychology, leading individuals to disclose sensitive information. It plays a significant role in breaching security by bypassing technical defenses and targeting human vulnerabilities.",
		keywords: [
			"The Impact of Social Engineering in Cyber Attacks",
			"Hrushikesh",
			"Social Engineering",
			"Cyber Attack",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
  <div className="article-content">
					<div className="paragraph">
					<h2>The Impact of Social Engineering in Cyber Attacks</h2>
					<p>
						The phrase "social engineering" is frequently used in the context of cybersecurity to describe one of the sneakiest and most potent attack methods. In contrast to conventional cyberattacks, which depend on taking advantage of technological flaws, social engineering leverages human psychology and behavior to obtain unauthorized access to systems or confidential data. Retaining strong security requires knowing the effects of social engineering and how to prevent it.
					</p>
					
					<h3>Exploiting Human Psychology</h3>
					<p>
						Social engineering attacks are designed to mislead people into disclosing private information or taking actions that seriously affect security by manipulating their emotions and behaviors. Creating a sense of urgency, playing on anxieties and fears, and posing as reliable people are examples of common strategies. For example, a con artist may impersonate a business executive requesting payment right away or a tech support representative requesting login information while pretending to address an urgent problem. These strategies are especially successful because they take advantage of innate human emotions like trust, fear, and urgency.
					</p>

					<h3>Types of Social Engineering Attacks</h3>
					<ul>
						<li><strong>Phishing:</strong> This is the practice of sending phony emails or messages that look authentic in an attempt to trick recipients into clicking on harmful links or revealing personal information.</li>
						<li><strong>Pretexting:</strong> When an attacker wants to get information from a target, they fabricate a scenario. For instance, they could pretend to be a bank employee in order to obtain account information.</li>
						<li><strong>Baiting:</strong> This strategy tempts people into falling into a trap by, for example, providing free malware-containing software.</li>
						<li><strong>Spear Phishing:</strong> In contrast to widespread phishing attacks, spear phishing targets particular people or companies and frequently uses customized data to boost the attack's legitimacy.</li>
					</ul>

					<h3>Consequences of Social Engineering Attacks</h3>
					<p>
						Social engineering can have serious and pervasive effects:
					</p>
					<ul>
						<li><strong>Data Breaches:</strong> When social engineering techniques are successful, private, financial, or proprietary data may be compromised due to unauthorized access to sensitive information.</li>
						<li><strong>Financial Losses:</strong> Fraud, theft, and ransom demands brought on by social engineering attacks can cause substantial financial losses for both individuals and organizations.</li>
						<li><strong>Reputation Damage:</strong> Businesses that fall prey to social engineering attacks risk having their trust eroded by stakeholders, partners, and customers.</li>
						<li><strong>Operational Disruption:</strong> Social engineering attacks have the potential to cause havoc with regular operations, particularly if they result in malware installation or unapproved access to vital systems.</li>
					</ul>

					<h3>Preventing Social Engineering Attacks</h3>
					<p>
						Awareness, training, and technical measures must be combined to prevent social engineering attacks:
					</p>
					<ul>
						<li><strong>Education and Training:</strong> Consistently instruct staff members and individuals on typical social engineering techniques as well as how to identify and handle doubtful communications.</li>
						<li><strong>Verify Requests:</strong> When someone asks for sensitive information or action, you should always confirm their identity, especially if the request seems sudden or urgent.</li>
						<li><strong>Employ MFA, or multi-factor authentication:</strong> By using multi-factor authentication (MFA), you can increase security and make it more difficult for hackers to obtain login credentials and gain unauthorized access.</li>
						<li><strong>Clearly define your policies:</strong> Establish and implement explicit policies for managing confidential data and addressing security events. Make certain that every employee understands these rules and complies with them.</li>
					</ul>

					<h3>Conclusion</h3>
					<p>
						In the field of cybersecurity, social engineering poses a serious and expanding threat since it takes advantage of human psychology to exploit weaknesses and obtain unauthorized access to private data. Such attacks can have serious implications that affect both people and organizations. Individuals and organizations can enhance their defenses against these deceptive and potentially catastrophic attacks by comprehending the strategies employed in social engineering and putting strong preventive measures in place. To combat the psychological methods of social engineers, awareness, alertness, and education are essential.
					</p>
					</div>
				</div>
				</React.Fragment>

		),
	};
}

// function article_2() {
// 	return {
// 		date: "7 May 2023",
// 		title: "Artificial Intelligence in Healthcare",
// 		description:
// 			"AI is transforming the healthcare industry, from improving patient outcomes to streamlining operations. Discover the latest applications of this game-changing technology.",
// 		style: ``,
// 		keywords: [
// 			"Artificial Intelligence in Healthcare",
// 			"Tharindu",
// 			"Tharindu N",
// 			"Tharindu Nayanajith",
// 		],
// 		body: (
// 			<React.Fragment>
// 				<h1>Content of article 2</h1>
// 			</React.Fragment>
// 		),
// 	};
// }

const myArticles = [article_1];

export default myArticles;
