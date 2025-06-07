import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import PageTitle from "../../components/PageTitle/PageTitle";
import GetInTouch from "../../components/GetInTouch/GetInTouch";
import titleImg from "/img/6.jpg";
import "./Components.scss";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper/modules";

const Components = () => {
	const { t } = useTranslation();

	return (
		<>
			<Helmet>
				<title>FVE STAVBY | {t("components_title")}</title>
				<link rel="canonical" href="https://fvestavby.cz/components" />
			</Helmet>
			<main>
				<PageTitle
					title={t("components_title")}
					img={titleImg}
					linkPath={"/manuals"}
				/>
				<div className="components">
					<div className="components-container" id="invertors">
						<div className="components-container__title">
							<a href="#invertors" className="components__title">
								{t("components.section1")}
							</a>
						</div>
						<div className="inverter-container">
							<div className="swiper-container">
								<Swiper
									navigation={true}
									pagination={true}
									loop={true}
									modules={[Navigation, Pagination]}
								>
									<SwiperSlide>
										<img
											width={500}
											src={
												"https://deye.com/wp-content/uploads/2024/06/sun-5_6_8_10_12k-sg04lp3-eu-01.jpg"
											}
											loading="lazy"
											alt=""
										/>
									</SwiperSlide>
									<SwiperSlide>
										<img
											width={500}
											src={
												"https://deye.com/wp-content/uploads/2024/06/sun-5_6_8_10_12k-sg04lp3-eu-02.jpg"
											}
											loading="lazy"
											alt=""
										/>
									</SwiperSlide>
									<SwiperSlide>
										<img
											width={500}
											src={
												"https://deye.com/wp-content/uploads/2024/06/sun-5_6_8_10_12k-sg04lp3-eu-03.jpg"
											}
											loading="lazy"
											alt=""
										/>
									</SwiperSlide>
								</Swiper>
							</div>
							<div>
								<p className="inverter-title">
									Deye SUN-5/6/8/10/12K-SG04LP3-EU
								</p>
								<ul className="component-list">
									<li>
										48V nízkonapěťová baterie, konstrukce s transformátorovou
										izolací
									</li>
									<li>6 časových období pro nabíjení/vybíjení baterie</li>
									<li>Maximální nabíjecí/vybíjecí proud 240 A</li>
									<li>
										Stejnosměrné a střídavé propojení pro modernizaci
										stávajícího solárního systému
									</li>
									<li>Podpora ukládání energie z dieselového generátoru</li>
									<li>100% nesymetrický výstup, každá fáze</li>
									<li>max. výstup až do 50 % jmenovitého výkonu</li>
									<li>
										Max. 10 ks paralelně pro napájení ze sítě i mimo síť provoz
									</li>
									<li>podpora paralelního provozu více baterií</li>
								</ul>
							</div>
						</div>
						<div className="divider"></div>
						<div className="inverter-container">
							<div className="swiper-container">
								<Swiper
									navigation={true}
									pagination={true}
									loop={true}
									modules={[Navigation, Pagination]}
								>
									<SwiperSlide>
										<img
											style={{ padding: 100 }}
											width={500}
											src={
												"https://www.solaxpower.com/uploads/image/20230620/15/energy-storage-inverter-x3-hybrid-g4-1.webp"
											}
											loading="lazy"
											alt=""
										/>
									</SwiperSlide>
									<SwiperSlide>
										<img
											width={500}
											style={{ padding: 100 }}
											src={
												"https://www.solaxpower.com/uploads/image/20230620/15/energy-storage-inverter-x3-hybrid-g4-2.webp"
											}
											loading="lazy"
											alt=""
										/>
									</SwiperSlide>
									<SwiperSlide>
										<img
											width={500}
											style={{ padding: 100 }}
											src={
												"https://www.solaxpower.com/uploads/image/20230620/15/energy-storage-inverter-x3-hybrid-g4-3.webp"
											}
											loading="lazy"
											alt=""
										/>
									</SwiperSlide>
								</Swiper>
							</div>

							<div>
								<p className="inverter-title">
									Solax Power X3-HYBRID-5.0/6.0/8.0/10.0/12.0/15.0-D/M
								</p>
								<ul className="component-list">
									<li>Typ: hybridní</li>
									<li>Výstupní výkon: 11000 W</li>
									<li>S WiFi: ano</li>
									<li>S displejem: ano</li>
									<li>Max. 150% předimenzováného FV výkonu</li>
									<li>VPP funkce</li>
									<li>Max. 30A nabíjení, vybíjecí proud</li>
									<li>
										Funkce aktualizace ovládají vzdálené jednotky, komunikační
										rozhranní pro externí ovládaní
									</li>
									<li>Rychlá instalace (30 min., s matebox)</li>
									<li>Dálkové řízení střídače & upgrad</li>
									<li>
										Podpora vyššího výkonu paralelního zapojení On & Off grid
										střídačů
									</li>
									<li>Pracovní telplota: -35 °C – 60 °C</li>
									<li>Rychlé nabíjení a vysoký výkon</li>
								</ul>
							</div>
						</div>
						<div className="divider"></div>
						<div className="inverter-container">
							<div className="swiper-container">
								<Swiper
									navigation={true}
									pagination={true}
									loop={true}
									modules={[Navigation, Pagination]}
								>
									<SwiperSlide>
										<img
											width={500}
											src={
												"https://chisagess.com/wp-content/uploads/2023/10/CHISAGE-ESS-Mars-5-14G2-LE-Product-Pictures-01.jpg"
											}
											loading="lazy"
											alt=""
										/>
									</SwiperSlide>
									<SwiperSlide>
										<img
											width={500}
											src={
												"https://chisagess.com/wp-content/uploads/2023/10/CHISAGE-ESS-Mars-5-14G2-LE-Product-Pictures-02.jpg"
											}
											loading="lazy"
											alt=""
										/>
									</SwiperSlide>
									<SwiperSlide>
										<img
											width={500}
											src={
												"https://chisagess.com/wp-content/uploads/2023/10/CHISAGE-ESS-Mars-5-14G2-LE-Product-Pictures-03.jpg"
											}
											loading="lazy"
											alt=""
										/>
									</SwiperSlide>
									<SwiperSlide>
										<img
											width={500}
											src={
												"https://chisagess.com/wp-content/uploads/2023/10/CHISAGE-ESS-Mars-5-14G2-LE-Product-Pictures-04.jpg"
											}
											loading="lazy"
											alt=""
										/>
									</SwiperSlide>
									<SwiperSlide>
										<img
											width={500}
											src={
												"https://chisagess.com/wp-content/uploads/2023/10/CHISAGE-ESS-Mars-5-14G2-LE-Product-Pictures-05.jpg"
											}
											loading="lazy"
											alt=""
										/>
									</SwiperSlide>
									<SwiperSlide>
										<img
											width={500}
											src={
												"https://chisagess.com/wp-content/uploads/2023/10/CHISAGE-ESS-Mars-5-14G2-LE-Product-Pictures-07.jpg"
											}
											loading="lazy"
											alt=""
										/>
									</SwiperSlide>
									<SwiperSlide>
										<img
											width={500}
											src={
												"https://chisagess.com/wp-content/uploads/2023/10/CHISAGE-ESS-Mars-5-14G2-LE-Product-Pictures-08.jpg"
											}
											loading="lazy"
											alt=""
										/>
									</SwiperSlide>
								</Swiper>
							</div>

							<div>
								<p className="inverter-title">Chisage ESS MARS-5-14G2-LE</p>
								<ul className="component-list">
									<li>Jmenovitý výstupní výkon 14 kW</li>
									<li>Volitelná detekce poruchy ARC</li>
									<li>Podpora zapnutí/vypnutí režimu GRID, výstup EPS</li>
									<li>Podpora ukládání energie z dieselového generátoru</li>
									<li>Nezávislý AC vstupní port pro dieselový generátor</li>
									<li>20 PCS invertorů paralelně pro provoz mimo síť</li>
									<li>
										Barevný 7palcový dotykový LCD displej, stupeň krytí IP65
									</li>
									<li>
										Podpora paralelního připojení různých výkonových měničů
									</li>
									<li>
										Podpora nabíjení/vybíjení baterie podle nastavení času
									</li>
									<li>
										100% nesymetrický výstup, každá fáze max. výstup až 50%
										jmenovitého výkonu
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="components-container" id="connectors">
						<div className="components-container__title">
							<a href="#connectors" className="components__title">
								{t("components.section2")}
							</a>
						</div>
						<div className="inverter-container">
							<div className="swiper-container">
								<Swiper
									navigation={true}
									pagination={true}
									loop={true}
									modules={[Navigation, Pagination]}
								>
									<SwiperSlide>
										<img
											width={500}
											src={
												"https://cdn.myshoptet.com/usr/www.mobler.cz/user/shop/big/328066-1_snimek-obrazovky-2024-05-31-130533-removebg-preview.png?6659af7b"
											}
											loading="lazy"
											alt=""
										/>
									</SwiperSlide>
									<SwiperSlide>
										<img
											width={500}
											src={
												"https://cdn.myshoptet.com/usr/www.mobler.cz/user/shop/big/328066_snimek-obrazovky-2024-05-31-130658-removebg-preview.png?6659af79"
											}
											loading="lazy"
											alt=""
										/>
									</SwiperSlide>
								</Swiper>
							</div>

							<div>
								<p className="inverter-title">Deye Baterie RW-M6.1</p>
								<ul className="component-list">
									<li>Kapacita: 120 Ah</li>
									<li>Energie: 6,14 kWh</li>
									<li>
										Jmenovitý DC výkon: Špičkový výkon (2 minuty, 25℃) 150 kW
									</li>
									<li>Rozměry : 510 mm x 740 mm x 145 mm (bez základny)</li>
									<li>Hmotnost: 58 kg</li>
									<li>
										Provozní teplota: Nabíjení: 0-55℃ / Vybíjení: -20℃-55℃
									</li>
									<li>Skladovací teplota: 0℃-35℃</li>
									<li>Vlhkost: 5%-95%</li>
									<li>Záruka : 10 let</li>
									<li>Průtok energie: 20 MWh při 70% EOL (konec životnosti)</li>
									<li>
										Certifikace: UN38.3, IEC62619, CE, CEI 0-21, VDE2510-50
									</li>
									<li>stupeň ochrany: IP65</li>
								</ul>
							</div>
						</div>
						<div className="divider"></div>
						<div className="inverter-container">
							<div className="swiper-container">
								<Swiper
									navigation={true}
									pagination={true}
									loop={true}
									modules={[Navigation, Pagination]}
								>
									<SwiperSlide>
										<img
											style={{ padding: 100 }}
											width={500}
											src={
												"https://www.svet-svitidel.cz/triple-power-baterie-solax-t58-master-unit-5-8-kwh-v1-img-sm9962-fd-2.webp"
											}
											loading="lazy"
											alt=""
										/>
									</SwiperSlide>
									<SwiperSlide>
										<img
											width={500}
											style={{ padding: 100 }}
											src={
												"https://img-cdn.heureka.group/v1/647b8c4d-5b53-4bd9-afba-6832d79195ac.jpg?width=2000&height=2000&fit=upsize"
											}
											loading="lazy"
											alt=""
										/>
									</SwiperSlide>
								</Swiper>
							</div>

							<div>
								<p className="inverter-title">
									Solax Triple Power T-BAT H 11.5
								</p>
								<ul className="component-list">
									<li>Jmenovité napětí 115,2 DC</li>
									<li>Nominální nabíjecí / vybíjecí proud 35A</li>
									<li>Maximální nabíjecí / vybíjecí proud 35A</li>
									<li>Kapacita 5,8 kWh</li>
									<li>Použitelná kapacita 5,22 kWh (90% DoD)</li>
									<li>
										Komunikační rozhraní RS485 baterie-BMS, CAN-BUS
										systém-střídač
									</li>
									<li>Integrovaná BMS</li>
									<li>Rozsah pracovních teplot 0°C až 55°C</li>
									<li>Stupeň krytí IP55</li>
									<li>Životnost {">"}6000 cyklů při 90% DoD</li>
									<li>Rozměry 474 x 193 x 708mm</li>
									<li>Hmotnost 72 kg</li>
									<li>Počet modulů 1x master + max. 3x slave</li>
									<li>Záruka 10 let</li>
								</ul>
							</div>
						</div>
						<div className="divider"></div>
						<div className="inverter-container">
							<div className="swiper-container">
								<Swiper
									navigation={true}
									pagination={true}
									loop={true}
									modules={[Navigation, Pagination]}
								>
									<SwiperSlide>
										<img
											width={500}
											src={
												"https://chisagess.com/wp-content/uploads/2024/07/CHISAGE-ESS-MOON16-G-Home-Battery-Pack-Product-Pictures-01.jpg"
											}
											loading="lazy"
											alt=""
										/>
									</SwiperSlide>
									<SwiperSlide>
										<img
											width={500}
											src={
												"https://chisagess.com/wp-content/uploads/2024/07/CHISAGE-ESS-MOON16-G-Home-Battery-Pack-Product-Pictures-02.jpg"
											}
											loading="lazy"
											alt=""
										/>
									</SwiperSlide>
									<SwiperSlide>
										<img
											width={500}
											src={
												"https://chisagess.com/wp-content/uploads/2024/07/CHISAGE-ESS-MOON16-G-Home-Battery-Pack-Product-Pictures-03.jpg"
											}
											loading="lazy"
											alt=""
										/>
									</SwiperSlide>
								</Swiper>
							</div>
							<div>
								<p className="inverter-title">Chisage ESS MOON16-G Pro</p>
								<ul className="component-list">
									<li>Nominální energie 16 kWh</li>
									<li>Vysoká kompatibilita měničů</li>
									<li>Podpora Bluetooth monitorování</li>
									<li>Bezpečná dobíjecí baterie LiFePO4</li>
									<li>LCD displej a podpora bluetooth připojení</li>
									<li>Podpora max. 15ks baterií paralelně</li>
									<li>Kolečka na spodní straně pro snadný pohyb</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="components-container" id="panels">
						<div className="components-container__title">
							<a href="#panels" className="components__title">
								{t("components.section3")}
							</a>
						</div>
						<div className="inverter-container">
							<img
								width={500}
								src={
									"https://cdn.myshoptet.com/usr/www.mobler.cz/user/shop/big/326833_jinko-tiger-neo-n-type-485w-black-frame-22-47--jkm485n-60hl4-v.jpg?662ce7d7"
								}
								alt=""
							/>
							<div>
								<p className="inverter-title">
									Jinko Tiger Neo N-type 60HL4-(V) 485 Wp
								</p>
								<ul className="component-list">
									<li>
										Technologie N-Type umožňuje vyšší účinnost, nižší degradaci
										a delší životnost panelů
									</li>
									<li>
										Solární článek s více přípojnicemi poskytuje nejnovější
										solární technologii pro zlepšení účinnosti a zároveň vypadá
										skvěle
									</li>
									<li>Účinnost konverze modulů až 22,47 %.</li>
									<li>
										Hot 2.0 technologie s lepší spolehlivostí a nižším LID/LETID
									</li>
									<li>
										Schopnost odolat extrémním povětrnostním podmínkám:
										Certifikováno, aby vydrželo silné zatížení větrem (2400
										Pascal)
									</li>
									<li>
										Nízká degradace, s roční mírou degradace pouze 0,4 % během
										30 let po prvním roce.
									</li>
									<li>
										12letá záruka na výrobek | 30letá záruka na lineární
										napájení
									</li>
								</ul>
							</div>
						</div>
						<div className="divider"></div>
						<div className="inverter-container">
							<img
								width={500}
								src={
									"https://cdn.myshoptet.com/usr/www.mobler.cz/user/shop/big/315241_snimek-obrazovky-2023-05-24-224043.jpg?65d3511a"
								}
								alt=""
							/>
							<div>
								<p className="inverter-title">
									Jinko Tiger Neo N-type 54HL4R-B 440 Wp
								</p>
								<ul className="component-list">
									<li>
										Solární panely z této produktové řady výrobce Jinko Solar
										využívají články s více sběrnicemi pro vyšší účinnost
									</li>
									<li>
										Zároveň jsou díky použité technologii vizuálně
										atraktivnější, a proto se skvěle hodí na střechy rodinných
										domů
									</li>
									<li>Panely jsou složené z monokrystalických článků typu N</li>
									<li>
										Optimalizovaná elektrická konstrukce a nižší provozní proud
										pro snížení ztrát v horkých místech
									</li>
									<li>
										Panely Jinko Solar mají rozvinutou ochranu proti stárnutí
										článků, které snižuje jejich výkonost
									</li>
									<li>
										Odolnost proti povětrnostním vlivům: panely mají certifikaci
										pro zatížení sněhem (5400 Pa) a větrem (2400 Pa)
									</li>
								</ul>
							</div>
						</div>
						<div className="divider"></div>
						<div className="inverter-container">
							<img
								width={500}
								src={
									"https://cdn.myshoptet.com/usr/www.mobler.cz/user/shop/big/315178-1_aik0-445wp-full-black-22-8--svt35029-aik0-a445-mah54db.jpg?65e593af"
								}
								alt=""
							/>
							<div>
								<p className="inverter-title">Aiko Neostar 2S 445 Wp</p>
								<ul className="component-list">
									<li>Výkon: 445 W</li>
									<li>Napětí naprázdno (Voc): 40,59 V</li>
									<li>Zkratový proud (Isc): 14,02 A</li>
									<li>Jmenovité napětí (Vmp): 33,60</li>
									<li>Jmenovitý proud (Imp): 13,25 A</li>
									<li>Maximální účinnost: 22,30 %</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="components-container" id="optimizers">
						<div className="components-container__title">
							<a href="#optimizers" className="components__title">
								{t("components.section4")}
							</a>
						</div>
						<div className="inverter-container">
							<img
								width={500}
								src={
									"https://cdn.myshoptet.com/usr/eshop.helion.cz/user/shop/big/6510_tigo-ts4-a-s-monitoring-a-rapid-shutdown-max--700w.png?64f137e2"
								}
								alt=""
							/>
							<div>
								<p className="inverter-title">TIGO - TS4-A-S</p>
								<ul className="component-list">
									<li>
										Rozměry: 140 mm (délka) x 139 mm (šířka) x 23 mm (hloubka)
									</li>
									<li>Hmotnost: 0,5 kg</li>
									<li>Konektory: MC4</li>
									<li>Komunikace: Bezdrátová komunikace s TAP a CCA</li>
								</ul>
							</div>
						</div>
						<div className="divider"></div>
						<div className="inverter-container">
							<img
								width={500}
								src={
									"https://www.eshopelektronika.cz/data/images_content/1944/25636-O-vykonovy-optimizer-tigo-ts4-a-o-700-wp-fotovoltaika-skladem.JPG"
								}
								alt=""
							/>
							<div>
								<p className="inverter-title">
									Tigo TS4-A-O -výkonový optimizér max. 700 Wp
								</p>
								<ul className="component-list">
									<li>Maximální proud (IMP / ISC): 15 A / 20 A</li>
									<li>Rozsah vstupního napětí (VMP): 16 - 80 V</li>
									<li>
										Maximální systémové napětí (VMAX): 1000 V / 1500 V (dle
										modelu)
									</li>
									<li>Maximální výstupní proud (IMAX): 15 A</li>
									<li>Maximální výstupní výkon (PMAX): 700 W</li>
									<li>Maximální hodnota pojistky: 25 A</li>
									<li>Maximální účinnost: 99,6 %</li>
									<li>Rychlé vypnutí: {"<"}30 sekund</li>
									<li>Komunikace: Bezdrátová</li>
									<li>PVRSE kompatibilita: UL 1741 PVRSE/PVRSS</li>
								</ul>
							</div>
						</div>
					</div>
					<GetInTouch />
				</div>
			</main>
		</>
	);
};

export default Components;
