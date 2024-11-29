// ボタンの要素を取得
const shareButton = document.getElementById('webShareButton');

// ページのdescriptionを取得
const descriptionMeta = document.querySelector("meta[name='description']");
const description = descriptionMeta ? descriptionMeta.getAttribute("content") : '';

// URLパラメータを取得
const urlParams = new URLSearchParams(window.location.search);
// パラメータを文字列として取得（例：param1=value1&param2=value2）
const paramsString = urlParams.toString();

const url = "https://asuna4993.github.io/ASuna4993/index.html" + (paramsString ? `?${paramsString}` : '');

// クリックイベントを設定
shareButton.addEventListener('click', async () => {
    try {
        await navigator.share({
            title: document.title,       // ページのタイトルを設定
            text: description,           // ページのdescriptionを設定
            url: url    // 現在のURLを取得
        });
        console.log('シェア成功！');
    } catch (error) {
        console.error('シェア失敗', error);
    }
});
