// メッセージを取得する関数
function getMessage(type, link, name = "") {
  const messages = document.getElementById("messages");
  let message = messages.querySelector(`#${type}`).innerHTML;

  // リンクの置き換え
  message = message.replace("[応募フォームリンク]", link);

  // 名前の置き換え（親戚向けなどに必要な場合）
  if (name) {
    message = message.replace("〇〇さん", `${name}さん`);
  }

  return message;
}

// メッセージを表示する例
window.onload = function () {
  const output = document.getElementById("output");
  const link = "https://example.com/apply";

  // 1. 親しい友人に送るメッセージ
  const friendMessage = getMessage("friend", link);
  output.innerHTML += `<h3>親しい友人向け</h3><p>${friendMessage}</p>`;

  // 2. ちょっとした知り合いに送るメッセージ
  const acquaintanceMessage = getMessage("acquaintance", link);
  output.innerHTML += `<h3>ちょっとした知り合い向け</h3><p>${acquaintanceMessage}</p>`;

  // 3. 親戚に送るメッセージ（名前を指定）
  const relativeMessage = getMessage("relative", link, "田中");
  output.innerHTML += `<h3>親戚向け</h3><p>${relativeMessage}</p>`;

  // 4. それほど親しくない人に送るメッセージ
  const neutralMessage = getMessage("neutral", link);
  output.innerHTML += `<h3>それほど親しくない人向け</h3><p>${neutralMessage}</p>`;
};
