#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// コマンドライン引数の 2 番目に isbn を指定
const isbn = process.argv[2];
if (!isbn) {
  console.error('ISBN の引数が必要です。');
  process.exit(1);
}

const formattedIsbn = isbn.toLowerCase();

// テンプレートファイルと作成先ファイルのパスを設定
const templatePath = path.join(__dirname, 'src', 'content', 'books', '_.md');
const newFilePath  = path.join(__dirname, 'src', 'content', 'books', `${formattedIsbn}.mdx`);

// テンプレートを読み込み、isbn の部分を置換して新ファイルを作成
fs.readFile(templatePath, 'utf8', (readErr, data) => {
  if (readErr) {
    console.error('テンプレートの読み込みに失敗しました:', readErr);
    process.exit(1);
  }

  // 正規表現で isbn の項目（例: isbn: ""）を置換
  const updatedData = data.replace(/^(isbn:\s*")\s*(")/m, `$1${isbn}$2`);

  fs.writeFile(newFilePath, updatedData, 'utf8', (writeErr) => {
    if (writeErr) {
      console.error('新ファイルの作成に失敗しました:', writeErr);
      process.exit(1);
    }
    console.log(`ファイル作成成功: ${newFilePath}`);
  });
});