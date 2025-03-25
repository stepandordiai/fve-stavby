import "./PageTitle.scss";

const PageTitle = ({ title, img }) => {
    return (
        <>
            <div className="page-title">
                <p className="page-title__title">{title}</p>
                <img
                    className="page-title__img"
                    src={img}
                    alt=""
                    loading="lazy"
                />
            </div>
        </>
    );
};

export default PageTitle;
