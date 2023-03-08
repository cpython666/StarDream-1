// import CodePage from '../views/CodePage.vue'
import AppList from '../components/AppList.vue'
import CodeList from '../components/CodeList.vue'
import DesignList from '../components/DesignList.vue'
import PlayList from '../components/PlayList.vue'
import { createRouter,createWebHashHistory} from 'vue-router'
  const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes: [
          { 
            path: '/', 
            component:AppList,
          },
          { 
            path: '/index', 
            component:AppList, 
          },
          { 
            path: '/code', 
            component:CodeList, 
          },
          { 
            path: '/design', 
            component:DesignList, 
          },
          { 
            path: '/Play', 
            component:PlayList, 
          },
      // 登陆成功后
      ], 
  })
  
export default router