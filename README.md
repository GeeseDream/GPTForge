# GoForge GPTs Welcome

This repository is dedicated to storing and managing various GPTs, created and maintained by GeeseDream. Each GPT is a customized version of ChatGPT, designed to specific use cases, with unique features and capabilities that make them suitable for a broad range of tasks. The GeeseDream team continually works on developing and updating these GPTs, ensuring they are always at the cutting edge of technological advancement.

# GeeseDream/GoForge 项目结构

## src/
源代码目录，包含React应用的所有开发文件。

### components/
存放React组件的目录。

- **AnimatedButton.js**
  - 一个利用`framer-motion`库实现的动画按钮组件。
  - 在用户交互时显示缩放动画。

- **ThemeSwitchButton.js**
  - 用于切换应用主题（明亮模式与暗黑模式）的按钮组件。
  - 利用`ThemeContext`来获取和设置当前的主题。

### context/
存放React上下文（Context）相关文件的目录。

- **ThemeContext.js**
  - 定义了一个`ThemeContext`用于跨组件共享当前的主题（明亮或暗黑）。
  - 包含`ThemeProvider`组件，用于包裹应用的根组件，以便下层组件能够访问和修改主题状态。

### pages/
存放应用页面组件的目录。

- **Home.js**
  - 应用的首页组件。
- **Demo.js**
  - 展示一些Demo功能的页面。
- **CaseStudies.js**
  - 展示案例研究的页面。

### App.css
定义应用全局样式的CSS文件。

### App.js
应用的根组件文件，配置路由并渲染页面组件。

### index.css
定义HTML根元素及全局样式的CSS文件。

### index.js
应用的入口文件，渲染`App`组件。

## package.json
定义项目依赖、脚本和配置信息的文件。

## README.md
项目的说明文件，介绍项目信息和使用说明。
