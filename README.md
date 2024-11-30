# 応募フォームのURLパラメータ説明

基本パラメータ:
- appType=1          : 応募種別（1:代理応募、未設定:直接応募）
- empName=東建二郎    : 紹介社員の名前
- empBranch=刈谷支店  : 紹介社員の支店名

応募者情報:
- name=鈴木一郎      : 応募者の氏名
- age=25            : 応募者の年齢
- email=suzuki@example.com : 応募者のメールアドレス
- phone=080-1234-5678     : 応募者の電話番号
- location=愛知県名古屋市  : 希望勤務地
- notes=            : 備考欄（空の場合は未入力）
- gender=男          : 性別（男/女/その他）
- consent=          : 本人承諾（はい/いいえ、空の場合は未選択）

使用例:
index.html?appType=1&empName=東建二郎&empBranch=刈谷支店&name=鈴木一郎&age=25&email=suzuki@example.com&phone=080-1234-5678&location=愛知県名古屋市&notes=&gender=男&consent=

注意:
- 空値の場合は「=」の後ろを空白にするか、パラメータ自体を削除する


紹介者のみ
index.html?empName=東建太朗&empBranch=刈谷支店

全パラメータ入り（直接応募）：
index.html?appType=&empName=東建太朗&empBranch=東京支店&name=佐藤花子&age=25&email=suzuki@example.com&phone=080-1234-5678&location=愛知県名古屋市&notes=特になし&gender=女&consent=

全パラメータ入り（代理応募）：
index.html?appType=1&empName=東建二郎&empBranch=刈谷支店&name=鈴木一郎&age=25&email=suzuki@example.com&phone=080-1234-5678&location=愛知県名古屋市&notes=&gender=男&consent=いいえ



# メール送信関連
メール送信はGoogle Apps Scriptを使用して実行している。

該当GASのURL:
https://script.google.com/home/projects/165LChlMtUevtJ1aqq_xZ-qLdZovjvbDZ9nYrL2hhwAuODg8ZVjm_kI_g/edit

## 実行されるタイミング
トリガーにて、スプレッドシートからフォーム送信時に実行される。
ユーザの操作としては、応募するボタンを押し、Googleスプレッドシートに登録されるタイミングで、メール送信用のメソッド（onFormSubmit）が実行される。

## 関連設定
sendmail.jsの上部に、メール送信に関する設定がある。
添付ファイルについては、URLで指定したファイルを取得したのち、メール送信時に添付している。
（GoogleDriveからFileIDを渡す方法は、試したが、うまくいかなかったため、URLで指定したファイルを取得する方法にした）

以下はsendmail.jsの設定例。

// BCCメールアドレス
const BBC_EMAIL = "atsushi_sunahara+bcc@token.co.jp";

// 送信元メールアドレス
const FROM_EMAIL = "test@token.co.jp";

// ファイル関連の定数
const FILE_CONFIG = {
    URL: 'https://sunajpdev.github.io/応募フォーム.pdf',
    NAME: '営業部紹介資料.pdf',
    MIME_TYPE: 'application/pdf'
};

// メールテンプレートの定義
const EMAIL_TITLE = "応募を受け付けました";
const EMAIL_TEMPLATE = (name) => `
${name} 様

東建コーポレーションの採用面接にご応募いただき、ありがとうございました。
選考日程の詳細について、弊社担当者より後日ご連絡させていただきます。
営業部の紹介資料を添付いたします。ご一読いただけると幸いです。
よろしくお願いいたします。
`;
