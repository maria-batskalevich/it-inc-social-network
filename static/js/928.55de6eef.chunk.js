"use strict";(self.webpackChunkway_of_samurai=self.webpackChunkway_of_samurai||[]).push([[928],{4928:function(n,e,r){r.r(e),r.d(e,{default:function(){return N}});var t=r(5671),o=r(3144),s=r(136),i=r(5716),u=r(2791),a=r(364),l=r(1523),c=r(393),f="User_userPhoto__OFsYd",p=r(184),g=u.memo((function(n){var e=n.user,r=n.followingInProgress,t=n.follow,o=n.unfollow,s=n.isAuth;return(0,p.jsxs)("div",{children:[(0,p.jsxs)("span",{children:[(0,p.jsx)("div",{children:(0,p.jsx)(l.OL,{to:"/profile/".concat(e.id),children:(0,p.jsx)("img",{className:f,src:e.photos.small?e.photos.small:c,alt:"user avatar"})})}),(0,p.jsx)("div",{children:e.followed?(0,p.jsx)("button",{style:{cursor:"pointer"},disabled:!s||r.some((function(n){return n===e.id})),onClick:function(){return o(e.id)},children:"Unfollow"}):(0,p.jsx)("button",{style:{cursor:"pointer"},disabled:!s||r.some((function(n){return n===e.id})),onClick:function(){return t(e.id)},children:"Follow"})})]}),(0,p.jsx)("span",{children:(0,p.jsxs)("span",{children:[(0,p.jsx)("div",{children:e.name}),(0,p.jsx)("div",{children:e.status})]})})]})}));var h=r(181);function d(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var r=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=r){var t,o,s=[],i=!0,u=!1;try{for(r=r.call(n);!(i=(t=r.next()).done)&&(s.push(t.value),!e||s.length!==e);i=!0);}catch(a){u=!0,o=a}finally{try{i||null==r.return||r.return()}finally{if(u)throw o}}return s}}(n,e)||(0,h.Z)(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var P="Paginator_selectedPage__Nf8Yc",m="Paginator_page__UsXS-",w="Paginator_paginator__xYFJW",v="Paginator_btn__hBNNg",x=u.memo((function(n){for(var e=n.totalItemsCount,r=n.pageSize,t=n.onPageChange,o=n.currentPage,s=n.portionSize,i=d((0,u.useState)(1),2),a=i[0],l=i[1],c=Math.ceil(e/r),f=Math.ceil(c/s),g=(a-1)*s+1,h=a*s,x=[],j=1;j<=c;j++)x.push(j);return(0,p.jsxs)("div",{className:w,children:[a>1&&(0,p.jsx)("button",{onClick:function(){return l(a-1)},className:v,children:"<"}),x.filter((function(n){return n>=g&&n<=h})).map((function(n){return(0,p.jsx)("span",{onClick:function(){t(n)},className:o===n?P:m,children:n},n)})),f>a&&(0,p.jsx)("button",{onClick:function(){l(a+1)},className:v,children:">"})]})})),j=u.memo((function(n){var e=n.totalUsersCount,r=n.pageSize,t=n.onPageChanged,o=n.currentPage,s=n.users,i=n.followingInProgress,u=n.follow,a=n.unfollow,l=n.isAuth;return(0,p.jsxs)("div",{children:[(0,p.jsx)(x,{currentPage:o,onPageChange:t,pageSize:r,totalItemsCount:e,portionSize:10}),s.map((function(n){return(0,p.jsx)(g,{user:n,followingInProgress:i,follow:u,unfollow:a,isAuth:l},n.id)}))]})})),C=r(9263),b=r(6315),y=function(n){return n.usersPage.users},_=function(n){return n.usersPage.pageSize},S=function(n){return n.usersPage.totalUsersCount},U=function(n){return n.usersPage.currentPage},k=function(n){return n.usersPage.isFetching},z=function(n){return n.usersPage.followingInProgress},A=r(2347),I=function(n){(0,s.Z)(r,n);var e=(0,i.Z)(r);function r(){var n;(0,t.Z)(this,r);for(var o=arguments.length,s=new Array(o),i=0;i<o;i++)s[i]=arguments[i];return(n=e.call.apply(e,[this].concat(s))).onPageChanged=function(e){n.props.setCurrentPage(e),n.props.getUsers(e,n.props.pageSize)},n}return(0,o.Z)(r,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return(0,p.jsxs)(p.Fragment,{children:[this.props.isFetching?(0,p.jsx)(C.p,{}):null,(0,p.jsx)(j,{users:this.props.users,totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress,isAuth:this.props.isAuth})]})}}]),r}(u.PureComponent),N=(0,a.$j)((function(n){return{users:y(n),pageSize:_(n),totalUsersCount:S(n),currentPage:U(n),isFetching:k(n),followingInProgress:z(n),isAuth:(0,A.Jt)(n)}}),{follow:b.ZN,unfollow:b.fv,setCurrentPage:b.D4,getUsers:b.Rf})(I)},2347:function(n,e,r){r.d(e,{nR:function(){return t},Jt:function(){return o},sS:function(){return s}});var t=function(n){return n.auth.id},o=function(n){return n.auth.isAuth},s=function(n){return n.auth.captchaURL}},393:function(n,e,r){n.exports=r.p+"static/media/userAvatar.cb9d7bb0874b70e05e60.png"}}]);
//# sourceMappingURL=928.55de6eef.chunk.js.map