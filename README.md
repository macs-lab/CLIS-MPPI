# CLIS-MPPI · CDC 2026 project page

Project website for **CLIS-MPPI: Closed-Loop Model Predictive Path Integral Control With Initial-State Sampling Under Execution Delay**, by **Zidong Liu and Xu Chen**, University of Washington.

Expected GitHub Pages URL: https://macs-lab.github.io/CLIS-MPPI/

The page is plain HTML, CSS, and JavaScript. There are no dependencies, installation commands, build steps, or tracking scripts. Content and figures are based on the supplied final manuscript. There is intentionally no Code button.

## 修改 Paper、arXiv 和视频链接

只需编辑 **`static/js/config.js`**：

```js
window.CLIS_CONFIG = Object.freeze({
  paperUrl: "./static/pdfs/paper.pdf", // 可替换成 arXiv、IEEE 或公开 PDF 的完整 https:// 链接
  arxivUrl: "",                      // 例如 https://arxiv.org/abs/实际编号
  videoUrl: "",                      // 例如 YouTube 视频的完整 https:// 链接
  videoFile: ""                      // 或使用 ./static/videos/experiment.mp4
});
```

- **Paper**：目前可直接打开随网站保存的论文 PDF。修改 `paperUrl` 会同时更新首屏 Paper 按钮、Paper 区块按钮和论文缩略图链接。没有 JavaScript 时仍使用本地 PDF。
- **arXiv**：空链接时显示 Soon，不能跳转；填写后自动启用并移除 Soon。
- **Demo / Video**：没有视频时，Demo 按钮定位到首屏实验图。填写 `videoUrl` 后按钮变为 Video 并打开外部视频；填写 `videoFile` 后启用页内播放器，本地视频优先。不会自动播放。
- **BibTeX**：首屏按钮定位到引用区，可复制或下载 `.bib`。正式出版后可补充卷页、DOI 和 URL；不要提前填入未确定的元数据。
- 链接支持完整 `https://` / `http://` URL 或 `./static/...` 项目相对路径。资源文件名建议使用英文且不含空格。

## 修改正文和素材

```text
index.html                    页面文案、作者、结果表、BibTeX 显示内容
citation.bib                  可下载引用；修改引用时与 index.html 同步
static/js/config.js           所有可替换的论文 / arXiv / 视频链接
static/js/main.js             链接启用逻辑、引用复制
static/css/style.css          桌面、平板、手机与打印样式
static/images/                用户提供的六张论文图、论文缩略图、站点图标
static/pdfs/paper.pdf          当前提供的论文 PDF
.nojekyll                     按静态文件发布
```

图片可点击查看原图，不裁切论文图。网站未采用外部字体、CDN 或前端框架。数据表保留实验统计口径：每种方法各 5 次；时间与路径长度仅统计各自无碰撞实验，MPPI 为 3 次，CLIS-MPPI 为 5 次。RMSE 对比针对论文报告的代表性实验，不当作所有实验的均值。

## 本地预览

可双击 `index.html` 查看页面。建议通过本地 HTTP 服务检查链接和复制按钮：

```powershell
python -m http.server 8000 --bind 127.0.0.1
```

然后打开 http://127.0.0.1:8000/ 。停止服务按 Ctrl+C。

## 发布到 GitHub Pages

确认网页内容后，在当前仓库执行：

```powershell
git add .
git commit -m "Add CLIS-MPPI paper project page"
git push -u origin main
```

在 GitHub 仓库中打开 **Settings → Pages**，将 Source 设为 **Deploy from a branch**，选择 **main** 和 **/(root)**，点击 Save。部署完成后访问 https://macs-lab.github.io/CLIS-MPPI/ 。

后续更新只需编辑文件并提交、推送。所有本地素材均使用相对路径，适配 `/CLIS-MPPI/` 项目子目录。

## 设计来源

页面采用居中论文标题、圆角资源按钮、浅色分区和大幅论文图的学术项目页布局，参考 [MACS Lab robotic inspection project](https://macs-lab.github.io/robotic-inspection-orientation-control-2026/) 和 [Nerfies](https://nerfies.github.io/)。本项目的 HTML/CSS/JavaScript 独立实现，未复制其模板源码或第三方依赖。


## 标志素材来源

标题区域使用原始官方图片，保持原色与纵横比，不用字体或 CSS 模拟品牌标志。会议 logo 位于录用说明旁；UW 与 Amazon logo 缩小放在作者信息下方，标注 UW+Amazon Science Hub。

- `static/images/uw-block-w.png`：[UW Brand 官方 Block W 下载页](https://www.washington.edu/brand/brand-elements/logos/)，[原始 PNG](https://cdn.uw.edu/wp-content/uploads/sites/230/2023/11/02134808/W-Logo_Purple_Hex.png)。
- `static/images/amazon-logo.png`：[Amazon 官方新闻中心标志素材](https://press.aboutamazon.com/logos?p=4)，[原始 PNG](https://assets.aboutamazon.com/2e/d7/ac71f1f344c39f8949f48fc89e71/amazon-logo-squid-ink-smile-orange.png)。资助名称链接到 [UW+Amazon Science Hub 官网](https://www.sciencehub.uw.edu/)。
- `static/images/cdc2026-logo.png`：[CDC 2026 官方会议网站](https://cdc2026.ieeecss.org/)，[原始 PNG](https://confcats-siteplex.s3.us-east-1.amazonaws.com/cdc26/thumbnail_cdc2026logo_ankush_e3ca6c947a.png)。录用状态根据作者提供的信息更新为 Accepted to 65th IEEE Conference on Decision and Control (CDC 2026)。

品牌标志属于各自所有者，不包含在本项目原创网页设计的权利范围内。
