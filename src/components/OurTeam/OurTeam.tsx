import { getTranslations } from "next-intl/server";
import "./OurTeam.scss";

interface Member {
	name: string;
	position: string;
	email: string;
	tel: string;
	linkedInUrl?: string;
}

const members: Member[] = [
	{
		name: "Jiří Faltin",
		position: "our_team.member3",
		email: "faltin@fvestavby.cz",
		tel: "+420 773 853 538",
	},
	{
		name: "Kristián Jankó",
		position: "our_team.member1",
		email: "janko@fvestavby.cz",
		tel: "+420 776 171 400",
	},
	{
		name: "Stepan Dordiai",
		position: "our_team.member4",
		email: "stepan@fvestavby.cz",
		tel: "+420 722 001 016",
		linkedInUrl: "https://linkedin.com/in/stepandordiai",
	},
];

const OurTeam = async () => {
	const t = await getTranslations();

	return (
		<>
			<h2 className="our-team__title">{t("our_team.title")}</h2>
			<div className="our-team__grid">
				{members.map(({ name, position, email, tel, linkedInUrl }, index) => {
					return (
						<div key={index} className="our-team__grid-item">
							<div className="img-wrapper">
								<img src="/icons/user.png" alt="" loading="lazy" />
							</div>
							<p className="our-team__grid-item-name">{name}</p>
							<p className="our-team__grid-item-position">{t(position)}</p>
							<div
								style={{
									display: "flex",
									justifyContent: "flex-start",
									alignItems: "flex-start",
									flexDirection: "column",
									rowGap: 5,
								}}
							>
								<a
									className="our-team__grid-item-link"
									href={`tel:${tel.replaceAll(" ", "")}`}
								>
									{tel}
								</a>
								<a
									className="our-team__grid-item-link"
									href={`mailto:${email}`}
								>
									{email}
								</a>
								{linkedInUrl && (
									<a
										className="our-team__grid-item-link"
										href={linkedInUrl}
										target="_blank"
									>
										LinkedIn
									</a>
								)}
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default OurTeam;
