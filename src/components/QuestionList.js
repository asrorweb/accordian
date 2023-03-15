import React, { useState } from "react";

const QuestionList = ({ posts }) => {
    const [click, setText] = useState(null);

    const clickIcon = (index) => {
        if (click == index) {
            setText(null);
        } else {
            setText(index);
        }
    };

    return (
        <div className="list_box">
            <h1 className="title">Questions</h1>

            {posts.map((data, i) => (
                <div
                    onClick={() => clickIcon(i)}
                    className="list"
                    key={data.id}
                >
                    <div className="header__lsit">
                        <h2 className="list__title">{data.title}</h2>
                        <i
                            className={
                                click == i
                                    ? "fa-solid fa-chevron-right chevron"
                                    : "fa-solid fa-chevron-right "
                            }
                        ></i>
                    </div>
                    <p
                        className={
                            click == i
                                ? "list__descr list__descr-active"
                                : "list__descr"
                        }
                    >
                        {data.text}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default QuestionList;
