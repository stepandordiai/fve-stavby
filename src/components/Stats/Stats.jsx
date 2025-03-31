import { useEffect } from "react";
import "./Stats.scss";

const Stats = () => {
    useEffect(() => {
        let interval = 1000;
        const candlesWrapper = document.querySelector(".candles-wrapper");

        if (candlesWrapper) {
            document.querySelectorAll(".candle").forEach((el) => {
                let isActivated = false;
                document.addEventListener("scroll", () => {
                    const candlesWrapperRect =
                        candlesWrapper.getBoundingClientRect().bottom;
                    if (candlesWrapperRect < window.innerHeight) {
                        el.style.animation =
                            "animateCandle 4s ease-in-out forwards";
                        if (!isActivated) {
                            let startValue = 0;
                            let duration = Math.floor(
                                interval / el.dataset.stats
                            );
                            function start() {
                                let counter = setTimeout(() => {
                                    startValue += 1;
                                    el.dataset.value = startValue + "kW";
                                    // duration += 0.5;
                                    if (startValue == el.dataset.stats) {
                                        clearTimeout(counter);
                                    } else {
                                        start();
                                    }
                                }, duration);
                            }
                            start();
                        }
                        isActivated = true;
                    }
                });
            });
        }
    }, []);

    return (
        <>
            <h2 className="stats__title">Odhadovaná energie za měsíc</h2>
            <div className="stats">
                <div className="candles-wrapper">
                    <div
                        className="candle"
                        data-month-l="Leden"
                        data-month-m="Led"
                        data-month-s="L"
                        style={{
                            "--candle-height": "50px",
                        }}
                        data-value="420kW"
                        data-stats="420"
                    ></div>
                    <div
                        className="candle"
                        data-month-l="Únor"
                        data-month-m="Úno"
                        data-month-s="Ú"
                        style={{
                            "--candle-height": "100px",
                        }}
                        data-value="610kW"
                        data-stats="610"
                    ></div>
                    <div
                        className="candle"
                        data-month-l="Březen"
                        data-month-m="Bře"
                        data-month-s="B"
                        style={{
                            "--candle-height": "150px",
                        }}
                        data-value="980kW"
                        data-stats="980"
                    ></div>
                    <div
                        className="candle"
                        data-month-l="Duben"
                        data-month-m="Dub"
                        data-month-s="D"
                        style={{
                            "--candle-height": "200px",
                        }}
                        data-value="1220kW"
                        data-stats="1220"
                    ></div>
                    <div
                        className="candle"
                        data-month-l="Květen"
                        data-month-m="Kvě"
                        data-month-s="K"
                        style={{
                            "--candle-height": "300px",
                        }}
                        data-value="1480kW"
                        data-stats="1480"
                    ></div>
                    <div
                        className="candle"
                        data-month-l="Červen"
                        data-month-m="Čer"
                        data-month-s="Č"
                        style={{
                            "--candle-height": "325px",
                        }}
                        data-value="1380kW"
                        data-stats="1380"
                    ></div>
                    <div
                        className="candle"
                        data-month-l="Červenec"
                        data-month-m="Čer"
                        data-month-s="Č"
                        style={{
                            "--candle-height": "225px",
                        }}
                        data-value="1570kW"
                        data-stats="1570"
                    ></div>
                    <div
                        className="candle"
                        data-month-l="Srpen"
                        data-month-m="Srp"
                        data-month-s="S"
                        style={{
                            "--candle-height": "150px",
                        }}
                        data-value="1440kW"
                        data-stats="1440"
                    ></div>
                    <div
                        className="candle"
                        data-month-l="Září"
                        data-month-m="Zář"
                        data-month-s="Z"
                        style={{
                            "--candle-height": "125px",
                        }}
                        data-value="1080kW"
                        data-stats="1080"
                    ></div>
                    <div
                        className="candle"
                        data-month-l="Říjen"
                        data-month-m="Říj"
                        data-month-s="Ř"
                        style={{
                            "--candle-height": "100px",
                        }}
                        data-value="890kW"
                        data-stats="890"
                    ></div>
                    <div
                        className="candle"
                        data-month-l="Listopad"
                        data-month-m="Lis"
                        data-month-s="L"
                        style={{
                            "--candle-height": "50px",
                        }}
                        data-value="390kW"
                        data-stats="390"
                    ></div>
                    <div
                        className="candle"
                        data-month-l="Prosinec"
                        data-month-m="Pro"
                        data-month-s="P"
                        style={{
                            "--candle-height": "25px",
                        }}
                        data-value="310kW"
                        data-stats="310"
                    ></div>
                </div>
            </div>
        </>
    );
};

export default Stats;
