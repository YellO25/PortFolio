import React from 'react';
import Activity from '../Activity';
import '../../Styles/List.css';
import datas from '../../data';

const List = () =>
{
    return (
        <div className="list-container">
            <div className="list-text">
                <h1 className="List-title">
                    Nos Objectifs
                </h1>
                <p className="list-des">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem aspernatur tenetur ab,
                    culpa adipisci rem molestias at incidunt aut voluptas, quis suscipit id vero labore aperiam
                    repudiandae repellat obcaecati corrupti consectetur. Beatae saepe perferendis aliquid
                    deserunt voluptatem! Excepturi vero veritatis, id rerum odio,
                    harum debitis, possimus atque exercitationem doloremque aspernatur.
                </p>
            </div>
            <div className="list-item">
                {
                    datas.map(act => <Activity
                        key={act.id}
                        image={act.image}
                        link={act.link}
                        icon={act.icon}
                        txt={act.txt}
                    />)
                }

            </div>
        </div>
    );
}; export default List;
