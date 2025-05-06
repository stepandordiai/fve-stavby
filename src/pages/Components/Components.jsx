import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import PageTitle from "../../components/PageTitle/PageTitle";
import GetInTouch from "../../components/GetInTouch/GetInTouch";
import titleImg from "/assets/img/6.jpg";
import invertor1 from "/assets/invertor1.jpg";
import invertor2 from "/assets/invertor2.jpg";
import battery1 from "/assets/battery1.png";
import battery2 from "/assets/battery2.png";
import pannel1 from "/assets/pannel1.webp";
import optimizer1 from "/assets/optimizer1.webp";
import optimizer2 from "/assets/optimizer2.jpg";
import "./Components.scss";

const Components = () => {
	const { t } = useTranslation();

	return (
		<>
			<Helmet>
				<title>FVE STAVBY | {t("components_title")}</title>
				<link rel="canonical" href="https://fvestavby.cz/components" />
			</Helmet>
			<PageTitle title={"Komponenty"} img={titleImg} />
			<div className="components">
				<div className="components-container" id="invertors">
					<div className="components-container__title">
						<a href="#invertors" className="components__title">
							Střídače
						</a>
					</div>
					<div className="inverter-container">
						<img width={400} src={invertor1} alt="" />
						<div>
							<p className="inverter-title">Deye SUN-5/6/8/10/12K-SG04LP3-EU</p>
							<p>
								Nový multifunkční hybridní asymetrický měnič kombinuje funkce
								měniče, solární nabíječky a nabíječky baterií, přičemž nabízí
								nepřerušovanou podporu napájení s nastavitelným výkonem. Je
								vybaven komplexním LCD displejem, který umožňuje uživatelsky
								přívětivé ovládání pomocí tlačítek, včetně možností nastavení
								nabíjení baterie, AC/solárního nabíjení a přípustného vstupního
								napětí pro různé aplikace.
							</p>
						</div>
					</div>
					<div className="divider"></div>
					<div className="inverter-container">
						<img width={400} src={invertor2} alt="" />
						<div>
							<p className="inverter-title">
								Solax Power X3-HYBRID-5.0/6.0/8.0/10.0/12.0/15.0-D/M
							</p>
							<p>
								Hybridní solární střídač, který kombinuje účinnost, bezpečnost a
								inteligenci se zjednodušeným designem pro snadnou instalaci
								jednou osobou. Střídač zaručuje odolnost a kompatibilitu i v
								prostředí s nízkými teplotami, s krytím IP65 a podporou vysoce
								výkonných solárních panelů. Ukládá přebytečnou energii a
								umožňuje chytrou správu zátěže. Nabízí množství všestranných
								provozních režimů, včetně paralelního zapnutí/vypnutí sítě a
								připravenosti na VPP.
							</p>
						</div>
					</div>
					<div className="divider"></div>
					<div className="inverter-container">
						<img
							width={400}
							src={
								"https://chisagess.com/wp-content/uploads/2023/10/CHISAGE-ESS-Mars-5-14G2-LE-Product-Pictures-01.jpg"
							}
							alt=""
						/>
						<div>
							<p className="inverter-title">Chisage ESS MARS-5-14G2-LE</p>
							<p>
								• Jmenovitý výstupní výkon 14 kW
								<br />• Volitelná detekce poruchy ARC
								<br />• Podpora zapnutí/vypnutí režimu GRID, výstup EPS
								<br />• Podpora ukládání energie z dieselového generátoru
								<br />• Nezávislý AC vstupní port pro dieselový generátor
								<br />• 20 PCS invertorů paralelně pro provoz mimo síť
								<br />• Barevný 7palcový dotykový LCD displej, stupeň krytí IP65
								<br />• Podpora paralelního připojení různých výkonových měničů
								<br />• Podpora nabíjení/vybíjení baterie podle nastavení času
								<br />• 100% nesymetrický výstup, každá fáze max. výstup až 50%
								jmenovitého výkonu
							</p>
						</div>
					</div>
				</div>
				<div className="components-container" id="connectors">
					<div className="components-container__title">
						<a href="#connectors" className="components__title">
							Bateriová uložiště
						</a>
					</div>
					<div className="inverter-container">
						<img
							width={200}
							style={{ margin: "0 75px" }}
							src={battery1}
							alt=""
						/>
						<div>
							<p className="inverter-title">Deye Baterie RW-M6.1</p>
							<p>
								Profesionální baterie Deye RW-M6.1 s výkonem 6,14 kW je
								spolehlivým zdrojem energie na dlouhá léta. Nabízí robustnost a
								bezpečný provoz po dobu 10 let. Účinnost a technologické inovace
								společnosti Deye zaručují spolehlivost a vysoký výkon.
								Investujte do energie s baterií Deye RW-M6.1
							</p>
						</div>
					</div>
					<div className="divider"></div>
					<div className="inverter-container">
						<img width={400} src={battery2} alt="" />
						<div>
							<p className="inverter-title">Solax Triple Power T-BAT H 11.5</p>
							<p>
								Bateriový set Solax Triple Power Master Battery T-BAT H 11,5 kWh
								V2
							</p>
						</div>
					</div>
					<div className="divider"></div>
					<div className="inverter-container">
						<img
							width={400}
							src={
								"https://chisagess.com/wp-content/uploads/2024/07/CHISAGE-ESS-MOON16-G-Home-Battery-Pack-Product-Pictures-01.jpg"
							}
							alt=""
						/>
						<div>
							<p className="inverter-title">Chisage ESS MOON16-G</p>
							<p>
								• Nominální energie 16 kWh
								<br />• Vysoká kompatibilita měničů
								<br />• Podpora Bluetooth monitorování
								<br />• Bezpečná dobíjecí baterie LiFePO4
								<br />• LCD displej a podpora bluetooth připojení
								<br />• Podpora max. 15ks baterií paralelně
								<br />• Kolečka na spodní straně pro snadný pohyb
							</p>
						</div>
					</div>
				</div>
				<div className="components-container" id="panels">
					<div className="components-container__title">
						<a href="#panels" className="components__title">
							Panely
						</a>
					</div>
					<div className="inverter-container">
						<img width={400} src={pannel1} alt="" />
						<div>
							<p className="inverter-title">
								Jinko Tiger Neo N-type 60HL4-(V) 485 Wp
							</p>
							<p>
								Deye třífázový hybridní měnič, zahrnující modely
								SUN-5K-SG04LP3-EU, SUN-6K-SG04LP3-EU, SUN-8K-SG04LP3-EU,
								SUN-10K- SG04LP3-EU a SUN-12K-SG04LP3-EU, je sofistikované
								řešení pro řízení energie, navržené pro rezidenční i komerční
								využití v oblasti solární energie
							</p>
						</div>
					</div>
					<div className="divider"></div>
					<div className="inverter-container">
						<img width={400} src={pannel1} alt="" />
						<div>
							<p className="inverter-title">
								Jinko Tiger Neo N-type 54HL4R-B 440 Wp
							</p>
							<p>
								JINKO Tiger Neo N-type 440Wp Bifacial Full Black -
								JKM440N-54HL4R-BDB - výkon 440 Wp - Bifaciální - Celočerný rám
							</p>
						</div>
					</div>
					<div className="divider"></div>
					<div className="inverter-container">
						<img width={400} src={pannel1} alt="" />
						<div>
							<p className="inverter-title">Aiko Neostar 2S 445 Wp</p>
							<p>
								Fotovoltaický panel AIKO Neostar 2S, černý rám 30 mm (SVT 35
								565) 445 Wp-MAH54Mb, s maximálním výkonem 445 Wp
							</p>
						</div>
					</div>
				</div>
				<div className="components-container" id="optimizers">
					<div className="components-container__title">
						<a href="#optimizers" className="components__title">
							Optimizéry
						</a>
					</div>
					<div className="inverter-container">
						<img width={400} src={optimizer1} alt="" />
						<div>
							<p className="inverter-title">TIGO - TS4-A-S</p>
							<p>
								TS4-A-S (SAFETY) je pokročilé doplňkové řešení, které dodává
								lepší funkcionlitu standardním FV panelům pro vyšší
								spolehlivost.
							</p>
						</div>
					</div>
					<div className="divider"></div>
					<div className="inverter-container">
						<img width={400} src={optimizer2} alt="" />
						<div>
							<p className="inverter-title">
								Tigo TS4-A-O -výkonový optimizér max. 700 Wp
							</p>
							<p>
								Pro optimalizaci výroby energie v případě zastínění, monitoring
								na úrovni panelů a rapid shutdown (rychlé rozpojení) do 700 W.
							</p>
						</div>
					</div>
				</div>
				<GetInTouch />
			</div>
		</>
	);
};

export default Components;
