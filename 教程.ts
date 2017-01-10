1、首先全局安装angular-cli，并创建项目

npm install -g angular-cli
ng new my-app
cd my-app
2、安装ng2-bootstrap和bootstrap

npm install ng2-bootstrap bootstrap --save
3、在主模块中导入，需要的模块（src/app/app.module.ts）

import { AlertModule } from 'ng2-bootstrap';
...

@NgModule({
   ...
   imports: [AlertModule.forRoot(), ... ],
    ... 
})
只要在模块总导入，不需要在组建中添加，很方便。

4、在angular-cli.json中配置样式文件

"styles": [
   "styles.css",
   "../node_modules/bootstrap/dist/css/bootstrap.min.css"
]
5、 在模板中调用 src/app/app.component.html

<alert type="success">hello</alert>
