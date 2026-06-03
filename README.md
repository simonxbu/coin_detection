# 硬幣與代幣影像辨識系統

這是一份可部署到 GitHub + Vercel 的多頁式數位影像處理專題網站。內容以「原始影像採集證明 → 影像處理流水線 → 工程參數紀錄 → 成果展示 → AI 協作透明度 → 反思」為主線。

## 使用技術

- 程式語言：HTML、CSS、JavaScript
- 建置工具：Vite
- 部署平台：GitHub Repository + Vercel
- 網站型態：Multi-page static website

## 專案資料夾架構

```text
coin-recognition-website/
├── index.html
├── originality.html
├── pipeline.html
├── engineering.html
├── results.html
├── ai-transparency.html
├── reflection.html
├── package.json
├── vite.config.js
├── README.md
├── .gitignore
├── public/
│   ├── data/
│   │   └── project.json
│   └── images/
│       ├── original/
│       ├── backstage/
│       ├── process/
│       └── ai-log/
└── src/
    ├── styles.css
    └── main.js
```

## 本機開發環境設定

請先安裝 Node.js 18 以上版本。

```bash
npm install
npm run dev
```

開啟終端機顯示的本機網址，通常是：

```text
http://localhost:5173
```

## 建置正式版

```bash
npm run build
npm run preview
```

Vite 會把正式檔案輸出到 `dist/`。

## 替換圖片

目前 `public/images/` 中的 SVG 是佔位圖。交作業前請用你們的實際影像替換：

- `public/images/original/`：未處理原始影像
- `public/images/backstage/`：拍攝側拍、組員討論、程式測試截圖
- `public/images/process/`：透視校正、均衡化、Canny、Hough、ROI、最終結果
- `public/images/ai-log/`：AI prompt / debug 紀錄截圖

檔名不想改的話，直接用同名 `.png` 或 `.jpg` 取代後，再到 HTML 中更新副檔名即可。

## 更新專案資訊

請修改：

```text
public/data/project.json
```

可更新：

- 專題名稱
- 組員名單
- AI Log 連結
- GitHub 連結
- Vercel 連結

## 上傳到 GitHub

```bash
git init
git add .
git commit -m "Initial commit: DIP coin token website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

## Vercel 部署設定

在 Vercel 匯入 GitHub repository 後，建議設定：

```text
Framework Preset: Vite
Install Command: npm install
Build Command: npm run build
Output Directory: dist
```

Vercel 通常會自動偵測 Vite 並填入上述設定。

## 重要提醒

- 網站不能把 AI 生成圖片偽裝成原始採集資料。
- 若 AI 協助程式 Debug 或文字整理，請在 AI Transparency 頁面明確列出。
- Results 頁面的 KPI 和分類表目前是範例資料，請用實際 Python 輸出替換。
