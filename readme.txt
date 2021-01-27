板井の環境構築方法
docker-compose build // コンテナの構築
↓
docker-compose run --rm react sh -c "npm install -g create-react-app && create-react-app workplace" //create-react-appのインストールと雛形の作成
↓
docker-compose up -d // バックグラウンドでコンテナを起動
↓
docker exec -it tigerhackdemo_react_1 /bin/ash // 起動しているコンテナにログイン
↓
cd workplace
↓
npm install --save @material-ui/core @material-ui/icons @material-ui/system
↓
firebase login --no-localhost
↓
リンクを踏んでgoogleアカウントにログイン
↓
出てくるコードを貼り付け（これでログイン完了）
↓
firebase init
↓
 ◉ Firestore: Deploy rules and create indexes for Firestore
 ◉ Functions: Configure and deploy Cloud Functions
 ◉ Hosting: Configure and deploy Firebase Hosting sites
これを選択
↓
Use an existing project
これを選択
↓
firebaseで作ったものを選択
↓
firebaseルール変更
↓
index.jsの一番上の奴をコメントアウト
↓
npm run build
↓
firebase deploy

※deployしても変更されない場合は
⌘+shift+R
でキャッシュをクリアしてリロード

npm installでバグったら
npm cache clean --force
