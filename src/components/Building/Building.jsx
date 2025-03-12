import "./Building.scss";

const Building = () => {
    function closeModal() {
        document.querySelector(".building").remove();
    }

    return (
        <div className="building">
            <p>Welcome to the company website FVE STAVBY s.r.o.</p>
            <p>Our website is under construction</p>
            <button className="building__btn" onClick={closeModal}>
                Click to close!
            </button>
        </div>
    );
};

export default Building;
