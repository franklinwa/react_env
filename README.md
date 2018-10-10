…or create a new repository on the command line
 echo "# 111" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/franklinwa/111.git
git push -u origin master

…or push an existing repository from the command line
 git remote add origin https://github.com/franklinwa/111.git
git push -u origin master

# 如何布局react
https://zhuanlan.zhihu.com/p/39799393

index.js 自然不用说，属于项目入口的文件，所有的起点都在这里，统一做一些初始化工作，例如加载各种依赖、加载状态管理库等等



router.js 是一个单独的文件，这个文件确定了整个 React 应用的路由表，我会尽量想方设法的把所有的路由都放在这里进行统一的管理，这么做的好处极其明显：统一。（偷偷告诉你们，我会在项目中写一个 eslint 插件对 router 类似的关键词进行检查，如果定义超出了 router.js 的范围，那程序直接报错，无法编译）



controller 是一个目录，目录下装着各种各样的控制器文件，这些控制器文件对应到 DVA 和 rematch 之类的状态管理库就是所谓的 model，我个人认为 model 的叫法其实并不合适，而 controller 更为贴切？当然，叫什么随便你，这里不多做撕逼。



assets 公共资源文件。请注意公共二字我特别打上了重点，其原因是很多开发人员将组件级别的资源文件放置到了公共资源文件进行统一的管理，但是在实践中我并不认为这是一个特别好的选择。与组件强依赖的资源文件我认为和组件一起放置在一个文件夹内，能够更快、更容易的进行管理。只有通用的公共文件才会放在这里来。



pages 和 components 文件夹，前者放置的是页面以及页面强依赖的组件，例如注册页面 login，用户管理界面 user 等等。后者则放置的是公共组件。与公共资源文件一样，强依赖的组件就应该和其页面在同一个文件夹中去管理。



component 文件夹比较特殊，里面可能装着 button/select/card 等等组件
