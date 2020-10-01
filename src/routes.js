import React from "react";
import { Redirect } from "react-router-dom";
// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import BlogOverview from "./views/BlogOverview";
import UserProfileLite from "./views/UserProfileLite";
import AddNewPost from "./views/AddNewPost";
import Errors from "./views/Errors";
import ComponentsOverview from "./views/ComponentsOverview";
import Tables from "./views/Tables";
import BlogPosts from "./views/BlogPosts";
import ChildList from "./components/child/child-list"
import ChildAdd from "./components/child/child-add"
import ChildUpdate from "./components/child/child-update"

import Reserver from "./components/reserver/reserver"



export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/blog-overview" />
  },
  {
    path: "/blog-overview",
    layout: DefaultLayout,
    component: BlogOverview
  },
  {
    path: "/user-profile-lite",
    layout: DefaultLayout,
    component: ChildAdd
  },
  {
    path: "/add-new-post",
    layout: DefaultLayout,
    component: AddNewPost
  },
  {
    path: "/errors",
    layout: DefaultLayout,
    component: Errors
  },
  {
    path: "/components-overview",
    layout: DefaultLayout,
    component: ComponentsOverview
  },
  {
    path: "/tables",
    layout: DefaultLayout,
    component: Tables
  },
  {
    path: "/blog-posts",
    layout: DefaultLayout,
    component: BlogPosts
  },
  {
    path: "/childs",
    layout: DefaultLayout,
    component: ChildList
  },
  {
    path: "/child-update",
    layout: DefaultLayout,
    component: ChildUpdate
  },
  {
    path: "/child-add",
    layout: DefaultLayout,
    component: ChildAdd
  },
  {
    path: "/reserver",
    layout: DefaultLayout,
    component: Reserver
  }
  
];