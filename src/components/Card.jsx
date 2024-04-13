import { useState } from "react";

const Card = () => {
  const [allChecked, setAllChecked] = useState(false);
  const [page1Checked, setPage1Checked] = useState(false);
  const [page2Checked, setPage2Checked] = useState(false);
  const [page3Checked, setPage3Checked] = useState(false);
  const [page4Checked, setPage4Checked] = useState(false);

  const handleAllPagesChange = () => {
    setAllChecked(!allChecked);
    setPage1Checked(!allChecked);
    setPage2Checked(!allChecked);
    setPage3Checked(!allChecked);
    setPage4Checked(!allChecked);
  };

  const handleSinglePageChange = () => {
    if (page1Checked && page2Checked && page3Checked && page4Checked) {
      setAllChecked(true);
    } else {
      setAllChecked(false);
    }
  };

  const handleDoubleClick = (page) => {
    switch (page) {
      case "page1":
        setPage1Checked(!page1Checked);
        break;
      case "page2":
        setPage2Checked(!page2Checked);
        break;
      case "page3":
        setPage3Checked(!page3Checked);
        break;
      case "page4":
        setPage4Checked(!page4Checked);
        break;
      default:
        break;
    }
    handleSinglePageChange();
  };

  return (
    <div className="container">
      <div className="card shadow p-3 mb-5 rounded">
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <p>All pages</p>
            <input
              type="checkbox"
              className="bigger-checkbox"
              checked={allChecked}
              onChange={handleAllPagesChange}
            />
          </div>
          <hr />
          <div
            data-bs-spy="scroll"
            data-bs-smooth-scroll="true"
            className="scrollspy-example"
            tabIndex="0"
          >
            <div
              className={`d-flex justify-content-between page ${
                page1Checked ? "blue-hover" : ""
              }`}
              onDoubleClick={() => handleDoubleClick("page1")}
            >
              <p>Page 1</p>
              <input
                type="checkbox"
                className="bigger-checkbox"
                checked={page1Checked}
                onChange={() => {
                  setPage1Checked(!page1Checked);
                  handleSinglePageChange();
                }}
              />
            </div>
            <div
              className={`d-flex justify-content-between page ${
                page2Checked ? "blue-hover" : ""
              }`}
              onDoubleClick={() => handleDoubleClick("page2")}
            >
              <p>Page 2</p>
              <input
                type="checkbox"
                className="bigger-checkbox"
                checked={page2Checked}
                onChange={() => {
                  setPage2Checked(!page2Checked);
                  handleSinglePageChange();
                }}
              />
            </div>
            <div
              className={`d-flex justify-content-between page ${
                page3Checked ? "blue-hover" : ""
              }`}
              onDoubleClick={() => handleDoubleClick("page3")}
            >
              <p>Page 3</p>
              <input
                type="checkbox"
                className="bigger-checkbox"
                checked={page3Checked}
                onChange={() => {
                  setPage3Checked(!page3Checked);
                  handleSinglePageChange();
                }}
              />
            </div>
            <div
              className={`d-flex justify-content-between page ${
                page4Checked ? "blue-hover" : ""
              }`}
              onDoubleClick={() => handleDoubleClick("page4")}
            >
              <p>Page 4</p>
              <input
                type="checkbox"
                className="bigger-checkbox"
                checked={page4Checked}
                onChange={() => {
                  setPage4Checked(!page4Checked);
                  handleSinglePageChange();
                }}
              />
            </div>
          </div>
          <hr />
          <div className="d-grid gap-2 d-md-block">
            <button className="btn btn-warning button" type="button">
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
