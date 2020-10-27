import VueRouter from 'vue-router';
import discover from '../components/discover/discover.vue';
import toplist from '../components/toplist/toplist.vue';
import discoverchild from '../components/discoverchild/discoverchild.vue';
import mymusic from '../components/mymusic/mymusic.vue';
import friend from '../components/friend/friend.vue';
import downloadapp from '../components/downloadapp/downloadapp.vue';
import tuijian from '../components/tuijian/tuijian.vue';

import error404 from '../components/error404/error404.vue';
let router = new VueRouter({
    routes:[
        {
            path: '/',
            component: discover,
            redirect: 'discover',
            children: [
                {
                    path:'discover',
                    component: discoverchild
                },
                {
                    path:'discover/playlist',
                    component: tuijian
                },
                {
                    path: 'discover/toplist',
                    component: toplist
                }
            ]
        },
        {
            path:'/my/',
            component: mymusic
        },
        {
            path:'/friend',
            component: friend
        },
        {
            path:'/download',
            component: downloadapp
        },
        {
            path:'*',
            component: error404
        }
    ]
})
export default router