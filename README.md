# danoni-key-change
## 概要
[Dancing☆Onigiri (CW Edition)](https://github.com/cwtickle/danoniplus)用のカスタムjsファイルです。キーの強制変更とダブルバトル機能が含まれます。

## キー数強制変更機能
URLクエリでkeyを指定するとそのキーに強制的に変更します。
例:
```
https://example.com/danoni/danoni.html?key=7p
```
基本的には譜面ヘッダーのキー指定を変更したのと同じ動作をするので、譜面データの変数名が共通していない部分のデータは無視されます。

## ダブルバトル機能
5key/12keyの譜面を9Akey/23keyの両側に流すように変更します。
- double=on (またはdouble=true)
  - 左右に全く同じ譜面を流します
- double=mirror
  - 左側をMirrorにして左右対称にします
- double=mirrorplus
  - 運指的に左右対称にします

キー数強制変更機能との併用も可能で、例えば7keyを12keyに変換してダブルバトルにできます。


## 設置方法
jsフォルダにkey_change.jsを配置し、
danoni_settingのcustomJsに指定します。
```
g_presetObj.customJs = 'key_change.js';
```
既に他のカスタムjsを使用している場合はカンマ区切りで追加します。
```
g_presetObj.customJs = 'foo.js,bar.js,key_change.js';
```

## 対応キーを増やす
必要に応じて、keysData.jsの内容をdanoni_settingに追加してください。1,5g,6,6s,7p,8i,9j,9g,9v,10,10p,10R,11f,11j,12i,12F,18,20,21i,24ikeyが使用可能になります。

9t,27k,47kkeyの定義も含まれていますが、こちらの使用にはcustomjs/cssの導入が必要です。

## 特殊キーへの対応
9tkey,18pkey,27kkey,47kkeyに対応するには以下のリポジトリから各ファイルを入手して配置します。
- 9tkey: [Dancing☆Onigiri 9tkey](https://github.com/suzme/danoni-9t)
  - js/danoni_custom_9t.js
  - css/9tkey.css
- 18pkey: [Punching◇Panels](https://github.com/cwtickle/punching-panels)
  - js/pstyle.js
  - css/pstyle.css
- 27kkey, 47kkey: [Kirizma (CW Edition)](https://github.com/cwtickle/kirizma-cw)
  - js/kstyle.js
  - css/kstyle.css

特殊キーでは以下のような動作をします。
- 9tkey
  - フリーズアローは通常矢印に変換されます
- 18pkey
  - フリーズアローは通常矢印に変換されます
  - 変数名は17keyのものを使用しています
- 27kkey/47kkey
  - フリーズアローは通常矢印に変換されます
  - 同時押しは単押しに変換されます
  - すべてのノーツがCキーに割り当てられます(S-Ran前提)

