import React from 'react';
import ReactDom from 'react-dom';
import { Route, Router, IndexRoute, hashHistory} from 'react-router';

import PageHome from './PageHome';
import PageComment from './PageComment';
import Main from './Main';
import Page404 from './Page404';
import PageNews from './PageNews';
import PageNewsOne from "./PageNewsOne";

ReactDom.render(
    <Router history={hashHistory} >
        <Route path="/" component={Main}>
            <IndexRoute component={PageHome} />
            <Route path="comments" component={PageComment} />
            <Route path="news" component={PageNews}>
                <Route path="/:newsId" component={PageNewsOne} />
            </Route>
            <Route path="*" component={Page404} />
        </Route>
    </Router>,
    document.getElementById('app')
);

