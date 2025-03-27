import { useEffect } from "react";
import "./Stats.scss";

const Stats = () => {
    useEffect(() => {
        addEventListener("scroll", () => {
            const candlesWrapper = document.querySelector(".candles-wrapper");
            const candlesWrapperRect =
                candlesWrapper.getBoundingClientRect().bottom;
            if (candlesWrapperRect < window.innerHeight) {
                document.querySelectorAll(".candle").forEach((el) => {
                    el.style.animation =
                        "animateCandle 2s ease-in-out forwards";
                });
            }
        });
    });

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
                    ></div>
                    <div
                        className="candle"
                        data-month-l="Únor"
                        data-month-m="Úno"
                        data-month-s="Ú"
                        style={{
                            "--candle-height": "100px",
                        }}
                    ></div>
                    <div
                        className="candle"
                        data-month-l="Březen"
                        data-month-m="Bře"
                        data-month-s="B"
                        style={{
                            "--candle-height": "150px",
                        }}
                    ></div>
                    <div
                        className="candle"
                        data-month-l="Duben"
                        data-month-m="Dub"
                        data-month-s="D"
                        style={{
                            "--candle-height": "200px",
                        }}
                    ></div>
                    <div
                        className="candle"
                        data-month-l="Květen"
                        data-month-m="Kvě"
                        data-month-s="K"
                        style={{
                            "--candle-height": "300px",
                        }}
                    ></div>
                    <div
                        className="candle"
                        data-month-l="Červen"
                        data-month-m="Čer"
                        data-month-s="Č"
                        style={{
                            "--candle-height": "325px",
                        }}
                    ></div>
                    <div
                        className="candle"
                        data-month-l="Červenec"
                        data-month-m="Čer"
                        data-month-s="Č"
                        style={{
                            "--candle-height": "225px",
                        }}
                    ></div>
                    <div
                        className="candle"
                        data-month-l="Srpen"
                        data-month-m="Srp"
                        data-month-s="S"
                        style={{
                            "--candle-height": "150px",
                        }}
                    ></div>
                    <div
                        className="candle"
                        data-month-l="Září"
                        data-month-m="Zář"
                        data-month-s="Z"
                        style={{
                            "--candle-height": "125px",
                        }}
                    ></div>
                    <div
                        className="candle"
                        data-month-l="Říjen"
                        data-month-m="Říj"
                        data-month-s="Ř"
                        style={{
                            "--candle-height": "100px",
                        }}
                    ></div>
                    <div
                        className="candle"
                        data-month-l="Listopad"
                        data-month-m="Lis"
                        data-month-s="L"
                        style={{
                            "--candle-height": "50px",
                        }}
                    ></div>
                    <div
                        className="candle"
                        data-month-l="Prosinec"
                        data-month-m="Pro"
                        data-month-s="P"
                        style={{
                            "--candle-height": "25px",
                        }}
                    ></div>
                </div>
            </div>
        </>
    );
};

export default Stats;
