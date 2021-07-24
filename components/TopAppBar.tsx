import {MDCTopAppBar} from '@material/top-app-bar';

import React from 'react';
function TopAppBar(props: { pageTitle: String }) {

    // // Instantiation
    // const topAppBarElement = document.querySelector('.mdc-top-app-bar');
    // const topAppBar = new MDCTopAppBar(topAppBarElement as Element);

    return (
        <div>
            <header className="mdc-top-app-bar">
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
                <div className="mdc-top-app-bar__row">
                    <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
                        <button className="material-icons mdc-top-app-bar__navigation-icon mdc-icon-button"
                                aria-label="Open navigation menu">menu
                        </button>
                        <span className="mdc-top-app-bar__title">{props.pageTitle}</span>
                    </section>
                    <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" role="toolbar">
                        <button className="material-icons mdc-top-app-bar__action-item mdc-icon-button"
                                aria-label="Favorite">favorite
                        </button>
                        <button className="material-icons mdc-top-app-bar__action-item mdc-icon-button"
                                aria-label="Search">search
                        </button>
                        <button className="material-icons mdc-top-app-bar__action-item mdc-icon-button"
                                aria-label="Options">more_vert
                        </button>
                    </section>
                </div>
            </header>
        </div>
    );
}

export default TopAppBar;