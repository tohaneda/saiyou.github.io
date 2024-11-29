// ボタンの要素を取得
const shareButton = document.getElementById('webShareButton');

// シェア用テキストをHTMLから取得
const shareDataElement = document.getElementById('shareData');
const text = shareDataElement.getAttribute('data-text');

// URLパラメータを取得
const urlParams = new URLSearchParams(window.location.search);
const paramsString = urlParams.toString();

// シェアするURLを生成
const url = "https://asuna4993.github.io/ASuna4993/index.html" + (paramsString ? `?${paramsString}` : '');

// クリックイベントを設定
shareButton.addEventListener('click', async () => {
    try {
        await navigator.share({
            title: document.title,  // 1. タイトル
            text: text,             // 2. 文言
            url: url                // 3. リンク
        });
        console.log('シェア成功！');
    } catch (error) {
        console.error('シェア失敗', error);
    }
});
